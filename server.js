const express = require('express');
const app = express();
const PORT = 3000;

// Setup DB
// Load environment variables
const dotenv = require('dotenv').config();

const mongoose = require('mongoose');
const mongoURI = process.env.MONGOURI;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.get('/', (req, res) => {
    res.send('Circuit Builder API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
