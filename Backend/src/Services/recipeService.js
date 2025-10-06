function getRecipeOfTheDay() {
    throw new Error("DB error");
}

function getRecipeList() {
    throw new Error("DB error");
}

module.exports = { getRecipeOfTheDay, getRecipeList }