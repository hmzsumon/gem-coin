const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
	createPxcPrice,
	getAllPxcPrices,
	getSinglePxcPrice,
	getLastPxcPrice,
	sendPxc,
	createPrice,
} = require('../controllers/pxcPriceController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const upload = multer({});
router.post('/create-price', upload.none(), createPrice);
router.post('/pxc-price', createPxcPrice);
router.get('/pxc-prices', getAllPxcPrices);
router.get('/pxc-price/last', getLastPxcPrice);
router.get('/pxc-price/:id', getSinglePxcPrice);

router.post('/send/pxc', isAuthenticatedUser, authorizeRoles('user'), sendPxc);

module.exports = router;
