// INDEX
const getMovies = (req, res, db) => {
  const query = "SELECT * FROM movies";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Errore durante la ricerca dei film", err);
      return res.status(500).send("Errore del server");
    }
    res.json(results);
  });
};

// SHOW
const getMovieDetails = (req, res, db) => {
  const movieId = req.params.id;

  // Query - dettagli del film
  const movieQuery = "SELECT * FROM movies WHERE id = ?";
  db.query(movieQuery, [movieId], (err, movieResults) => {
    if (err) {
      console.error("Errore durante la ricerca del film", err);
      return res.status(500).send("Errore del server");
    }

    if (movieResults.length === 0) {
      return res.status(404).send("Film non trovato");
    }

    const movie = movieResults[0];

    // Query - recensioni del film
    const reviewsQuery = "SELECT * FROM reviews WHERE movie_id = ?";
    db.query(reviewsQuery, [movieId], (err, reviewsResults) => {
      if (err) {
        console.error("Errore durante la ricerca delle recensioni", err);
        return res.status(500).send("Errore del server");
      }

      res.json({
        movie,
        reviews: reviewsResults,
      });
    });
  });
};

module.exports = { getMovies, getMovieDetails };
