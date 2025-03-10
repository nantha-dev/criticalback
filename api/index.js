const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Define API route
router.get('/', (req, res) => {
    res.json({ message: 'Hello from Vercel Serverless!' });
});

app.use('/api', router);

// Export serverless function
module.exports = app;
module.exports.handler = serverless(app);
