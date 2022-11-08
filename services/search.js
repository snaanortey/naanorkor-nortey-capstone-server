const elasticClient = require("../elastic-client");
const axios = require('axios');

function transformedArray(array) {
  const newArray = array.map((item) => ({
    match: { ingredients: item },
  }));
  return newArray;
}

async function getRandomImage() {
  const {
    data: { image },
  } = await axios.get("https://foodish-api.herokuapp.com/api/");
  return image;
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

  // for each result in hits, start fetching n number of random images in parallel
  const imagePromises = result.hits.hits.map(getRandomImage);
  const images = await Promise.all(imagePromises);

  const response = result.hits.hits.map((item, i) => ({
    id: item._id,
    imageUrl: images[i],
    ...item._source,
  }));

  return response;
};

module.exports = { searchIngredientsByKeyWords };
