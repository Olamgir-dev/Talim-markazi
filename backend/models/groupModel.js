const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    days: {
        type: [String],
        required: true
    },
    level: {
        type: String,
        required: true
    },
    teacherId: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Group', groupSchema)