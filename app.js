require("dotenv").config();
const express = require("express");
const cors = require("cors");
const moviesRouter = require("./routers/movies");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
const port = 3000;

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Router
app.use("/movies", moviesRouter);

// Middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
