const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');

// Route to send the contact form message
router.post('/send', sendContactEmail);

module.exports = router;
