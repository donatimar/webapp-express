// INDEX - Ottiene tutti i film
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

// SHOW - Ottiene i dettagli di un singolo film e le relative recensioni
const getMovieDetails = (req, res, db) => {
  const movieId = req.params.id;

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

// CREATE - Aggiunge una nuova recensione di un film
const addReview = (req, res, db) => {
  const { movie_id, name, vote, text } = req.body;

  if (!movie_id || !name || !vote || !text) {
    return res
      .status(400)
      .send("Tutti i campi di compilazione sono obbligatori");
  }

  const query =
    "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)";
  db.query(query, [movie_id, name, vote, text], (err, result) => {
    if (err) {
      console.error("Errore durante l'inserimento della recensione", err);
      return res.status(500).send("Errore del server");
    }

    res.status(201).send("Recensione aggiunta con successo");
  });
};

module.exports = { getMovies, getMovieDetails, addReview };
