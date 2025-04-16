const express = require('express');
const router = express.Router();
const { storePageContent } = require('../controllers/pageController');

router.post('/store', storePageContent);

module.exports = router;
