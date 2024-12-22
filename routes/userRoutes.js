const express = require('express');
const router = express.Router();
const {getUsers, getUserById, createUser, deleteUsers, deleteUserByID, updateUser} = require('../controllers/userControllers');

// Define route for fetching all users
router.get('/', getUsers);

// define route for fetching a specific user
router.get('/:id', getUserById);

// Define route for creating a new user
router.post('/', createUser);

// Define route for deleting all users
router.delete('/', deleteUsers);

// Define a route for deleting a specific user
router.delete('/:id', deleteUserByID);

// Define a route for updating a user
router.put('/:id', updateUser);

module.exports = router;