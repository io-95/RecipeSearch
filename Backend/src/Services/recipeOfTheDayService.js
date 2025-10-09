const axios = require("axios");
const { mapMealDbRecipe } = require("../models/recipe.mapper.js");
const { recipeSchema } = require("../models/recipe.schema.js");

let recipeOfTheDayCache = {
    data: null,
    lastUpdated: null
  };

  async function fetchRandomRecipe() {
    const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    const rawRecipe = data.meals[0];
    const mapped = mapMealDbRecipe(rawRecipe);
  
    // Validate
    const { error, value } = recipeSchema.validate(mapped);
    if (error) {
      throw new Error(`Invalid recipe data: ${error.message}`);
    }
    
  return value;
}