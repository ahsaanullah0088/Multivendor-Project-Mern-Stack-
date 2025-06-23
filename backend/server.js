require('dotenv').config(); // Load environment variables
const { connect } = require('mongoose');
const app = require('./app');
const connectDatabase = require('./db/Database');

// handling uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error(`Error: ${err.message}`);
    console.error('Shutting down the server due to uncaught exception');
    process.exit(1);
});

// connect to database
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit the process if database connection fails
});

// start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// handling unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Error: ${err.message}`);
    console.error('Shutting down the server due to unhandled promise rejection');
    process.exit(1);
});


