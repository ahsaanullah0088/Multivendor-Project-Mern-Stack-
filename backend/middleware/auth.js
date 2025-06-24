const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const jwt = require('jsonwebtoken');
// some routes are for only seller 
// seller can check user routes and user can check seller routes 

// its for handle filter the routes and seller and user 
// login acces the resourse and we will privare route with that
// 
