const express = require('express');

const gptController = require('../routes/gpt')

const router = express.Router();

router.post('/stop-recognition', gptController.stopRecognition);

module.exports = router;