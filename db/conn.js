const mysql = require("mysql2");

// Configurazione del database usando variabili d'ambiente
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "movies",
});

// Connessione al database
db.connect((err) => {
  if (err) {
    console.error("Errore di connessione al database", err);
    return;
  }
  console.log("Connessione al database riuscita");
});

module.exports = db;
