require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const moviesController = require("./controllers/moviesController");

const app = express();
const port = 3000;

// Endpoint
app.get("/movies", (req, res) => moviesController.getMovies(req, res, db));
app.get("/movies/:id", (req, res) =>
  moviesController.getMovieDetails(req, res, db)
);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
