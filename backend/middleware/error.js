const ErrorHandler = require('../utils/ErrorHandler');
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';


  // wrong mongodb id 
  if(err.name = "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Log the error for debugging
  console.error(err);

  // Handle specific errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message).join(', ');
    err = new ErrorHandler(message, 400);
  }

  // Handle duplicate key errors
  if (err.code === 11000) {
    const message = `Duplicate field value: ${Object.keys(err.keyValue)}. Please use another value!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });

  // wwrong jwt error
  if (err.name === 'JsonWebTokenError') {
    const message = 'Json Web Token is invalid. Try again!';
    err = new ErrorHandler(message, 400);
  }

  // expired jwt error
  if (err.name === 'TokenExpiredError') {
    const message = 'Json Web Token is expired. Try again!';
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    });
}