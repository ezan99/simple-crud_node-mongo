require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index')
const dbENV = process.env.DATABASE_URL;

mongoose.connect(dbENV);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(4500, () => {
    console.log(`Server Started at ${4500}`)
})