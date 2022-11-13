require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("express-async-errors");

const app = express();
const PORT = 8000;

// Creating express routes for my elastic search end points
const bodyParser = require("body-parser");

const elasticClient = require("./elastic-client");

const searchMealRoute = require("./routes/searchMealsRoute");

const getIngredientsById = require("./routes/getIngredientsById");

const searchingredients = require("./routes/searchingredients");

const imageToTextAPIRoute = require("./routes/imageToTextAPIRoute");

const downloadSaveFile = require("./routes/imageSearchRoute");

app.use(bodyParser.json());

app.use(cors());

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.get("/", (req, res) => {
  //redirects to where frontend will be located
  res.redirect("http://localhost:3000/");
});

app.use("/meals/search", searchMealRoute);

app.use("/ingredients", getIngredientsById);

app.use("/recipes/search", searchingredients);

app.use("/image/ingredients", imageToTextAPIRoute);

app.use("/", downloadSaveFile);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
