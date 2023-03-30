const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema(
  {
    teacherId: {
        type: String, 
        require: true,
    },
    studentId: {
        type: String, 
        require: true,
    }, 
    rate: {
        type: Number, 
        require: true,
    }
  },
  { timestamps: true }
);

rateSchema.statics.addRate = async function (req) {
    const { teacherId, studentId, rate } = req.body;
  
    const addRate = await this.create({...req.body });
    return addRate;
  };

module.exports = mongoose.model('Rate', rateSchema)