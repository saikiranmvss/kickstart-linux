const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');
const { validateEmail } = require('../controllers/formController');

router.post('/submit-form', submitForm);
router.post('/emailValidate', validateEmail);

module.exports = router;