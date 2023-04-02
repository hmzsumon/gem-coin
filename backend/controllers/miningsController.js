const Mining = require('../models/miningModel');
const User = require('../models/userModel');
var crypto = require('crypto');
const moment = require('moment');
const Price = require('./../models/pxcPrice');
const { sendMe } = require('../utils/sendEmail');
const MiningTnx = require('../models/miningTnx');
const cron = require('node-cron');
const createTransaction = require('../utils/tnx');
const ErrorHander = require('../utils/errorhander');

const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const bitcoinTransactionModel = require('../models/bitcoinTransactionModel');

// create a mining
exports.createMining = catchAsyncErrors(async (req, res, next) => {
	const prices = await Price.find();
	const priceLength = prices.length;
	const lastPrice = prices[priceLength - 1].price;
	req.body.user = req.user.id;
	const user = await User.findById(req.user.id);
	// console.log(req.user.id);
	if (user.balance < 50) {
		return next(new ErrorHander('Insufficient balance', 400));
	}

	let id = crypto.randomBytes(13).toString('hex');
	const miningId = `G${id}`;
	user.mining_id = miningId;
	user.balance -= 50;
	const pxc = 10 / lastPrice;
	user.gem_coin -= pxc;
	createTransaction(user._id, 'cashOut', 10, 'Mining', 'Create Mining ID');
	await user.save();

	const mining = await Mining.create({
		mining_user: user._id,
		user_name: user.name,
		mining_id: miningId,
		mining_status: 'active',
	});

	res.status(201).json({
		success: true,
		mining_id: user.mining_id,
		mining,
	});
});

// get a mining
exports.getMining = catchAsyncErrors(async (req, res, next) => {
	req.body.user = req.user.id;
	const mining = await Mining.findById(req.body.user);
	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	res.status(200).json({
		success: true,
		mining,
	});
});

// get logged in user mining
exports.getLoggedInUserMining = catchAsyncErrors(async (req, res, next) => {
	const minings = await Mining.find({ mining_user: req.user.id });
	const mining = minings[0];
	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	res.status(200).json({
		success: true,
		mining,
	});
});

// get specific mining
exports.getSpecificMining = catchAsyncErrors(async (req, res, next) => {
	const mining = await Mining.findById(req.params.id);
	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	res.status(200).json({
		success: true,
		mining,
	});
});

// active mining
exports.activeMining = catchAsyncErrors(async (req, res, next) => {
	const mining = await Mining.findById(req.params.id);
	let miningStatus = mining.mining_status;
	let miningBalance = mining.mining_balance;
	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	mining.mining_status = 'active';
	mining.mining_balance = miningBalance - 10;
	await mining.save();
	res.status(200).json({
		success: true,
		mining,
	});
});

// start mining
exports.startMining = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	if (!user) {
		return next(new ErrorHander('No user found with that ID', 404));
	}
	const prices = await Price.find();
	const priceLength = prices.length;
	const lastPrice = prices[priceLength - 1].price;

	// console.log(req.user.id);
	// console.log(req.body);

	const { package } = req.body;

	let investMent = Number(package);
	let userPxcBalance = Number(user.pxc_balance);

	if (investMent > user.balance) {
		return next(new ErrorHander('You do not have enough Balance', 404));
	}

	const mining = await Mining.findOne({ mining_user: req.user.id });
	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	let gem_coin = investMent / lastPrice;

	//update user balance
	user.balance -= investMent;
	user.gem_coin -= gem_coin;
	createTransaction(user._id, 'cashOut', investMent, 'Mining', 'Start Mining');
	await user.save();

	mining.mining_startAt = new Date();
	mining.mining_investment = investMent;
	mining.isStart = true;
	await mining.save();

	// await sendMe({
	//   subject: `Investment in mining`,
	//   message: `User Name: ${user.name}, Amount: ${investMent} \n Phone: ${
	//     user.phone_number
	//   }, Email: ${user.email}, Date: ${new Date().toLocaleDateString()}`,
	// });

	res.status(200).json({
		success: true,
		mining,
	});
});

// update mining
exports.updateMining = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	if (!user) {
		return next(new ErrorHander('No user found with that ID', 404));
	}
	const mining = await Mining.findOne({ mining_user: req.user.id });

	// all convert transaction
	const allConvertTransaction = await MiningTnx.find({
		miningTnxType: 'convert',
	});
	// total convert transaction amount
	let totalConvertTransactionAmount = 0;
	allConvertTransaction.forEach((item) => {
		totalConvertTransactionAmount += item.amount;
	});

	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}

	if (mining.mining_status === 'inactive') {
		return next(new ErrorHander('Mining is not active', 404));
	}

	// get difference between current time and start time
	let startTime = mining.mining_startAt;
	let currentTime = new Date();
	let diff = moment(currentTime).diff(moment(startTime), 'minutes');
	let oneDayProfit = mining.mining_investment * 0.01;
	let oneHourProfit = oneDayProfit / 24;
	let oneMinuteProfit = oneHourProfit / 60;
	let totalProfit = oneMinuteProfit * diff;
	mining.mining_profit = totalProfit - totalConvertTransactionAmount;
	// await mining.save();

	// update user balance
	user.mining_profit = mining.mining_profit;
	// await user.save();

	res.status(200).json({
		success: true,
		profit: mining.mining_profit,
	});
});

