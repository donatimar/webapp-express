const express = require("express");
const db = require("../db/conn");
const moviesController = require("../controllers/moviesController");

const router = express.Router();

// Route - Index
router.get("/", (req, res) => moviesController.getMovies(req, res, db));

// Route - Show
router.get("/:id", (req, res) =>
  moviesController.getMovieDetails(req, res, db)
);

module.exports = router;
