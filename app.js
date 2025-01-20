require('dotenv').config();


const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Use the contact form route
app.use('/api/contact', contactRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
