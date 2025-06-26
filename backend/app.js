const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ErrorHandler = require('./utils/ErrorHandler');
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');



app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/" , express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));


// config
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    path :"backend/config/.env";
}

// import routes 
const user = require('./controller/userC')

app.use("/api/v2/user" , user)

// its for errorhandling 
app.use(ErrorHandler);

module.exports = app;