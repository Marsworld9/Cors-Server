// Load required modules
const express = require('express');
const cors = require('cors');

// Create the app
const app = express();
const PORT = 3000;

// Enable CORS for all routes and origins
app.use(cors());

// Default route to test if server is running
app.get('/', (req, res) => {
  res.send('CORS Proxy is running');
});

// CORS proxy logic
app.use('/', async (req, res) => {
  const fetch = await import('node-fetch');
  const targetUrl = req.url.slice(1); // removes the first slash

  try {
    const response = await fetch.default(targetUrl);
    const data = await response.text();

    res.set('Content-Type', response.headers.get('content-type'));
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching target URL');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
