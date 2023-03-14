const Student = require('../models/studentModel');


const joinGroup = async (req, res) => {
    try {
        const student = await Student.join(req);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

module.exports = { joinGroup, joinGroup };