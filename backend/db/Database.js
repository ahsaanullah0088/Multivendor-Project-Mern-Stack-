const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const MONGO_URI = process.env.MONGO_URI;


const connectDatabase = async () => {
    try {
        if (!MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        await mongoose.connect(MONGO_URI);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDatabase;