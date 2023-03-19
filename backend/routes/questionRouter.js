const express = require('express')
const {addQuestions} =  require('../controllers/questionController')

const router = express.Router()

router.post('/add', addQuestions);

module.exports = router