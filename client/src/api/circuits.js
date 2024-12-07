import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/circuits';

export const getCircuits = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const createCircuit = async (circuitData) => {
    const response = await axios.post(API_BASE_URL, circuitData);
    return response.data;
};
