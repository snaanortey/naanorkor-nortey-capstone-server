const { Client } = require("@elastic/elasticsearch");

require("dotenv").config({ path: ".env" });

const elasticClient = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID,
  },
  auth: {
    apiKey: process.env.apiKey,
  },
});

module.exports = elasticClient;
