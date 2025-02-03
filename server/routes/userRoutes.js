const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup-google', createUser);

module.exports = router;
