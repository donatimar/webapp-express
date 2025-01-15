require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const moviesRouter = require("./routers/movies");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
const port = 3000;

// Middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // Parsing del body in formato JSON
app.use("/images", express.static(path.join(__dirname, "public", "images")));

// Router
app.use("/movies", moviesRouter);

// Gestione degli errori
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
