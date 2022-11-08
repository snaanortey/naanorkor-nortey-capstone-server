const express = require("express");
const { errors } = require("@elastic/elasticsearch");
const router = express.Router();

const elasticClient = require("../elastic-client");

router.get("/:id", async (req, res) => {
  try {
    const result = await elasticClient.get({
      index: "recipes",

      id: req.params.id,
    });

    console.log(result);

    res.json(result._source);
  } catch (err) {
    console.log("Error getting ingredients by mealId", err);
    // if err is an object of the class ResponseError
    if (err instanceof errors.ResponseError) {
      res.status(err.meta.statusCode).send("Ingredients not found in database");
      return;
    }

    res.status(500).send("An unknown error occurred");
  }
});

module.exports = router;
