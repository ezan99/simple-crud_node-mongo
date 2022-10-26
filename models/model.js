const mongoose = require('mongoose');

// Creation of a simple table
// each field is required
// and defining the data types for each field
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

// Exporting the Model
module.exports = mongoose.model('Data', dataSchema)