require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes/index')
const dbENV = process.env.DATABASE_URL;

// Connection with Cluster
mongoose.connect(dbENV);
const database = mongoose.connection;

// Error handling DB connection
database.on('error', (error) => {
    console.log(error)
})

// When connected log 
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

// Injecting route from which calling will start
app.use(cors())
app.use(express.json());
app.use('/api', routes);

app.listen(process.env.PORT || 4500, () => {
    console.log(`Server Started at ${4500}`)
})