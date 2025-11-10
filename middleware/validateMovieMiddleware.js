const validateMovieMiddleware = (req, res, next) => {
  const { title, category, releaseYear, rating } = req.body;

  // Check if required fields are provided
  if (!title || !category || !releaseYear || rating === undefined) {
    return res.status(400).json({
      message: "Validation failed: title, category, releaseYear, and rating are required."
    });
  }

  // Check if rating is between 0 and 10
  if (rating < 0 || rating > 10) {
    return res.status(400).json({
      message: "Validation failed: Rating must be between 0 and 10."
    });
  }

  // Check if release year is valid (not before 1900)
  if (releaseYear < 1900) {
    return res.status(400).json({
      message: "Validation failed: Movies released before 1900 are not allowed."
    });
  }

  // Check data types
  if (typeof title !== 'string' || typeof category !== 'string') {
    return res.status(400).json({
      message: "Validation failed: title and category must be strings."
    });
  }

  if (typeof releaseYear !== 'number' || typeof rating !== 'number') {
    return res.status(400).json({
      message: "Validation failed: releaseYear and rating must be numbers."
    });
  }

  next();
};

module.exports = validateMovieMiddleware;