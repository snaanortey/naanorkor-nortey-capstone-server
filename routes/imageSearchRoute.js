const express = require("express");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");
const { searchIngredientsByKeyWords } = require("../services/search");

const app = express();

const router = express.Router();

// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient();

app.use(morgan("dev"));

router.post("/upload-image", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
      return;
    }

    const image = req.files.image;

    // The image buffer is stored in the data property of the image
    // Call the google API passing to it the image buffer (image.data)
    const [result] = await client.objectLocalization(image.data);
    const annotations = result.localizedObjectAnnotations;
    const namesArray = annotations.map((item) => item.name);

    const response = await searchIngredientsByKeyWords(namesArray);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
