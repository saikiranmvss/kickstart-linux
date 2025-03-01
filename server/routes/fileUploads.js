const express = require('express');
const { fileUpload } = require('../controllers/fileController');

const router = express.Router();

router.post('/file-upload', fileUpload);

module.exports = router;
