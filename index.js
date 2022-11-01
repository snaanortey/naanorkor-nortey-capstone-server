const express = require("express");

const app = express();

const cors = require("cors");

const fs = require("fs");

const PORT = 8000;

// Creating express routes for my elastic search end points
const bodyParser = require("body-parser");

const elasticClient = require("./elastic-client");

require("express-async-errors");

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  //redirects to where frontend will be located
  res.redirect("http://localhost:3000/");
});
app.get("/search", async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: "recipes",
      _source: false,
      query: {
        match_phrase_prefix: {
          title: req.query.query,
        },
      },
      fields: ["title"],
    });

    console.log(result);

    res.json(result);
  } catch (err) {
    console.log(error);
    throw new Error("failed to load meal suggestions");
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
