const express = require('express');
const {
	seedUser,
	registerUser,
	loginUser,
	logout,
	forgotPassword,
	resetPassword,
	getUserDetails,
	updatePassword,
	updateProfile,
	getAllUser,
	getSingleUser,
	updateUserRole,
	deleteUser,
	updateAllUsersBalance,
	getUserByPxcId,
	sendVerificationEmail,
	findUserByPhoneNumber,
	verifyUserEmail,
	verifyAllEmil,
	updateUserBalanceByPxcPrice,
	registerMerchant,
	getAllUsersBalance,
	updatePxcMiningBalance,
	startPxcMining,
	isCompletedPxcMining,
	updatePxcMining,
	updateAllUsersBalance2,
} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const User = require('../models/userModel');

const router = express.Router();

router.route('/seed').get(seedUser);

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgotPassword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/logout').put(logout);

router.route('/load-user').get(isAuthenticatedUser, getUserDetails);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// update all users balance
router.route('/balance/update').put(updateAllUsersBalance);

// get User by Pxc Id
router.route('/pxc-id').get(getUserByPxcId);

router
	.route('/admin/users')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getAllUser);

router
	.route('/admin/user/:id')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
	.put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
	.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

// send verification email
router.route('/verify-email').post(isAuthenticatedUser, sendVerificationEmail);

// find user by phone number
router.route('/find-user').get(findUserByPhoneNumber);

// validate user email
// router.route('/verify/:id/:token').put(verifyUserEmail);

// all email verification
// router.route('/verify-all-email').put(verifyAllEmil);

// update user balance
router
	.route('/update-balance')
	.put(isAuthenticatedUser, updateUserBalanceByPxcPrice);

// merchant register
router.route('/merchant/register').post(registerMerchant);

// get all users balance === 0
router.route('/balance/zero').get(getAllUsersBalance);

// update pxc mining balance
router.route('/update-pxc-mining-balance').put(updatePxcMiningBalance);

// start pxc mining
router.route('/start-pxc-mining').put(isAuthenticatedUser, startPxcMining);

// is completed pxc mining
router
	.route('/is-completed-pxc-mining')
	.put(isAuthenticatedUser, isCompletedPxcMining);

// update pxc mining
router.route('/update-pxc-mining').put(updatePxcMining);

// update all users balance
router.route('/update-all-users-balance').put(updateAllUsersBalance2);

module.exports = router;
