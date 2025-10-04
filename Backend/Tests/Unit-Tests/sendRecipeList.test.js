const { sendRecipeList } = require("../../src/Controllers/recipeController");

jest.mock("../../src/Controllers/recipeController", () => {
    getRecipeList: jest.fn(),
});

const { getRecipeList } = require("../../src/Controllers/recipeController");

