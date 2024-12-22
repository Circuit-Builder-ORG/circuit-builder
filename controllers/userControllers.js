const userModel = require('../models/userModel');

// Get all users
const getUsers = async (req, res) => 
{
    try
    {
        const users = await userModel.find();
        res.status(200).json(users);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to retrieve all users"});
    }
}

// Get specific user
const getUserById = async (req, res) =>
{
    const { id } = req.params;

    try
    {
        const user = await userModel.findById(id);
        if (!user)
        {
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json(user);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to retrieve user"});
    }
}

// Create new user
const createUser = async (req, res) => 
{
    const { username, password, circuits} = req.body;

    try
    {
        const newUser = new userModel({username, password, circuits});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to add user"});
    }
}

// Delete all users
const deleteUsers = async (req, res) => 
{
    try
    {
        await userModel.deleteMany({});
        res.status(200).json({message: "Successfully deleted all users"});
    }
    catch
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to delete all circuits"});
    }
}

// Delete specific user
const deleteUserByID = async (req, res) => 
{
    const { id } = req.params;

    try
    {
        const deleteResult = await userModel.findByIdAndDelete(id);
        if (!deleteResult)
        {
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json({message: "Successfully deleted user"});
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to delete user"});
    }
}

// Update specific user
const updateUser = async (req, res) =>
{
    const { id } = req.params;
    const { username, password, circuits } = req.body;

    try
    {
        const updateResult = await userModel.findByIdAndUpdate(id);
        if (!updateResult)
        {
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json(updateResult);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to update user"});
    }
}

module.exports = {getUsers, getUserById, createUser, deleteUsers, deleteUserByID, updateUser};