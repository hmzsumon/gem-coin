const express = require('express');
const {
	createTransaction,
	getUserTransactions,
	convertTransaction,
	sendMoney,
	getLoginUserTransactions,
	sendGem,
} = require('../controllers/transactionController');
const { isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();

router.route('/transaction').get(createTransaction);
router.route('/transaction/new').post(isAuthenticatedUser, createTransaction);
router.route('/transaction/me').get(isAuthenticatedUser, getUserTransactions);
router
	.route('/transaction/convert')
	.post(isAuthenticatedUser, convertTransaction);

router.route('/transaction/send').post(isAuthenticatedUser, sendMoney);

// login user transactions
router
	.route('/my/transactions')
	.get(isAuthenticatedUser, getLoginUserTransactions);

router.route('/send/gem').post(isAuthenticatedUser, sendGem);

module.exports = router;
