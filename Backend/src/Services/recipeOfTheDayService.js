const axios = require("axios");
const { mapMealDbRecipe } = require("../models/recipe.mapper.js");
const { recipeSchema } = require("../models/recipe.schema.js");

let recipeOfTheDayCache = {
    data: null,
    lastUpdated: null
  };