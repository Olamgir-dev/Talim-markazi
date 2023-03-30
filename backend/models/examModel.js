const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
    {
        groupId: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
    }, {timestamps: true}
)

module.exports = mongoose.model('Exam', examSchema);