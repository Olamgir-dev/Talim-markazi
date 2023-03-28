const express = require('express');
const { addStudent, login, joinGroup, studentDelete ,getAllStudents} = require('../controllers/studentController')

const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)
router.put ('/joingroup', joinGroup)
router.delete("/:id",studentDelete)
router.get('/', getAllStudents)

module.exports = router
