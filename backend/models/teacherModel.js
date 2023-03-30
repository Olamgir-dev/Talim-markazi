const validator = require('validator');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const teacherSchema = new mongoose.Schema(
  {
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
    ielts: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

teacherSchema.statics.addTeacher = async function (req) {
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

  const newTeacher = await this.create({ ...req.body, password: encryptedPassword, });
  return newTeacher;
};

teacherSchema.statics.login = async function (req){
  const email = req.body.email;
  const password = req.body.password;
  const teacher = await this.findOne({email});

  if(!teacher){
    throw Error("Bunday email mavjud emas yoki parolingiz xato");
  }

  if(teacher.password !== password){
    throw Error("parol xato")
  }
  return teacher;
};

module.exports = mongoose.model("Teacher", teacherSchema);
