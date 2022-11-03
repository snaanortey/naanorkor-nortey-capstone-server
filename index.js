const express = require("express");

const app = express();

const cors = require("cors");

const fs = require("fs");

const PORT = 8000;

// Creating express routes for my elastic search end points
const bodyParser = require("body-parser");

const elasticClient = require("./elastic-client");

const searchMealRoute = require("./routes/searchMealsRoute");

const getIngredientsById = require("./routes/getIngredientsById");

const searchingredients = require("./routes/searchingredients");

require("express-async-errors");

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  //redirects to where frontend will be located
  res.redirect("http://localhost:3000/");
});

app.use("/meals/search", searchMealRoute);

app.use("/ingredients", getIngredientsById);

app.use("/recipes/search", searchingredients);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
