const express = require('express');
const router = express.Router();

// Define a route for fetching circuits
router.get('/', (req, res) => {
    res.send('Get all circuits');
});

// Define a route for creating a new circuit
router.post('/', (req, res) => {
    res.send('Create a new circuit');
});

module.exports = router;
