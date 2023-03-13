const Student = require("../models/studentModel")

const addStudent = async (req, res) => {
   const newStudent = await new Student(req.body);
   newStudent
      .save()
      .then((result) => res.status(200).json(result))
      .catch((error) => console.log(error))
}
module.exports = { addStudent };