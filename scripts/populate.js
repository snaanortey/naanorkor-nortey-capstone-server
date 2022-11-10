"use strict";
const fs = require("fs");

const fileContent = fs.readFileSync("./scripts/ingredients.json");

const recipes = JSON.parse(fileContent);

const axios = require("axios");

const apiKey =
  "ApiKey Nzk4Vkw0UUJ4UkJuV0h2ZFRmc0c6bDYzM3h3ck5RUGUxYlJ1aHdZaFpkQQ==";

const requestURL =
  "https://162e3743846449d6ace1a312d4bb102e.us-central1.gcp.cloud.es.io:443/recipes/_doc";

const populateIndexWithRecipes = async () => {
  for (const property in recipes) {
    try {
      const recipe = JSON.stringify(recipes[property]);

      //Post each of the recipe objects (recipe) from the json file to the elasticsearch database
      const response = await axios.post(requestURL, recipe, {
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error(
        `Failed to upload recipe ${response.data._id} to the index`
      );
    }
  }
};

populateIndexWithRecipes().then(() => {
  console.log("finished indexing");
});
