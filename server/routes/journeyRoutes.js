const express = require('express');
const router = express.Router();
const {  saveJourney , getJourneys , getSlugs ,getSlugJourney , getAllJourneys } = require('../controllers/journeyController');
const authenticateToken = require("../middlewares/authenticateToken");

router.post('/user-journey',authenticateToken, saveJourney);
router.get('/user-journey', getJourneys);
router.get('/get-all-journeys', getAllJourneys);
router.get('/user-slugs', getSlugs);
router.get('/slug/:name', getSlugJourney);

module.exports = router;
