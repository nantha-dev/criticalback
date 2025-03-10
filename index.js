const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Vercel Serverless!' });
});

// Export as a serverless function
module.exports = app;
module.exports.handler = serverless(app);
