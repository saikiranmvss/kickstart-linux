const express = require('express');
const router = express.Router();
const {  saveJourney  } = require('../controllers/journeyController');

router.post('/user-journey', saveJourney);

module.exports = router;
