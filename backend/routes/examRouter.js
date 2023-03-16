const express = require('express')
const { addExam } = require('../controllers/examController')
const router = express.Router()

router.post('/add', addExam)

module.exports = router