const Student = require('../models/studentModel');


const joinGroup = async (req, res) => {
    const {groupId, studentId} = req.body;
    try {
        const student = await Student.findOneAndUpdate(groupId, studentId);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

module.exports = { joinGroup, joinGroup };