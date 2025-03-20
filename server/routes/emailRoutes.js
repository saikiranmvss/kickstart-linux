const express = require('express');
const router = express.Router();
const { validateEmail ,validateLogin  , validateRecovery ,validatePin , ChangePassword  } = require('../controllers/emailController');

router.post('/validate-emails', validateEmail);
router.post('/validate-login', validateLogin);
router.post('/validate-recovery', validateRecovery);
router.post('/validate-pin', validatePin);
router.post('/change-password', ChangePassword);

module.exports = router;
