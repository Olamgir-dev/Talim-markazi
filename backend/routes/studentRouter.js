const express = require('express');
const { addStudent, login } = require('../controllers/studentController')

const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)

module.exports = router
