1. Add a New Movie (POST)

  URL: http://localhost:3000/api/movies
  Method: POST
  Headers: Content-Type: application/json
  Body (raw JSON):
  {
    "title": "The Dark Knight",
    "category": "Action",
    "releaseYear": 2008,
    "rating": 9.0,
    "isFeatured": true
  }

  2. Get All Movies (GET)

  URL: http://localhost:3000/api/movies
  Method: GET

  3. Add Another Movie (POST)

  URL: http://localhost:3000/api/movies
  Method: POST
  Body:
  {
    "title": "Inception",
    "category": "Sci-Fi",
    "releaseYear": 2010,
    "rating": 8.8
  }

  4. Add a Low-Rated Movie (POST)

  URL: http://localhost:3000/api/movies
  Method: POST
  Body:
  {
    "title": "Bad Movie",
    "category": "Comedy",
    "releaseYear": 2020,
    "rating": 3.2
  }

  5. Get Movie by ID (GET)

  URL: http://localhost:3000/api/movies/{movieId}
  Method: GET
  (Replace {movieId} with actual ID from previous responses)

  6. Update a Movie (PUT)

  URL: http://localhost:3000/api/movies/{movieId}
  Method: PUT
  Body:
  {
    "title": "The Dark Knight",
    "category": "Action",
    "releaseYear": 2008,
    "rating": 9.5,
    "isFeatured": true
  }

  7. Get Top-Rated Movies (GET)

  URL: http://localhost:3000/api/movies/top-rated
  Method: GET

  8. Get Movies by Category (GET)

  URL: http://localhost:3000/api/movies/category/Action
  Method: GET

  9. Test Validation Errors (POST)

  URL: http://localhost:3000/api/movies
  Method: POST
  Body (missing required fields):
  {
    "title": "Test Movie"
  }

  10. Test Invalid Rating (POST)

  URL: http://localhost:3000/api/movies
  Method: POST
  Body:
  {
    "title": "Invalid Rating Movie",
    "category": "Drama",
    "releaseYear": 2020,
    "rating": 15
  }

  11. Test Invalid Year (POST)

  URL: http://localhost:3000/api/movies
  Method: POST
  Body:
  {
    "title": "Old Movie",
    "category": "Drama",
    "releaseYear": 1850,
    "rating": 7.0
  }

  12. Delete a Movie (DELETE)

  URL: http://localhost:3000/api/movies/{movieId}
  Method: DELETE

  Expected Status Codes:

  - 201: Movie created successfully
  - 200: Success (get, update, delete)
  - 400: Validation error
  - 404: Movie not found
  - 500: Server error