const { google } = require('googleapis'); // npm i
const nodemailer = require('nodemailer');
const OAuth2 = google.auth.OAuth2;
const dotenv = require('dotenv');
dotenv.config();

// Load Google API credentials
const credentials = require('./credentials.json'); // your credentials file

const oauth2Client = new OAuth2(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uris[0]
);

// Set the refresh token you get after the user authenticates
oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN, // Save this refresh token securely after authorization
});

// Create a Nodemailer transporter using the OAuth2 credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER, // Your Gmail address
        clientId: credentials.client_id,
        clientSecret: credentials.client_secret,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN, // Store this securely
        accessToken: async () => {
            const accessToken = await oauth2Client.getAccessToken();
            return accessToken.token;
        },
    },
});

module.exports = transporter;
