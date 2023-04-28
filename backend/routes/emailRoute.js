const express = require('express');
const router = express.Router();
const {
	sendEmail,
	sendMe,
	sendVerificationEmail,
} = require('../utils/sendEmail');

// send email
router.post('/send-email', async (req, res) => {
	const { email, subject, text } = req.body;
	// console.log(req.body);
	await sendEmail({ email, subject, message: text });
	res.status(200).json({
		message: 'Email sent successfully',
		// result,
		// allUserEmail,
	});
});
module.exports = router;
