const express = require("express");
const { arrayBuffer } = require("stream/consumers");

const router = express.Router();

const elasticClient = require("../elastic-client");

// { match: { ingredients: "fresh strawberries" }}

function ingredient(array) {
  const transformedArray = array.map((item) => ({
    match: { ingredients: item },
  }));
  return transformedArray;
}

router.post("/", async (req, res) => {
  const elasticSearchQuery = {
    query: {
      bool: {
        should: ingredient(req.body),
      },
    },
  };

  console.log(elasticSearchQuery);

  try {
    const result = await elasticClient.search(elasticSearchQuery);

    res.send(result.hits.hits);
  } catch (err) {
    console.log("error:", err);
    res.status(404).send("failed to load recipes");
  }
});

module.exports = router;
