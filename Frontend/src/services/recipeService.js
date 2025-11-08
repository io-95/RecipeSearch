import api, { safeApiCall } from "./api"

export async function getRecipeOfTheDay() {
    const recipeOfTheDay = await safeApiCall(() => api.get('/recipes/recipeOfTheDay'), { fullResponse: true });
    console.log(recipeOfTheDay);
    return recipeOfTheDay;
}

export async function searchRecipe(keyWord) {
    const recipeList = await safeApiCall(() => api.get(`/recipes?search=${keyWord}`));
    console.log(recipeList);
    return recipeList;
}