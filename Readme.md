# Foodease

This is the backend repository of my bootcamp capstone project; Foodease.
Ever had ingredients in your kitchen but not sure what to cook? Or gone shopping to prepare a meal and forgot to buy one or two of the ingredients? Foodease solves these problems while reducing food waste.
Foodease is a web app that allows users to:
- Take pictures of ingredients they have at home, upload them and get recipes to cook!
- Type a meal they want to prepare and get a shopping list for that meal.  

Foodease reduces food waste by:
- Allowing users use leftover ingredients which might have gone waste; and
- Letting users buy only what they need by giving them the exact quatities to buy in their shopping list. (In future, the app will let users select the number of servings for the meal they want to cook, and the shopping list will match that quantity per serving).

The app uses: 
- elasticSearch database to store the recipe data and to optimize for seacrches in the frontend and;
- Google cloud vision API to detect objects in the images uploaded using google's AI.

## HOW TO RUN THIS APP:

1. Clone this git repo

1. Run `npm install` to install dependencies

1. Clone and rename the `.env.example` file to `.env` and populate the values based on the instructions in the respective sections below

1. Configure elasticSearch 

   - Create your Elastic cloud console account (15 days free trial) `https://cloud.elastic.co/registration` 
   - Store your elastic id in the `.env` file
   - Generate an api key and store it in the `.env` file
   - Run `node ./services/create-index.js` to create a new index called `recipes` in your elastic search deployment 
   - Run `node ./scripts/populate.js` to populate your `recipes` index with recipe data from JSON file

1. Configure goole cloud vision API

   - Create a google cloud project by following these steps `https://cloud.google.com/vision/docs/setup`
   - Save your goole cloud credentials in a file on your computer; and save the path to your gogole cloud credientials file in the .env file 

1. Run the app `node index.js`

