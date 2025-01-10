require("dotenv").config();
const express = require("express");
const moviesRouter = require("./routers/movies");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
const port = 3000;

// Router
app.use("/movies", moviesRouter);

// Middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
