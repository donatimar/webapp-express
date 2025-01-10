const notFoundMiddleware = (req, res, next) => {
  res.status(404).send("Rotta non trovata");
};

module.exports = notFoundMiddleware;
