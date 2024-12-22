// models/Circuit.js
const mongoose = require('mongoose');

// Define the property schema
const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
    unit: { type: String, required: false }
});

// Define the position schema
const positionSchema = new mongoose.Schema({
    x: {type: Number, required: true},
    y: {type: Number, required: true}
})

// Define component Schema
const componentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    position: {type: positionSchema, required: true},
    properties: [{type: propertySchema, required: true}]
})

// Define the circuit schema
const circuitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    components: [{type: componentSchema, required: true}]
});

// Create the circuit model
const circuitModel = mongoose.model('Circuit', circuitSchema);

module.exports = circuitModel;
