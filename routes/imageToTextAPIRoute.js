// This file handles single file uploads with Node.js and Express backend and saves uploaded files on the server

// Step 1 - install these dependencies >>>> npm install express-fileupload morgan lodash --save

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");
const { searchIngredientsByKeyWords } = require("../services/search");
const {filterArray} = require("../services/filterArray");
const app = express();

const router = express.Router();

// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient();

//add other middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

router.post("/", async (req, res) => {
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

    const filteredArray = filterArray(namesArray, "Container", "Food", "Vegetable");
    
    res.send(filteredArray);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
