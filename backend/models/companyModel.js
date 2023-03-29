const { toolresults_v1beta3 } = require('googleapis');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
		},
		address: {
			type: String,
			trim: true,
		},
		//balance operation
		depositBalance: {
			type: Number,
			default: 0,
		},
		userActiveBalance: {
			type: Number,
			default: 0,
		},
		withdrawBalance: {
			type: Number,
			default: 0,
		},
		bonusBalance: {
			type: Number,
			default: 0,
		},
		commissionBalance: {
			type: Number,
			default: 0,
		},
		// user options
		userCreditBalance: {
			type: Number,
			default: 0,
		},
		usersWB: {
			type: Number,
			default: 0,
		},
		// lottery options
		lottery: {
			isLottery: {
				type: Boolean,
				default: true,
			},
			totalSellCount: {
				type: Number,
				default: 0,
			},
			totalSellAmount: {
				type: Number,
				default: 0,
			},
			toDaySellCount: {
				type: Number,
				default: 0,
			},
			toDaySellAmount: {
				type: Number,
				default: 0,
			},
			lotteryProfit: {
				type: Number,
				default: 0,
			},
			todayProfit: {
				type: Number,
				default: 0,
			},
			totalDraw: {
				type: Number,
				default: 0,
			},
		},

		// lucky draw options
		luckyDraw: {
			isLuckyDraw: {
				type: Boolean,
				default: true,
			},
			totalCount: {
				type: Number,
				default: 0,
			},
			totalAmount: {
				type: Number,
				default: 0,
			},
			toDayCount: {
				type: Number,
				default: 0,
			},
			toDayAmount: {
				type: Number,
				default: 0,
			},
		},

		// daily work options
		dailyWork: {
			isDailyWork: {
				type: Boolean,
				default: true,
			},
			todayWorkAmount: {
				type: Number,
				default: 0,
			},
			dailyWorkTotalAmount: {
				type: Number,
				default: 0,
			},
			dailyWorkTotalCount: {
				type: Number,
				default: 0,
			},
			todayWorkCount: {
				type: Number,
				default: 0,
			},
			todayWorkUsers: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			],
		},

		// generation bonus options
		generationBonus: {
			isGenerationBonus: {
				type: Boolean,
				default: true,
			},
			genBTotalAmount: {
				type: Number,
				default: 0,
			},
			genBTotalCount: {
				type: Number,
				default: 0,
			},
			todayGenBAmount: {
				type: Number,
				default: 0,
			},
		},

		// activation fee options
		activationFee: {
			isActivationFee: {
				type: Boolean,
				default: true,
			},
			totalActiveFee: {
				type: Number,
				default: 0,
			},
			totalActiveMember: {
				type: Number,
				default: 0,
			},
			todayActiveFee: {
				type: Number,
				default: 0,
			},
			todayActiveMember: {
				type: Number,
				default: 0,
			},
		},

		// convert options
		convert: {
			isConvert: {
				type: Boolean,
				default: true,
			},
			totalConvert: {
				type: Number,
				default: 0,
			},
			totalConvertCount: {
				type: Number,
				default: 0,
			},
			todayConvert: {
				type: Number,
				default: 0,
			},
			todayConvertCount: {
				type: Number,
				default: 0,
			},
		},

		// withdraw options
		withdraw: {
			isWithdraw: {
				type: Boolean,
				default: true,
			},

			totalWithdraw: {
				type: Number,
				default: 0,
			},

			totalWithdrawCount: {
				type: Number,
				default: 0,
			},

			todayWithdraw: {
				type: Number,
				default: 0,
			},

			todayWithdrawCount: {
				type: Number,
				default: 0,
			},
		},

		// deposit options
		deposit: {
			totalDepositCount: {
				type: Number,
				default: 0,
			},
			totalDepositAmount: {
				type: Number,
				default: 0,
			},
			todayDepositCount: {
				type: Number,
				default: 0,
			},
			todayDepositAmount: {
				type: Number,
				default: 0,
			},
		},
	},
	{ timestamps: true }
);

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
