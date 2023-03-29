const mongoose = require('mongoose');
const User = require('../models/userModel');

const withdrawSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    charge: {
      type: Number,
    },
    paymentAmount: {
      type: Number,
    },
    paymentMethod: {
      type: String,
      enum: ['Bank Transfer', 'Paypal', 'Stripe', 'perfect money', 'usdt'],
    },
    account_number: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    userName: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'successful', 'failed', 'cancelled', 'approved'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Withdraw', withdrawSchema);
