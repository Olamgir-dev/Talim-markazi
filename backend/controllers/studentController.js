const Student = require('../models/studentModel');

// student login
const login = async (req, res) => {
    try {
        const student = await Student.login(req);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

const addStudent = async (req, res) => {
   const newStudent = await new Student(req.body);
   newStudent
      .save()
      .then((result) => res.status(200).json(result))
      .catch((error) => console.log(error))
}

module.exports = { login, addStudent };