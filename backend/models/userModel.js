const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { type } = require('os');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please Enter Your Name'],
			maxLength: [30, 'Name cannot exceed 30 characters'],
			minLength: [3, 'Name should have more than 4 characters'],
		},
		username: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Please Enter Your Email'],
			unique: true,
			validate: [validator.isEmail, 'Please Enter a valid Email'],
		},
		phone: {
			type: String,
			unique: true,
			minLength: [10, 'Phone number should have 10 characters'],
			maxLength: [14, 'Phone number should have 10 characters'],
			trim: true,
		},
		customer_id: {
			type: String,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please Enter Your Password'],
			minLength: [6, 'Password should be greater than 6 characters'],
			select: false,
		},

		six_digit_pin: {
			type: Number,
			length: [6, 'Pin should be 6 digits'],
		},
		avatar: {
			public_id: {
				type: String,
			},
			url: {
				type: String,
			},
		},
		role: {
			type: String,
			default: 'user',
		},

		country: {
			type: String,
			trim: true,
		},

		address: {
			address_line1: {
				type: String,
			},
			address_line2: {
				type: String,
			},
			city: {
				type: String,
				trim: true,
			},

			state: {
				type: String,
				trim: true,
			},
			postcode: {
				type: String,
				trim: true,
			},
			is_full: {
				type: Boolean,
				default: false,
			},
		},

		// balance options
		balance: {
			type: Number,
			default: 0,
		},
		gem_coin: {
			type: Number,
			default: 0,
		},
		withdrawal_balance: {
			type: Number,
			default: 0,
		},
		mining_balance: {
			type: Number,
			default: 0,
		},
		bonus_balance: {
			type: Number,
			default: 0,
		},

		sinUp_bonus: {
			type: Number,
		},

		merchant_profit: {
			type: Number,
		},

		merchant_bonus: {
			type: Number,
		},
		referral_token: {
			type: Number,
			default: 0,
		},
		referral_bonus: {
			type: Number,
			default: 0,
		},
		referral_code: {
			type: String,
		},

		email_verified: {
			type: Boolean,
			default: false,
		},
		verify_code: {
			type: String,
		},
		active_status: {
			type: Boolean,
			default: false,
		},
		address_verified: {
			type: Boolean,
			default: false,
		},
		transactions: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Transaction',
				},
			],
		},
		sponsor_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		referal_users: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		nid_number: {
			type: String,
			trim: true,
		},

		nid_image: {
			nid_number: {
				type: String,
			},
			nid_front: {
				type: String,
				image_url: {
					type: String,
				},
			},
			nid_back: {
				type: String,
				image_url: {
					type: String,
				},
			},
		},
		notifications: [],
		conversations: [],
		QRCode: {
			type: String,
		},

		// social links
		facebook: {
			type: String,
			trim: true,
		},

		youtube: {
			type: String,
			trim: true,
		},

		telegram: {
			type: String,
			trim: true,
		},

		resetPasswordToken: String,
		resetPasswordExpire: Date,
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

// Compare Password

userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
	// Generating Token
	const resetToken = crypto.randomBytes(20).toString('hex');

	// Hashing and adding resetPasswordToken to userSchema
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

	return resetToken;
};

module.exports = mongoose.model('User', userSchema);
