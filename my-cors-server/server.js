// Load required modules
const express = require('express');
const cors = require('cors');

// Create the app
const app = express();
const PORT = 3000;

// Enable CORS for all routes and origins
app.use(cors());

// Define a sample route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server with CORS!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
