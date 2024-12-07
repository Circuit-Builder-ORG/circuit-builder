
// Import dependencies
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

// Initialise app
const app = express();
const PORT = 3000;

// Connect to MongoDB
const mongoURI = process.env.MONGOURI;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Setup WebSocket
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Setup middleware
app.use(express.json()); // Parse incoming JSON requests

// Import routes
const circuitRoutes = require('./routes/circuits');

// Use routes
app.use('/api/circuits', circuitRoutes);

// Define base route
app.get('/', (req, res) => {
    res.send('Circuit Builder API is running!');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
