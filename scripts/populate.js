"use strict";
const fs = require("fs");

const fileContent = fs.readFileSync("./scripts/ingredients.json");

const recipes = JSON.parse(fileContent);

const elasticClient = require("../elastic-client");

const populateIndexWithRecipes = async () => {
  for (const property in recipes) {
    try {
      const recipe = recipes[property];

      //Post each of the recipe objects (recipe) from the json file to the elasticsearch database
      await elasticClient.index({
        index: "recipes",
        document: recipe,
      });
      console.log("one doc has finished uploading");
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to upload recipe to the index`);
    }
  }
};

populateIndexWithRecipes().then(() => {
  console.log("finished indexing");
});
