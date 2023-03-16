const Question = require("../models/questionModel");

const addQuestions = (req, res) => {
  const questionArray = req.body;
  Question.insertMany(questionArray)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

module.exports = { addQuestions };
