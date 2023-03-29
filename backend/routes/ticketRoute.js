const express = require('express');
const {
	createTickets,
	raffleDraw,
	generate10Winners,
	getTickets,
	buyTicket,
	getUserTickets,
	getUserLuckyBoxes,
	openLuckyBox,
	getDrawByDate,
	getAllSoldTickets,
} = require('../controllers/ticketController');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

// create some tickets
router.post(
	'/tickets',
	isAuthenticatedUser,
	authorizeRoles('admin'),
	createTickets
);

router.get('/draw', raffleDraw);

// generate some winners
router.get('/winners', generate10Winners);

// get tickets with limit and skip
router.get('/tickets', getTickets);

// buy a ticket by id
router.post('/ticket/buy/:id', isAuthenticatedUser, buyTicket);

// get logged in user's tickets
router.get('/user/tickets', isAuthenticatedUser, getUserTickets);

// get logged in user's lucky box
router.get('/user/lucky-boxes', isAuthenticatedUser, getUserLuckyBoxes);

// open lucky box
router.get('/lucky-boxes/:id', isAuthenticatedUser, openLuckyBox);

// find tickets by draw date
router.get('/raffle-draw', getDrawByDate);

// get all isSold tickets
router.get('/sold/tickets', getAllSoldTickets);

module.exports = router;
