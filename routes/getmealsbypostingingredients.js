const express = require("express");

const router = express.Router();

const fs = require("fs");

const array = [
  {
    ingredients: [
      "12 egg whites",
      "12 egg yolks",
      "1 1/2 cups sugar",
      "3/4 cup rye whiskey",
      "12 egg whites",
      "3/4 cup brandy",
      "1/2 cup rum",
      "1 to 2 cups heavy cream, lightly whipped",
      "Garnish: ground nutmeg",
    ],
    picture_link: "null",
    instructions:
      "Beat the egg whites until stiff, gradually adding in 3/4 cup sugar. Set aside. Beat the egg yolks until they are thick and pale and add the other 3/4 cup sugar and stir in rye whiskey. Blend well. Fold the egg white mixture into the yolk mixture and add the brandy and the rum. Beat the mixture well. To serve, fold the lightly whipped heavy cream into the eggnog. (If a thinner mixture is desired, add the heavy cream unwhipped.) Sprinkle the top of the eggnog with the nutmeg to taste.\nBeat the egg whites until stiff, gradually adding in 3/4 cup sugar. Set aside. Beat the egg yolks until they are thick and pale and add the other 3/4 cup sugar and stir in rye whiskey. Blend well. Fold the egg white mixture into the yolk mixture and add the brandy and the rum. Beat the mixture well. To serve, fold the lightly whipped heavy cream into the eggnog. (If a thinner mixture is desired, add the heavy cream unwhipped.) Sprinkle the top of the eggnog with the nutmeg to taste.",
    title: "Christmas Eggnog",
  },
  {
    ingredients: [
      "2 tablespoons unsalted butter, softened",
      "4 or 5 slices brioche, or good quality white bread (I like Pepperidge Farm), 1/4 inch thick, crusts removed",
      "3 extra-large eggs",
      "2 extra-large egg yolks",
      "1/4 cup brown sugar",
      "1 1/2 cups heavy cream",
      "1 1/4 cups whole milk",
      "1 teaspoon pure vanilla extract",
      "1/2 teaspoon ground cinnamon",
      "1/4 teaspoon freshly grated nutmeg",
      "1/4 teaspoon kosher salt",
      "3/4 cup chopped bittersweet chocolate",
      "1 tablespoon granulated sugar, for caramelizing the top",
    ],
    picture_link: "3xjktRst3I5lDZ2Z5kTOtqQyzZFFN9u",
    instructions:
      "Preheat the oven to 350\u00b0F. Spread the softened butter on one side of the brioche. Cut each slice in half on the diagonal and then again into quarters. Whisk together the eggs, egg yolks, and brown sugar in a large bowl. Add the cream, milk, vanilla, cinnamon, nutmeg, and salt, whisking to combine well. Sprinkle the chocolate over the bottom of a 9-by-9-inch (or equivalent) baking dish. Arrange the brioche, buttered side up, with slices overlapping just slightly, on the chocolate (there should be just a single layer of bread). Pour the custard over the bread, pressing down with your fingers to make sure the bread soaks it up. Place the bread pudding in a roasting pan, and pour warm water into the pan to come halfway up the sides of the pudding dish. Bake about 1 hour and 15 minutes, until the custard is set and the bread puffs up slightly. The pudding will be springy to the touch. Let the bread pudding cool at least 10 minutes. If you have a kitchen blowtorch, sprinkle the sugar over the top, and torch to brown and caramelize. You could run the pudding under the broiler to caramelize if you don\u2019t have a torch, but be careful not to curdle the custard underneath. Serve the bread pudding from the baking dish at the table, using a big spoon.\nPreheat the oven to 350\u00b0F.\nSpread the softened butter on one side of the brioche. Cut each slice in half on the diagonal and then again into quarters.\nWhisk together the eggs, egg yolks, and brown sugar in a large bowl. Add the cream, milk, vanilla, cinnamon, nutmeg, and salt, whisking to combine well.\nSprinkle the chocolate over the bottom of a 9-by-9-inch (or equivalent) baking dish. Arrange the brioche, buttered side up, with slices overlapping just slightly, on the chocolate (there should be just a single layer of bread). Pour the custard over the bread, pressing down with your fingers to make sure the bread soaks it up. Place the bread pudding in a roasting pan, and pour warm water into the pan to come halfway up the sides of the pudding dish. Bake about 1 hour and 15 minutes, until the custard is set and the bread puffs up slightly. The pudding will be springy to the touch.\nLet the bread pudding cool at least 10 minutes.\nIf you have a kitchen blowtorch, sprinkle the sugar over the top, and torch to brown and caramelize. You could run the pudding under the broiler to caramelize if you don\u2019t have a torch, but be careful not to curdle the custard underneath.\nServe the bread pudding from the baking dish at the table, using a big spoon.",
    title: "Caramelized Bread Pudding with Chocolate and Cinnamon",
  },
];

router.get("/", (req, res) => {
  const ingredients = req.body.ingredients;


  res.send(array);
});

module.exports = router;
