'use strict'

module.exports.getRecipes = function getRecipes(req, res, next) {
  var data = [
    {
      "recipeIdS": "espetos",
      "description": "Sardinas a la brasa ensartadas en un palo",
      "ingredients": "Sardina, sal y brasas",
      "complexity": "media"
    }
  ];
  res.send(data);
};

module.exports.addRecipe = function addRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for addRecipe'
  });
};