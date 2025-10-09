const axios = require("axios");
const { mapMealDbRecipe } = require("../Model/recipe.mapper.js");
const { recipeModel } = require("../Model/recipe.model.js");

let recipeOfTheDayCache = {
    data: null,
    lastUpdated: null
};

async function fetchRandomRecipe() {
    try {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        const rawRecipe = data.meals[0];
        const mapped = mapMealDbRecipe(rawRecipe);

        const { error, value } = recipeModel.validate(mapped);
        if (error) {
            throw new Error(`Invalid recipe data: ${error.message}`);
        }
  
        return value;
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

async function getRecipeOfTheDay() {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  
    if (
        recipeOfTheDayCache.data &&
        Date.now() - recipeOfTheDayCache.lastUpdated < ONE_DAY_MS
    ) {
        return recipeOfTheDayCache.data;
    }
  
    const recipe = await fetchRandomRecipe();
        recipeOfTheDayCache = {
        data: recipe,
        lastUpdated: Date.now()
    };
    return recipe;
}

async function initRecipeScheduler() {
    try {
        console.log("Fetching initial 'Recipe of the Day'...");
        recipeOfTheDayCache.data = await fetchRandomRecipe();
        recipeOfTheDayCache.lastUpdated = Date.now();
        console.log("Recipe of the Day cached successfully.");
    } catch (err) {
        console.error("Failed to fetch Recipe of the Day:", err.message);
    }
  
    setInterval(async () => {
        try {
            console.log("Refreshing Recipe of the Day...");
            const newRecipe = await fetchRandomRecipe();
            recipeOfTheDayCache.data = newRecipe;
            recipeOfTheDayCache.lastUpdated = Date.now();
            console.log("Recipe of the Day updated.");
        } catch (err) {
            console.error("Scheduled fetch failed:", err.message);
        }
    }, 24 * 60 * 60 * 1000);
}

module.exports = { initRecipeScheduler , getRecipeOfTheDay}