const express = require('express');
const multer = require('multer');

const { addStudent, login, joinGroup, studentDelete, getAllStudents,updatedStudent,editPhoto, getStudentProfle } = require('../controllers/studentController')


const router = express.Router();

router.post('/add', addStudent)
router.post('/login',login)
router.put ('/joingroup', joinGroup)
router.delete("/:id",studentDelete)
router.get('/', getAllStudents)
router.put('/update', updatedStudent)
router.post('/editPhoto/:id',editPhoto)

router.get('/profle/:id',getStudentProfle)
module.exports = router
