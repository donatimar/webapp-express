require("dotenv").config();
const express = require("express");
const moviesRouter = require("./routers/movies");

const app = express();
const port = 3000;

// Router
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
