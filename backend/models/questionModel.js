const mongoose = require("mongoose");

const savolSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        option1: {
            type: String,
            required: true
        },
        option2: {
            type: String,
            required: true
        },
        option3: {
            type: String,
            required: true
        },
        option4: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        },
        examId: {
            type: String,
            required: true
        },
    }, {timestamps: true}
)

module.exports = mongoose.model('Savol', savolSchema);
