const express = require('express');
const router = express.Router();
const { validateEmail } = require('../controllers/emailController');

router.post('/validate-email', validateEmail);

module.exports = router;
