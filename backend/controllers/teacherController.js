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
const addTeacher = (req, res) => {
  const teacher = new teacherModel(req.body);
  teacher
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err.message });
    });
};

module.exports = { getTeacher, addTeacher };
