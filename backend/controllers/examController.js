const Exam = require('../models/examModel')

const addExam = async (req, res) => {
        const newExam = new Exam(req.body)
        newExam.save()
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(400).json({msg: err.message}))
}

module.exports = {addExam}