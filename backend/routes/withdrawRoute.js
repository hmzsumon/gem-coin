const express = require('express');
const multer = require('multer');
const {
	withdraw,
	updateSingleUserWithBalance,
	getWithdrawRequest,
	getAllWithdrawRequest,
	approvePendingWithdrawRequest,
	cancelPendingWithdrawRequest,
	newWithdrawRequest,
	getSingleWithdrawRequest,
} = require('../controllers/withdrawController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const upload = multer({});

const router = express.Router();

// with balance
router.route('/withdraw').post(isAuthenticatedUser, withdraw);

// get single withdraw request
router.route('/withdraw/:id').get(getSingleWithdrawRequest);

// update single user with balance
router.route('/withdraw-update/:id').put(updateSingleUserWithBalance);

// get login user withdraws
router.route('/my/withdraws').get(isAuthenticatedUser, getWithdrawRequest);

// get all withdraws for admin
router
	.route('/withdraws/all')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getAllWithdrawRequest);

// approved pending withdraws
router
	.route('/withdraw/approve')
	.put(
		isAuthenticatedUser,
		authorizeRoles('admin'),
		approvePendingWithdrawRequest
	);

// cancel pending withdraws
router
	.route('/withdraw/cancel')
	.put(isAuthenticatedUser, cancelPendingWithdrawRequest);

// create new withdraw request
router
	.route('/withdraws/new')
	.post(upload.none(), isAuthenticatedUser, newWithdrawRequest);

module.exports = router;
