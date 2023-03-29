const express = require('express');
const router = express.Router();

const {
	createMining,
	getLoggedInUserMining,
	getSpecificMining,
	activeMining,
	startMining,
	updateMining,
	sendMiningBalance,
	removeMiningId,
	getAllInvestments,
	convertMiningToCredits,
	convertMiningBalanceToPxc,
} = require('../controllers/miningsController');
const { isAuthenticatedUser } = require('../middleware/auth');

// create a mining
router.post('/mining', isAuthenticatedUser, createMining);

// get a mining
router.get('/mining/me', isAuthenticatedUser, getLoggedInUserMining);

// get specific mining
router.get('/mining/:id', isAuthenticatedUser, getSpecificMining);

// activate the mining
router.put('/mining/activate/:id', isAuthenticatedUser, activeMining);

// start mining
router.post('/mining/start', isAuthenticatedUser, startMining);

// update profit
router.put('/mining/update-profit', isAuthenticatedUser, updateMining);

// send mining balance
router.put('/mining/send-balance', isAuthenticatedUser, sendMiningBalance);

// remove mining
router.put('/mining/remove', isAuthenticatedUser, removeMiningId);

// convert mining to credits
router.put('/mining/convert', isAuthenticatedUser, convertMiningToCredits);

// convert mining balance to pxc coin
router.put(
	'/mining/convert-balance',
	isAuthenticatedUser,
	convertMiningBalanceToPxc
);

module.exports = router;
