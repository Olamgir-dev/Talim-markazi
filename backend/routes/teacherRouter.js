const express = require("express");
const { addTeacher, getTeacher } = require("../controllers/teacherController");

const router = express.Router();

// API routes
router.get("/", getTeacher);
router.post("/add", addTeacher);

module.exports = router;
