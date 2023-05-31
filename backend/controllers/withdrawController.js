const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const createTransaction = require('../utils/tnx');
const Mining = require('../models/miningModel');
const getPrice = require('../utils/getPrice');
const WithdrawDetails = require('../models/withdrawDetailsModel');

const Company = require('../models/companyModel');
const companyId = process.env.COMPANY_ID;

const {
	sendEmail,
	sendMe,
	sendVerificationEmail,
} = require('../utils/sendEmail');
const PxcPrice = require('./../models/pxc_price');
const Withdraw = require('../models/withdraw');

// create withdrawal request
exports.withdraw = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user._id);
	if (!user) {
		return next(new ErrorHander('User not found', 404));
	}

	// find mining
	const mining = await Mining.findOne({ mining_user: req.user._id });
	if (!mining) {
		return next(new ErrorHander('Mining not found', 404));
	}

	let miningBalance = mining.mining_profit;

	const { amount, account_number } = req.body;
	if (amount < 30) {
		return next(new ErrorHander('Minimum withdraw amount is $30', 400));
	}
	const numAmount = Number(amount);
	const charge = numAmount * 0.025;
	const totalAmount = numAmount + charge;

	if (miningBalance < totalAmount) {
		return next(new ErrorHander('Insufficient balance', 400));
	}

	const withdrawalRequest = await Withdraw.create({
		user_id: user._id,
		userName: user.name,
		account_number: account_number,
		amount: numAmount,
		charge: charge,
		status: 'pending',
	});

	// update user balance

	mining.mining_profit -= totalAmount;
	createTransaction(
		user._id,
		'cashOut',
		totalAmount,
		'withdraw',
		'Withdraw request'
	);
	await mining.save({ validateBeforeSave: false });

	res.status(200).json({
		success: true,
		message: 'Withdraw request created',
		withdrawalRequest,
	});
});

// Create new withdraw request
exports.newWithdrawRequest = catchAsyncErrors(async (req, res, next) => {
	// find company
	const company = await Company.findById(companyId);
	if (!company) {
		return next(new ErrorHander('Company not found', 404));
	}
	const { amount, wallet, address } = req.body;
	const numAmount = Number(amount);
	const lastPrice = await getPrice();
	const coin = numAmount / lastPrice;

	const user = await User.findById(req.user.id);
	if (!user) {
		return next(new ErrorHander('User not found', 404));
	}

	// find withdraw details if not found create new
	let withdrawDetails = await WithdrawDetails.findOne({ user_id: req.user.id });
	if (!withdrawDetails) {
		withdrawDetails = await WithdrawDetails.create({
			user_id: req.user.id,
			name: user.name,
			email: user.email,
		});
	}

	// check if user has enough balance
	if (user.balance < amount) {
		return next(new ErrorHander('Insufficient balance', 400));
	}

	// check if user has enough balance
	if (user.gem_coin < coin) {
		return next(new ErrorHander('Insufficient balance', 400));
	}

	// create withdraw request
	const withdraw = await Withdraw.create({
		user_id: req.user.id,
		email: user.email,
		name: user.name,
		amount: numAmount,
		wallet,
		address,
		last_price: lastPrice,
		charge: 0,
	});

	// update user balance
	user.gem_coin = user.gem_coin - coin;
	user.balance = user.balance - numAmount;
	createTransaction(
		user._id,
		'cashOut',
		numAmount,
		'withdraw',
		'New withdraw request'
	);
	await user.save();
	// update company withdraw balance
	company.withdraw.new_withdraw += 1;
	company.withdraw.pending_withdraw_count += 1;
	company.withdraw.pending_withdraw_amount += numAmount;
	await company.save();

	// send email to user
	sendEmail({
		email: user.email,
		subject: 'Withdraw request created',
		message: `Your withdraw request of $${numAmount} has been created successfully. Please wait for admin approval`,
	});

	res.status(200).json({
		success: true,
		message: 'Withdraw request created successfully',
	});
});

// get logged in user withdraw request
exports.getWithdrawRequest = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user._id);
	if (!user) {
		return next(new ErrorHander('User not found', 404));
	}

	const withdraws = await Withdraw.find({ user_id: user._id });
	const pendingWithdraws = withdraws.filter(
		(withdraw) => withdraw.status === 'pending'
	);
	const lengthOfPendingWithdraws = pendingWithdraws.length;

	// total amount of approved withdraws
	const approvedWithdraws = withdraws.filter(
		(withdraw) => withdraw.status === 'approved'
	);
	let totalAmount = 0;
	approvedWithdraws.forEach((withdraw) => {
		totalAmount = totalAmount + withdraw.amount;
	});

	res.status(200).json({
		success: true,
		withdraws,
		pendingWithdraws,
		lengthOfPendingWithdraws,
		totalAmount,
	});
});

// gat all withdraw request
exports.getAllWithdrawRequest = catchAsyncErrors(async (req, res, next) => {
	const withdraws = await Withdraw.find();
	const pendingWithdraws = withdraws.filter(
		(withdraw) => withdraw.status === 'pending'
	);
	const lengthOfPendingWithdraws = pendingWithdraws.length;

	// console.log('totalAmount', totalAmount);
	res.status(200).json({
		success: true,
		withdraws,
		pendingWithdraws,
		lengthOfPendingWithdraws,
	});
});

