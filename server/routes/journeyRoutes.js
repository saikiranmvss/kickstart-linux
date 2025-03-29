const express = require('express');
const router = express.Router();
const {  saveJourney , getJourneys , getSlugs ,getSlugJourney } = require('../controllers/journeyController');

router.post('/user-journey', saveJourney);
router.get('/user-journey', getJourneys);
router.get('/user-slugs', getSlugs);
router.get('/journey/slug/:name', getSlugJourney);

module.exports = router;
