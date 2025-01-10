// INDEX

const getMovies = (req, res, db) => {
  const query = "SELECT * FROM movies";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Errore durante il recupero dei film", err);
      return res.status(500).send("Errore del server");
    }
    res.json(results);
  });
};

module.exports = { getMovies };
