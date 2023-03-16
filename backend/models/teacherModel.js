const mongoose = require("mongoose");

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

teacherSchema.statics.login = async function (req){
  const email = req.body.email;
  const password = req.body.password;
  const Teacher = await this.findOne({email});

  if(!Teacher){
    throw Error("Bunday email mavjud emas yoki parolingiz xato");
  }
  return Teacher;
};

module.exports = mongoose.model("Teacher", teacherSchema);
