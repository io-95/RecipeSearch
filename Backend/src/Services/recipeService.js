const axios = require("axios");
const { mapMealDbRecipe } = require("../Model/recipe.mapper.js");
const { recipeModel } = require("../Model/recipe.model.js");

async function getRecipeList(keyword) {
    const recipeList = [];
    try{
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + keyword);
        data.meals.forEach((recipe) => {
            const mapped = mapMealDbRecipe(recipe);

            const { error, value } = recipeModel.validate(mapped);
            if (!error) {
                recipeList.push(value);
            }else {
                throw new Error(`Invalid recipe data: ${error.message}`);
            }
        });

        return {recipe: recipeList}
    } catch (err) {
        if (err.response) {
            throw new Error(`API request failed: ${err.response.status} ${err.response.statusText}`);
        } else if (err.request) {
            throw new Error("DB error");
        } else {
            throw new Error(`Request setup failed: ${err.message}`);
        }
    }
}

module.exports = { getRecipeList }