// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient();

const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  // Performs label detection on the image file
  try {const [result] = await client.labelDetection(req.body);
    const labels = result.localizedObjectAnnotations;
    labels.forEach((label) => res.send(label.name));}
    catch(err){
        console.log(err)
    }
});

module.exports = router;
