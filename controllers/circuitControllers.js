const circuitModel = require('../models/circuitModel');

// Get all circuits
const getCircuits = async (req, res) => 
{
    try 
    {
        const circuits = await circuitModel.find();
        res.status(200).json(circuits);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to retrieve all circuits"});
    }
}

// Get specific circuit
const getCircuitById = async (req, res) =>
{
    const { id } = req.params;

    try 
    {
        const circuit = await circuitModel.findById(id);
        if (!circuit)
        {
            return res.status(404).json({error: "Circuit not found"});
        }

        res.status(200).json(circuit);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to retrieve circuit"});
    }

}

// Create new circuit
const createCircuit = async (req, res) =>
{
    const { name, components } = req.body;

    try
    {
        const newCircuit = new circuitModel({name, components});
        await newCircuit.save();
        res.status(201).json(newCircuit);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to add circuit"});
    }
}

// Delete all circuits
const deleteCircuits = async (req, res) =>
{
    try
    {
        await circuitModel.deleteMany({});
        res.status(200).json({message: "Successfully deleted all circuits"})
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to delete all circuits"});
    }
}

// Delete a circuit
const deleteCircuitByID = async (req, res) =>
{
    const { id } = req.params;

    try
    {
        const deleteResult = await circuitModel.findByIdAndDelete(id);
        if (!deleteResult)
        {
            return res.status(404).json({error: "Circuit not found"});
        }

        res.status(200).json({message: "Successfully deleted circuit"});
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to delete circuit"});
    }
}

// Update a circuit
const updateCircuit = async (req, res) => 
{
    const { id } = req.params;
    const { name, components } = req.body;

    try
    {
        const updateResult = await circuitModel.findByIdAndUpdate(id, {name, components});
        if (!updateResult)
        {
            return res.status(404).json({error: "Circuit not found"});
        }
        
        res.status(200).json(updateResult);
    }
    catch (err)
    {
        console.error("Error occured", err);
        res.status(500).json({error: "Failed to update circuit"});
    }
}

module.exports = { getCircuits, getCircuitById, createCircuit, deleteCircuits, deleteCircuitByID, updateCircuit };