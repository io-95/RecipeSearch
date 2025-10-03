const { getRecipeList } = require("../Services/recipeService");
const { getRecipeOfTheDay } = require("../Services/recipeService");

function sendRecipeList(req, res) {
    const keyword = req.querry.search;
    const recipeList = getRecipeList(keyword);
    
    if(recipeList === null){
        res.status(404).json({status: "Recipe not found"});
    }
    res.status(200).json(recipeList);
}

function sendRecipeOfTheDay(req, res) {
    const recipeOfTheDay = getRecipeOfTheDay();

    res.status(200).json(recipeOfTheDay);
}

module.exports = { sendRecipeList , sendRecipeOfTheDay};