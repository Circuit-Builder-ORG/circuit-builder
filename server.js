const express = require('express');
const app = express();
const PORT = 3000;

// Setup DB
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGOURI;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Setup WebSocket
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Express routes
app.get('/', (req, res) => {
    res.send('Circuit Builder API is running!');
});

// Start the server (single listen call)
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
