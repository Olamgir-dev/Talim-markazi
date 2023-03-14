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
    try {
        const newStudent = await Student.addStudent(req);
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

module.exports = { login, addStudent };