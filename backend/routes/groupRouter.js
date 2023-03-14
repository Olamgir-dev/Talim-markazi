const express = require('express')
const {addGroup} =  require('../controllers/groupController')

const router = express.Router()

router.post('/add', addGroup)

module.exports = router