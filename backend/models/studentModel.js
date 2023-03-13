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


module.exports = mongoose.model('Student', studentSchema);