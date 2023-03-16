const express = require('express')
const { addExam, getExam } = require('../controllers/examController')
const router = express.Router()

router.post('/add', addExam)
router.get('/show-exam', getExam)

module.exports = router