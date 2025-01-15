const express = require("express");
const db = require("../db/conn");
const {
  getMovies,
  getMovieDetails,
  addReview,
} = require("../controllers/moviesController");

const router = express.Router();

// Route - Index
router.get("/", (req, res) => getMovies(req, res, db));

// Route - Show
router.get("/:id", (req, res) => getMovieDetails(req, res, db));

// Route - Create
router.post("/:id/reviews", (req, res) => addReview(req, res, db));

module.exports = router;
