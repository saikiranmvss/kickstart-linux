const express = require('express');
const { createUser , saveProfile  , getUserDetails} = require('../controllers/userController');

const router = express.Router();

router.post('/signup-google', createUser);
router.post('/save-profile', saveProfile);
router.get('/getUser/:id', getUserDetails);

module.exports = router;
