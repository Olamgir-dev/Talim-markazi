const express = require('express');
const { addStudent, login, joinGroup, getAllStudents } = require('../controllers/studentController')

const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)
router.put ('/joingroup', joinGroup)
router.get('/', getAllStudents)

module.exports = router
