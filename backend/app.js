const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ErrorHandler = require('./utils/ErrorHandler');
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}));


// config
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    path :"backend/config/.env";
}

// its for errorhandling 
app.use(ErrorHandler);

module.exports = app;