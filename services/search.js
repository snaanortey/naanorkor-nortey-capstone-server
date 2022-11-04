// Elastic search DB query structure

// We already have a route that takes an image as input, buffer it, and produces an array
// The array that the function is taking comes in this form >>> ["string1", "string2"]
// But has to be transformed to this array to this form >>> [match: { ingredients: string1 }, { ingredients: string2 }]
// and pass the transformed array as input in a function that takes the array as parameter
// And passes it to the searchingredientsRoute which is to query ingredients from elastic search DB to get an objects(s)

// Step 1 - Transform array to elastic search input format

const elasticClient = require("../elastic-client");

function transformedArray(array) {
  const newArray = array.map((item) => ({
    match: { ingredients: item },
  }));
  return newArray;
}

const searchIngredientsByKeyWords = async (array) => {
  const modifiedArray = transformedArray(array);

  const elasticSearchQuery = {
    query: {
      bool: {
        should: modifiedArray,
      },
    },
  };

  console.log(elasticSearchQuery);

  const result = await elasticClient.search(elasticSearchQuery);

  const response = result.hits.hits.map((items) => items._source);

  return response;
};

module.exports = { searchIngredientsByKeyWords };
