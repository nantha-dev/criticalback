const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Vercel Serverless!' });
});

// Export the serverless function
module.exports = app;
module.exports.handler = serverless(app);
