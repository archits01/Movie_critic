require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api/movies', movieRoutes);

// Error handling middleware (should be last)
app.use(errorHandlerMiddleware);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cinecritic')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`CineCritic API running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });