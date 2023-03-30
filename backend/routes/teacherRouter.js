const express = require("express");
const { addTeacher, getTeacher, loginTeacher, showExamScore } = require("../controllers/teacherController");

const router = express.Router();

// API routes
router.get("/", getTeacher);
router.post("/add", addTeacher);
router.post("/login", loginTeacher);
router.get('/showExamScore/:groupId', showExamScore)

module.exports = router;
