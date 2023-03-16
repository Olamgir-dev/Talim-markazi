const express = require('express');
const { joinGroup } = require('../controllers/joinGroup');
const { addStudent, login } = require('../controllers/studentController')

const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)
router.put ('join', joinGroup)

module.exports = router
