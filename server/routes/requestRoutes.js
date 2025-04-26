const express = require('express');
const router = express.Router();
const { storeRequest, getRequests } = require('../controllers/requestController.js');

router.post('/store', storeRequest);
router.get('/get-requests/:email', getRequests);

module.exports = router;
