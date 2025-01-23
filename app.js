require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const contactRoutes = require('./routes/contactRoutes'); // Ensure this path is correct

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // Use express.json() instead of body-parser

// Use the contact form routes
app.use('/api/contact', contactRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
