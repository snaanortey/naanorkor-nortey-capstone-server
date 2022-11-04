const express = require("express");

const router = express.Router();

const { searchIngredientsByKeyWords } = require("../services/search.js");

router.post("/", async (req, res) => {
  try {
    const response = await searchIngredientsByKeyWords(req.body);

    res.send(response);
  } catch (err) {
    console.log("error:", err);
    res.status(404).send("failed to load recipes");
  }
});

module.exports = router;
