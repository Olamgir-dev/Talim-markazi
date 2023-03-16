const express = require('express');
const { addStudent, login, joinGroup } = require('../controllers/studentController')

const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)
router.put ('/joingroup', joinGroup)

module.exports = router
