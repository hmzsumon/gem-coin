const PxcPrice = require('../models/pxc_price');
const User = require('../models/userModel');
const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const createTransaction = require('../utils/tnx');

// create a pxc price
exports.createPxcPrice = catchAsyncErrors(async (req, res, next) => {
	const users = await User.find();
	console.log(req.body.price);
	const { price } = req.body;
	const numPrice = Number(price);
	const newPxcPrice = new PxcPrice({
		price: numPrice,
	});
	const pxcPrice = await newPxcPrice.save();

	users.forEach(async (user) => {
		if (user.balance === 0) {
			return;
		}
		user.gem_coin = user.gem_coin * pxcPrice.price;
		await user.save();
	});

	res.status(201).json({
		success: true,
		pxcPrice,
	});
});

// get all pxc prices by date
exports.getAllPxcPrices = catchAsyncErrors(async (req, res, next) => {
	const prices = await PxcPrice.find();
	const priceLength = await prices.length;
	const currentPrice = await prices[priceLength - 1];
	const lastPrice = await prices[priceLength - 2];
	res.status(200).json({
		success: true,
		prices,
		currentPrice,
		lastPrice,
	});
});

//get last pxc price
exports.getLastPxcPrice = catchAsyncErrors(async (req, res, next) => {
	const pxcPrices = await PxcPrice.find();
	const priceLength = pxcPrices.length;
	const lastPrice = pxcPrices[priceLength - 1];
	res.status(200).json({
		success: true,
		lastPrice,
	});
});

// get pxc price data by date
exports.getPxcPriceByDate = catchAsyncErrors(async (req, res, next) => {
	const pxcPrice = await PxcPrice.findOne({ date: req.params.date });
	if (!pxcPrice) {
		return next(new ErrorHander('No pxc price found with that date', 404));
	}
	res.status(200).json({
		success: true,
		pxcPrice,
	});
});

// get single pxc price
exports.getSinglePxcPrice = catchAsyncErrors(async (req, res, next) => {
	const pxcPrice = await PxcPrice.findById(req.params.id);
	if (!pxcPrice) {
		return next(new ErrorHander('No pxc price found with that id', 404));
	}
	res.status(200).json({
		success: true,
		pxcPrice,
	});
});

// send pxc
exports.sendPxc = catchAsyncErrors(async (req, res, next) => {
	const sender = await User.findById(req.user._id);
	const { recipientId, amount } = req.body;
	const recipient = await User.findOne({ customer_id: recipientId });
	if (!recipient) {
		return next(new ErrorHander('No user found with that id', 404));
	}

	const numAmount = Number(amount);

	const fee = amount * 0.005;

	const netAmount = Number(numAmount + fee);
	// console.log(netAmount);

	// check if sender has enough balance
	if (sender.balance < netAmount) {
		return next(new ErrorHander('Insufficient balance', 404));
	}
	const pxcPrices = await PxcPrice.find();
	const priceLength = pxcPrices.length;
	const lastPrice = pxcPrices[priceLength - 1];
	const pxc = numAmount / lastPrice.price;
	const pxcRecipient = numAmount / lastPrice.price;

	// update sender balance
	sender.balance = sender.balance - netAmount;
	sender.pxc_balance = sender.pxc_balance - pxc;
	await sender.save();
	createTransaction(
		sender._id,
		'cashOut',
		netAmount,
		'Send PXC',
		`Send Pxc To ${recipient.name}`,
		lastPrice.price
	);

	// update recipient balance
	recipient.balance = recipient.balance + numAmount;
	recipient.pxc_balance = recipient.pxc_balance + pxcRecipient;
	await recipient.save();
	createTransaction(
		recipient._id,
		'cashIn',
		numAmount,
		'Receive PXC',
		`Receive Pxc From ${sender.name}`,
		lastPrice.price
	);

	res.status(200).json({
		success: true,
		message: 'Pxc sent successfully',
	});
});
