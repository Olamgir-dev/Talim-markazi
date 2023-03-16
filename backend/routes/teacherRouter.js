const express = require("express");
const { addTeacher, getTeacher, loginTeacher} = require("../controllers/teacherController");

const router = express.Router();

// API routes
router.get("/", getTeacher);
router.post("/add", addTeacher);
router.post("/login", loginTeacher);

module.exports = router;
