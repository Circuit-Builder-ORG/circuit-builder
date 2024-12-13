// models/Circuit.js
const mongoose = require('mongoose');

// Define the Circuit schema
const CircuitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    components: { type: Array, required: true },
});

// Create the Circuit model
const Circuit = mongoose.model('Circuit', CircuitSchema);

module.exports = Circuit;
