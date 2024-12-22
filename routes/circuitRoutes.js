const express = require('express');
const router = express.Router();
const { getCircuits, getCircuitById, createCircuit, deleteCircuits, deleteCircuitByID, updateCircuit } = require('../controllers/circuitControllers');

// Define route for fetching all circuits
router.get('/', getCircuits);

// define route for fetching a specific circuit
router.get('/:id', getCircuitById);

// Define route for creating a new circuit
router.post('/', createCircuit);

// Define route for deleting all circuits
router.delete('/', deleteCircuits);

// Define a route for deleting a specific circuit
router.delete('/:id', deleteCircuitByID);

// Define a route for updating a circuit
router.put('/:id', updateCircuit);

module.exports = router;
