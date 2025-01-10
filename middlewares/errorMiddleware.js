const errorMiddleware = (err, req, res, next) => {
  console.error("Errore:", err.message);
  res.status(500).send("Errore interno del server");
};

module.exports = errorMiddleware;
