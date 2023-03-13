const Student = require('../models/studentModel');
//login studentlarni olib olish api
const login = async (req, res) => {
    try {
        const student = await Student.login(req);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

module.exports = { login };