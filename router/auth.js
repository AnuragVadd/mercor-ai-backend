const express = require('express');

const authController = require('../routes/auth');
const signUp = require('../routes/users')

const router = express.Router();

router.post('/login', authController.login);
router.post('/users/create', signUp.signUp)


module.exports = router;