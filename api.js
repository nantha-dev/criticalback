const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Hello from Express on Netlify!" });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
