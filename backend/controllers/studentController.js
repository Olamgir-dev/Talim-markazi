const Student = require("../models/studentModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const addStudent = async (req, res) => {
  try {
    const newStudent = await Student.addStudent(req);
    res.status(200).json(newStudent);
  } catch (error) { 
    res.status(400).json({ msg: error.message });
  }
};

const joinGroup = async (req, res) => {
  const { studentId, groupId } = req.body;
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { _id: studentId },
      { groupId },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// student login
const login = async (req, res) => {
  try {
    const student = await Student.login(req);
    console.log(student);
    const token = createToken(student._id);

    res.status(200).json({ student: student, token: token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { login, addStudent, joinGroup };
