const axios = require('axios');
const express = require('express');
const app = express();

const backendApiUrl = 'http://localhost:7000/models'; // Spring Boot 백엔드의 URL

app.get('/models', async (req, res) => {
    try {
        const response = await axios.get(backendApiUrl);
        const models = response.data;
        res.json(models);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching 3D models.');
    }
});

app.listen(9000, () => {
    console.log('Node.js server is running on port 9000');
});