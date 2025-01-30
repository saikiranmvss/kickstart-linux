const express = require('express');
const router = express.Router();
const { validateEmail ,validateLogin  , validateRecovery ,validatePin  } = require('../controllers/emailController');

router.post('/validate-email', validateEmail);
router.post('/validate-login', validateLogin);
router.post('/validate-recovery', validateRecovery);
router.post('/validate-pin', validatePin);

module.exports = router;
