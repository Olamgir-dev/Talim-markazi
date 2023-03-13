const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
    {
        groupID: {
            type: String,
            required: true
        },
        sana: {
            type: Number,
            required: true
        },
        vaqt: {
            type: Number,
            required: true
        },
        davomiylik: {
            type: Number,
            required: true
        },
    }, {timestamps: true}
)

module.exports = mongoose.model('Exam', examSchema);