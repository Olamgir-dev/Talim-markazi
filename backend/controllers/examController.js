const Exam = require("../models/examModel");

const addExam = async (req, res) => {
  const newExam = new Exam(req.body);
  newExam
    .save()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json({ msg: err.message }));
};

const getExam = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addExam, getExam };
