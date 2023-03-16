const mongoose = require('mongoose');

const studentaddSchema = new mongoose.Schema(
{
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      studentId: {
        type: String,
        required: true,
      },
})

studentaddSchema.statics.addStudent = async function (req) {
  const {studentId, email} = req.body;
  
  const isExist = await this.findOne({studentId});
  if(isExist){
    throw Error ("Bu o'quvchi guruhda mavjud !")
  }

  const newUser = await this.create({
    ...req.body, 
    id: studentId,
    
  })
  return newUser
}

modul.exports = mongoose.model('addstudent',studentaddSchema)