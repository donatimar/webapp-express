const express = require("express");
const mysql = require("mysql2");
const moviesController = require("./controllers/moviesController");

const app = express();
const port = 3000;

// Configurazione del database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "movies",
});

// Connessione al database
db.connect((err) => {
  if (err) {
    console.error("Errore di connessione al database", err);
    return;
  }
  console.log("Connessione al database riuscita");
});

// Endpoint
app.get("/movies", (req, res) => moviesController.getMovies(req, res, db));

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
