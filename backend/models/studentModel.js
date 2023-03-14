const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  groupId: {
    type: String,
    required: false,
  },
  examScore: {
    type: String,
    required: false,
  },
});


studentSchema.statics.login = async function (req) {
  const email = req.body.email;
  const password = req.body.password;
  const student = await this.findOne({ email });

  if (!student) {
    throw Error("Bunday email mavjud emas yoki parol xato");
  }

  const match = await bcrypt.compare(password, student.password);
  if (!match) {
    throw Error("Bunday email mavjud emas yoki parol xato");
  }

  return student;
}

module.exports = mongoose.model('Student', studentSchema);