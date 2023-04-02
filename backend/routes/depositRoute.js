const express = require('express');
const router = express.Router();
const {
	createDeposit,
	getUserDeposits,
	getAllDeposits,
	confirmDeposit,
	deleteAllPendingDeposits,
	getSingleDeposit,
	approveDeposit,
} = require('../controllers/depositController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
// get all deposits
router.get(
	'/admin/deposits',
	isAuthenticatedUser,
	authorizeRoles('admin'),
	getAllDeposits
);
router.post('/deposit', isAuthenticatedUser, createDeposit);
router.get('/deposits/me', isAuthenticatedUser, getUserDeposits);
// confirm deposit
router.put('/deposit/confirm/:id', isAuthenticatedUser, confirmDeposit);

// delete all pending deposits
router.delete('/deposit/delete/pending', deleteAllPendingDeposits);

// get single deposit
router.get('/deposit/:id', isAuthenticatedUser, getSingleDeposit);

// approve a single deposit
router.put(
	'/deposit/approve/:id',
	isAuthenticatedUser,
	authorizeRoles('admin'),
	approveDeposit
);

module.exports = router;
