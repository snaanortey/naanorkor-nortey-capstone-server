This is the backend repository of my bootcamp capstone project; Foodease.
Ever had ingredients in your kitchen but not sure what to cook? Or gone shopping to prepare a meal and forgot to buy one or two of the ingredients? Foodease solves these problems while reducing food waste.
Foodease is a web app that allows users to:
1. Take pictures of ingredients they have at home, upload them and get recipes to cook!
2. Type a meal they want to prepare and get a shopping list for that meal.  

Foodease reduces food waste by:
1. Allowing users use leftover ingredients which might have gone waste; and
2. Letting users buy only what they need by giving them the exact quatities to buy in their shopping list. (In future, the app will let users select the number of servings for the meal they want to cook, and the shopping list will match that quatity).

The app uses: 
1. elasticSearch database to store the recipe data and to optimize for seacrches in the frontend and;
2. Ggoogle cloud vision API to detect objects in the images uploaded using google's AI.

HOW TO RUN THIS APP:

A. Clone this git repo

B. Configuring elasticSearch 

2. Run `npm install` to install dependencies
3. Create your Elastic cloud console account (15 days free trial) `https://cloud.elastic.co/registration` 
4. Create an `.elastc.env` file in the `script` folder
5. Save your Elastic cloud console credentials in the `.elastc.env` file in the following format:
   `ELASTIC_USERNAME = "YOUR_USERNAME_HERE"`
`ELASTIC_PASSWORD = "YOUR_PASSWORD_HERE"`
`ELASTIC_CLOUD_ID = "YOUR_ID_HERE`
6. Run script in `./scrpts.populate.js` to populate elastic cloud console account with recipe data

C. Configuring goole cloud vision API

1. Create a google cloud project by following these steps `https://cloud.google.com/vision/docs/setup`
2. Save your goole cloud credential in a .env file in the following format `GOOGLE_APPLICATION_CREDENTIALS="/FULL_PATH_TO_WHERE_YOU_SAVED_THE_FILE_ON_YOUR_COMPUTER"`

D. Run the app `node index.js`

