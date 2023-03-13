const mongoose = require("mongoose");

const savolSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        variant1: {
            type: String,
            required: true
        },
        variant2: {
            type: String,
            required: true
        },
        variant3: {
            type: String,
            required: true
        },
        variant4: {
            type: String,
            required: true
        },
        togriJavob: {
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
