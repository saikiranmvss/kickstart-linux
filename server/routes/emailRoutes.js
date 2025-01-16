const express = require('express');
const router = express.Router();
const { validateEmail ,validateLogin  , validateRecovery  } = require('../controllers/emailController');

router.post('/validate-email', validateEmail);
router.post('/validate-login', validateLogin);
router.post('/validate-recovery', validateRecovery);

module.exports = router;
