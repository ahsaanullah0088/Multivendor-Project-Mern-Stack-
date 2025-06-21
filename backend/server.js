require('dotenv').config(); // Load environment variables
const app = require('./app');

// handling uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error(`Error: ${err.message}`);
    console.error('Shutting down the server due to uncaught exception');
    process.exit(1);
});

// start server
const PORT = process.env.PORT || 5000;
console.log('PORT:', process.env.PORT); // Check if it's undefined or has the correct value

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// handling unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Error: ${err.message}`);
    console.error('Shutting down the server due to unhandled promise rejection');
    process.exit(1);
});
