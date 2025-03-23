const express = require('express');
const router = express.Router();
const {  saveJourney , getJourneys } = require('../controllers/journeyController');

router.post('/user-journey', saveJourney);
router.get('/user-journey', getJourneys);

module.exports = router;
