const teacherModel = require("../models/teacherModel");

//  Get teacher
const getTeacher = async (req, res) => {
  try {
    const teachers = await teacherModel.find();
    res.status(200).json(teachers);
    console.log(req.params.teacherId);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add a teacher
const addTeacher = async (req, res) => {
  try {
    const newTeacher = await teacherModel.addTeacher(req);
    res.status(200).json(newTeacher);
  } catch (error) {

    res.status(400).json({ msg: error.message });
  }
};

// Teacher Login
const loginTeacher = async (req, res) => {
  try {
    const teacher = await teacherModel.login(req);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//Show student's scores
const showExamScore = async (req, res) => {
  const groupId = req.params.groupId
  try {
    const students = await studentModel.find({ groupId: groupId })
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = { getTeacher, addTeacher, loginTeacher, showExamScore };
