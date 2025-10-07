function mapMealDbRecipe(apiRecipe) {
    return {
      id: apiRecipe.idMeal,
      mealName: apiRecipe.strMeal,
      instructions: apiRecipe.strInstructions,
      thumbnail: apiRecipe.strMealThumb,
      ingredients: extractIngredients(apiRecipe),
      measure: extractMeasures(apiRecipe)
    };
  }
  
  function extractIngredients(apiRecipe) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const name = apiRecipe[`strIngredient${i}`];
      if (name && name.trim()) ingredients.push(name);
    }
    return ingredients;
  }

  function extractMeasures(apiRecipe) {
    const measures = [];
    for (let i = 1; i <= 20; i++) {
      const measure = apiRecipe[`strMeasure${i}`];
      if (measure && measure.trim()) measures.push(measure);
    }
    return measures;
  }

module.exports = { mapMealDbRecipe }