const errorHandlerMiddleware = (err, req, res, next) => {
  console.error('Error:', err.message);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: `Validation failed: ${err.message}`
    });
  }

  // Mongoose duplicate key error (for unique titles)
  if (err.code === 11000) {
    return res.status(400).json({
      message: "Validation failed: A movie with this title already exists."
    });
  }

  // MongoDB CastError (invalid ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: "Validation failed: Invalid movie ID format."
    });
  }

  // Default server error
  res.status(500).json({
    message: "Internal server error occurred."
  });
};

module.exports = errorHandlerMiddleware;