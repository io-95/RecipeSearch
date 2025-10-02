const { getRecipeList } = require("../Services/recipeService");

function sendRecipeList(req, res) {
    const keyword = req.querry.search;
    const recipeList = getRecipeList(keyword);

    res.status(200).json(recipeList);
}

module.exports = { sendRecipeList };