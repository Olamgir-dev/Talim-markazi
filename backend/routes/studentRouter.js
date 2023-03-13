const express = require('express');
const { login } = require('../controller/studentController');
const router = express.Router();


router.post('/login',login)

module.exports = router