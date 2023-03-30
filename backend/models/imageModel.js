const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String,
      },
});

module.exports = mongoose.model("Image", imageSchema);
