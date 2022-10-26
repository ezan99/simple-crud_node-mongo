const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    checked: {
        requied: true,
        type: Boolean
    }
})

module.exports = mongoose.model('Data', dataSchema)