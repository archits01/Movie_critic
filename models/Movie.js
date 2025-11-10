const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  releaseYear: {
    type: Number,
    required: true,
    min: 1900
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index to ensure unique titles (case insensitive)
movieSchema.index({ title: 1 }, { 
  unique: true,
  collation: { locale: 'en', strength: 2 }
});

module.exports = mongoose.model('Movie', movieSchema);