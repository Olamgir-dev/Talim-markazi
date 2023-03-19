const validator = require('validator');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const studentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
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
    default: ''
  },
  examScore: {
    type: Number,
    required: false,
  },
});


studentSchema.statics.addStudent = async function (req) {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    throw Error("Email formati noto'g'ri");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password mustahkam emas");
  }

  const isExist = await this.findOne({ email });
  if (isExist) {
    throw Error("Bunday email mavjud");
  }


  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);


  const newStudent = await this.create({...req.body,password: encryptedPassword, });
  return newStudent;
};



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
};

module.exports = mongoose.model("Student", studentSchema);
