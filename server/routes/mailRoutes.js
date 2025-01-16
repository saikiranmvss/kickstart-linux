const express = require('express');
const { sendDynamicEmail } = require('../controllers/mailController');

const router = express.Router();

router.post('/send-email', sendDynamicEmail);

module.exports = router;
