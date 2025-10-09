const axios = require("axios");

async function getRecipeList(keyword) {
    const recipeList = [];
    
    const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + keyword);
    
    //throw new Error("DB error");
}

module.exports = { getRecipeList }