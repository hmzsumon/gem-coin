const express = require('express');
const router = express.Router();
const {
	createDeposit,
	getUserDeposits,
	getAllDeposits,
	confirmDeposit,
	deleteAllPendingDeposits,
} = require('../controllers/depositController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
// get all deposits
router.get(
	'/deposits',
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

module.exports = router;
