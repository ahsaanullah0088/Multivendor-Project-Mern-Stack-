const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;



// config
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
    path :"backend/config/.env";
}

module.exports = app;