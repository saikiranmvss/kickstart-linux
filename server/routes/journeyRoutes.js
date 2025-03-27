const express = require('express');
const router = express.Router();
const {  saveJourney , getJourneys , getSlugs } = require('../controllers/journeyController');

router.post('/user-journey', saveJourney);
router.get('/user-journey', getJourneys);
router.get('/user-slugs', getSlugs);

module.exports = router;
