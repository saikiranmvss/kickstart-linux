const express = require('express');
const { createUser , saveProfile  , getUserDetails , RegisterUser} = require('../controllers/userController');
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.post('/signup-google', createUser);
router.post('/register', RegisterUser);
router.post('/save-profile', saveProfile);
router.get('/getUser/:id', authenticateToken , getUserDetails);

module.exports = router;