// send mining balance
exports.sendMiningBalance = catchAsyncErrors(async (req, res, next) => {
	const senderMining = await Mining.findOne({ mining_user: req.user.id });
	if (!senderMining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	let { amount, mining_id } = req.body;
	let numAmount = Number(amount);
	let fee = numAmount * 0.005;
	let totalAmount = numAmount + fee;

	let senderMiningBalance = senderMining.mining_balance;

	if (senderMining.mining_balance < totalAmount) {
		return next(new ErrorHander('You do not have enough balance', 404));
	}

	senderMining.mining_balance = senderMiningBalance - totalAmount;
	await senderMining.save();

	const receiverMining = await Mining.findOne({ mining_id: mining_id });
	if (!receiverMining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}

	let receiverMiningBalance = receiverMining.mining_balance;
	receiverMining.mining_balance = receiverMiningBalance + numAmount;
	await receiverMining.save();

	const transaction = await bitcoinTransactionModel.create({
		amount: numAmount,
		fee,
		totalAmount,
		sender_id: req.user.id,
		senderMinId: senderMining.mining_id,
		recipientMinId: receiverMining.mining_id,
	});
	await transaction.save();

	res.status(200).json({
		success: true,
		message: 'Mining balance sent successfully',
	});
});

// remove mining id from all users
exports.removeMiningId = catchAsyncErrors(async (req, res, next) => {
	const users = await User.find();
	users.forEach(async (user) => {
		user.mining_id = null;
		await user.save();
	});
	res.status(200).json({
		success: true,
		message: 'Mining id removed successfully',
	});
});

// convert mining to credit
exports.convertMiningToCredits = catchAsyncErrors(async (req, res, next) => {
	const pxcPrices = await PxcPrice.find().sort({ _id: -1 }).limit(1);
	const currentPrice = pxcPrices[0].price;

	const user = await User.findById(req.user.id);
	const mining = await Mining.findOne({ mining_user: req.user.id });
	if (!mining) {
		return next(new ErrorHander('No mining found with that ID', 404));
	}
	const miningProfit = mining.mining_profit;
	let amount = req.body.amount;
	const fee = 2;
	if (amount < 10) {
		return next(
			new ErrorHander('Amount must be greater than or Equal 10$', 404)
		);
	}
	let numAmount = Number(amount);
	const totalAmount = numAmount + fee;
	if (miningProfit < totalAmount) {
		return next(new ErrorHander('You do not have enough balance', 404));
	}

	mining.mining_profit -= totalAmount;
	createTransaction(
		user._id,
		'cashOut',
		totalAmount,
		'convert',
		'Convert Mining to PXC'
	);
	await mining.save();
	const pxc = numAmount / currentPrice;
	user.pxc_balance += pxc;
	user.balance += numAmount;
	createTransaction(
		user._id,
		'cashIn',
		numAmount,
		'convert',
		`Convert Mining to PXC = ${pxc}`
	);
	await user.save();

	res.status(200).json({
		success: true,
		message: 'Mining converted to credit successfully',
		mining,
	});
});

//convert pxc mining_balance to pxc coin
exports.convertMiningBalanceToPxc = catchAsyncErrors(async (req, res, next) => {
	const pxcPrices = await PxcPrice.find().sort({ _id: -1 }).limit(1);
	const currentPrice = pxcPrices[0].price;

	const user = await User.findById(req.user.id);

	const amount = req.body.amount;
	const numAmount = Number(amount);
	//check user pxc_mining_balance < amount
	if (user.pxc_mining_balance < numAmount) {
		return next(new ErrorHander('You do not have enough balance', 404));
	}

	// check pxc_balance > 10
	if (user.pxc_balance < 10) {
		return next(
			new ErrorHander('You do not have enough PXC Coin balance', 404)
		);
	}

	const pxc = numAmount / currentPrice;
	user.pxc_mining_balance -= numAmount;
	createTransaction(
		user._id,
		'cashOut',
		numAmount,
		'convert',
		'Convert Mining to PXC Coin'
	);
	user.pxc_balance += pxc;
	user.balance += numAmount;
	createTransaction(
		user._id,
		'cashIn',
		numAmount,
		'convert',
		`Convert Mining to PXC Coin = ${pxc}`
	);
	await user.save();

	res.status(200).json({
		success: true,
		message: 'Mining converted to credit successfully',
	});
});

// call corn job every 30 seconds
cron
	.schedule('*/1 * * * *', async () => {
		const minings = await Mining.find({
			mining_status: 'active',
			isStart: true,
		});

		for (let i = 0; i < minings.length; i++) {
			// find mining
			const mining = await Mining.findOne({ _id: minings[i]._id });
			// console.log('Mining profit1', mining.mining_profit);
			const oneDayProfit = mining.mining_investment * 0.005;
			const oneHourProfit = oneDayProfit / 24;
			const oneMinuteProfit = oneHourProfit / 60;
			// console.log('Mining profit1', mining.mining_profit);
			mining.mining_profit += oneMinuteProfit;
			await mining.save();

			// console.log('User profit2', mining.user_name);

			const user = await User.findById(mining.mining_user);
			if (user) {
				user.mining_profit = mining.mining_profit;
				await user.save();
				// console.log('Profit updated', oneMinuteProfit);
			}
		}

		//console.log('cron job',);
	})
	.start();
