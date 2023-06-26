const express = require('express');

const routeController = require('../controllers/gptController')

const router = express.Router();

router.post('/start-recognition', routeController.startRecognition);
// router.post('/stop-recognition', stuff.stopRecognition);

module.exports = router;