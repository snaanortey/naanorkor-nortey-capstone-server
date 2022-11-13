const express = require("express");

const router = express.Router();

const elasticClient = require("../services/elastic-client");

const transformElasticSearchObject = (item) => {
  const result = {
    id: item._id,
    title: item.fields.title[0],
  };
  return result;
};

router.get("/", async (req, res) => {
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

    const array = result.hits.hits;

    const apiResponse = array.map(transformElasticSearchObject);

    res.send(apiResponse);
  } catch (err) {
    console.log(err);
    res.status(404).send("failed to load meal suggestions");
  }
});

module.exports = router;
