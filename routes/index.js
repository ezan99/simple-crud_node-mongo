const express = require('express');
const Model = require('../models/model');

const router = express.Router()

// Creating a row on DB
router.post('/create', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        description: req.body.description,
        checked: req.body.checked
    })
    try {
        const response = await data.save();
        res.status(200).json(response)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Listing all rows from DB
router.get('/list', async (req, res) => {
    try {
        const response = await Model.find();
        res.json(response)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Finding a specific row via query params (ID)
router.get('/find/:id', async (req, res) => {
    try {
        const response = await Model.findById(req.params.id);
        res.json(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Updating a row (in our case the checked - boolean value)
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        // Options serves as a return response of updated row
        const options = { new: true };

        const response = await Model.findByIdAndUpdate(id, newData, options)

        res.send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;