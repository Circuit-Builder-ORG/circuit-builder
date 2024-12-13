const express = require('express');
const router = express.Router();
const { getCircuits, getCircuitById, createCircuit, deleteCircuit, updateCircuit } = require('../controllers/circuitControllers');

// Define route for fetching all circuits
router.get('/', getCircuits);

// define route for fetching a specific circuit
router.get('/:id', getCircuitById);

// Define route for creating a new circuit
router.post('/', createCircuit);

// Define a route for deleting a circuit
router.delete('/:id', deleteCircuit);

// Define a route for updating a circuit
router.put('/:id', updateCircuit);

module.exports = router;
