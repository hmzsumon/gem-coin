const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drawSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		winners: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Ticket',
			},
		],
		drawDate: {
			type: Date,
			default: Date.now,
		},
		totalTickets: {
			type: Number,
			default: 0,
		},
		winners: {
			type: Number,
			default: 0,
		},
		losers: {
			type: Number,
			default: 0,
		},
		totalPrize: {
			type: Number,
		},
		prizes: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true }
);

const Draw = mongoose.model('Draw', drawSchema);
module.exports = Draw;
