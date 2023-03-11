const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },  
        password: {
            type: Number,
            require: true
        },
        ielts: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model("Teacher", teacherSchema);