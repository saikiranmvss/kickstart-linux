const express = require('express');
const router = express.Router();
const { storeRequest } = require('../controllers/requestController.js');

router.post('/store', storeRequest);

module.exports = router;