//get single withdraw request
exports.getSingleWithdrawRequest = catchAsyncErrors(async (req, res, next) => {
	const withdraw = await Withdraw.findById(req.params.id);
	if (!withdraw) {
		return next(new ErrorHander('Withdraw not found', 404));
	}

	//find withdraw details
	const withdrawDetails = await WithdrawDetails.findOne({
		user_id: withdraw.user_id,
	});
	if (!withdrawDetails) {
		return next(new ErrorHander('Withdraw details not found', 404));
	}

	res.status(200).json({
		success: true,
		withdraw,
		withdrawDetails,
	});
});

// update withdraw request
exports.updateWithdrawRequest = catchAsyncErrors(async (req, res, next) => {
	const withdraw = await Withdraw.findById(req.params.id);
	if (!withdraw) {
		return next(new ErrorHander('Withdraw not found', 404));
	}

	const { status } = req.body;
	if (status === 'approved') {
		withdraw.status = 'approved';
	}

	if (status === 'cancelled') {
		withdraw.status = 'rejected';
	}
	withdraw.status = status;
	await withdraw.save();

	res.status(200).json({
		success: true,
		message: 'Withdraw status updated successfully',
	});
});

// approve pending withdraw request
exports.approvePendingWithdrawRequest = catchAsyncErrors(
	async (req, res, next) => {
		const { id, cryptoName, cryptoAddress, cryptoTnxId } = req.body;
		console.log(id, cryptoName, cryptoAddress, cryptoTnxId);
		const withdraw = await Withdraw.findById(id);
		if (!withdraw) {
			return next(new ErrorHander('Withdraw not found', 404));
		}

		//find withdraw details
		const withdrawDetails = await WithdrawDetails.findOne({
			user_id: withdraw.user_id,
		});
		if (!withdrawDetails) {
			return next(new ErrorHander('Withdraw details not found', 404));
		}

		//update withdraw details
		withdraw.status = 'approved';
		withdraw.approved_at = Date.now();
		withdraw.is_approved = true;
		withdraw.approved_wallet = cryptoName;
		withdraw.approved_wallet_address = cryptoAddress;
		withdraw.approved_tnx_id = cryptoTnxId;
		await withdraw.save();

		// update withdraw details
		withdrawDetails.total_withdraw += withdraw.amount;
		withdrawDetails.last_withdraw_amount = withdraw.amount;
		withdrawDetails.last_withdraw_date = Date.now();
		await withdrawDetails.save();

		res.status(200).json({
			success: true,
			message: 'Withdraw status updated successfully',
		});
	}
);

// cancel pending withdraw request
exports.cancelPendingWithdrawRequest = catchAsyncErrors(
	async (req, res, next) => {
		const { id, reason } = req.body;

		const withdraw = await Withdraw.findById(id);
		if (!withdraw) {
			return next(new ErrorHander('Withdraw not found', 404));
		}
		if (withdraw.status === 'cancelled') {
			return next(new ErrorHander('Withdraw already cancelled', 400));
		}

		const user = await User.findOne({ _id: withdraw.user_id });
		if (!user) {
			return next(new ErrorHander('User not found', 404));
		}

		////find withdraw details
		const withdrawDetails = await WithdrawDetails.findOne({
			user_id: withdraw.user_id,
		});
		if (!withdrawDetails) {
			return next(new ErrorHander('Withdraw details not found', 404));
		}

		//update withdraw
		withdraw.status = 'cancelled';
		withdraw.is_cancelled = true;
		withdraw.cancelled_reason = reason;
		withdraw.cancelled_at = Date.now();
		await withdraw.save();

		const coin = withdraw.amount / withdraw.last_price;
		// update user balance
		user.gem_coin = user.gem_coin + coin;
		user.balance = user.balance + withdraw.amount;
		await user.save();
		createTransaction(
			user._id,
			'cashIn',
			withdraw.amount,
			'withdraw',
			'Withdraw Cancel'
		);

		// update withdraw details
		withdrawDetails.total_cancel_withdraw += withdraw.amount;
		withdrawDetails.last_cancel_withdraw_amount = withdraw.amount;
		withdrawDetails.last_cancel_withdraw_amount = withdraw.amount;
		await withdrawDetails.save();

		res.status(200).json({
			success: true,
			message: 'Withdraw cancel successfully',
		});
	}
);

// update all user with balance

exports.updateAllUsersWithBalance = catchAsyncErrors(async (req, res, next) => {
	const users = await User.find();

	users.forEach(async (user) => {
		user.withdrawal_balance = user.balance * 0.1;
		await user.save();
	});

	res.status(200).json({
		success: true,
		message: 'All users balance updated successfully',
	});
});

// update single user with balance
exports.updateSingleUserWithBalance = catchAsyncErrors(
	async (req, res, next) => {
		const user = await User.findById(req.params.id);

		if (!user) {
			return next(
				new ErrorHander(`User does not exist with Id: ${req.params.id}`)
			);
		}

		user.withdrawal_balance = (user.balance * 0.1).toFixed(2);
		await user.save();

		res.status(200).json({
			success: true,
			message: 'User balance updated successfully',
		});
	}
);
