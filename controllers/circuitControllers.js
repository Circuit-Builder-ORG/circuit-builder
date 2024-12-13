const CircuitModel = require('../models/circuitModel');

// Get all circuits
const getCircuits = async (req, res) => 
{
    try 
    {
        const circuits = await CircuitModel.find();
        res.status(200).json(circuits);
    }
    catch (err)
    {
        res.status(500).json({error: "Failed to retrieve all circuits"})
    }
}

// Get specific circuit
const getCircuitById = async (req, res) =>
{
    const { id } = req.params;

    try 
    {
        const circuit = await CircuitModel.findById(id);
        if (!circuit)
        {
            return res.status(404).json({error: "Circuit not found"});
        }

        res.status(200).json(circuit);
    }
    catch (err)
    {
        res.status(500).json({error: "Failed to retrieve circuit"});
    }

}

// Create new circuit
const createCircuit = async (req, res) =>
{
    const { name, components } = req.body;

    try
    {
        const newCircuit = new CircuitModel({name, components});
        await newCircuit.save();
        res.status(201).json(newCircuit);
    }
    catch (err)
    {
        res.status(500).json({error: "Failed to add circuit"});
    }
}

// Delete a circuit
const deleteCircuit = async (req, res) =>
{
    const { id } = req.params;

    try
    {
        const deleteResult = await CircuitModel.findByIdAndDelete(id);
        if (!deleteResult)
        {
            return res.status(404).json({error: "Circuit not found"});
        }
        res.status(200).json({message: "Successfully deleted circuit"});
    }
    catch
    {
        res.status(500).json({error: "Failed to delete ciruit"})
    }
}

// Update a circuit
const updateCircuit = async (req, res) => 
{
    const { id } = req.params;
    const { name, components } = req.body;

    try
    {
        const updateResult = await CircuitModel.findByIdAndUpdate(id, {name, components});
        if (!updateResult)
        {
            return res.status(404).json({error: "Circuit not found"})
        }
        res.status(200).json(updateResult);
    }
    catch (err)
    {
        res.status(500).json({error: "Failed to update circuit"});
    }
}

module.exports = { getCircuits, getCircuitById, createCircuit, deleteCircuit, updateCircuit };