const express = require('express');
const router = express.Router();
const validateMovieMiddleware = require('../middleware/validateMovieMiddleware');
const {
  addMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  getTopRatedMovies,
  getMoviesByCategory
} = require('../controllers/movieController');

// Special routes (must be defined before parameterized routes)
router.get('/top-rated', getTopRatedMovies);
router.get('/category/:category', getMoviesByCategory);

// CRUD routes
router.post('/', validateMovieMiddleware, addMovie);
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.put('/:id', validateMovieMiddleware, updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;