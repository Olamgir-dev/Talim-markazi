const express = require('express');
const { addStudent } = require('../controller/studentController')
const { login } = require('../controller/studentController');

const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)

module.exports = router
