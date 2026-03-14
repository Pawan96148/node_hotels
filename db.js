const mongoose = require('mongoose');
require('dotenv').config();


// Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL; // hotels = database name
const mongoURL = process.env.MONGODB_URL;
// Setup MongoDB connection (no deprecated options)
mongoose.connect(mongoURL)
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("MongoDB connection error...", err);
});

// Get the default connection
const db = mongoose.connection;


// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server...');
});

db.on('error', (err) => {
    console.log('MongoDB connection error...', err);
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected...');
});

// Export the database connection

module.exports = db;
