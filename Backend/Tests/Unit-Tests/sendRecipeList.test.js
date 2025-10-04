const { sendRecipeList } = require("../../src/Controllers/recipeController");

jest.mock("../../src/Controllers/recipeController", () => {
    getRecipeList: jest.fn(),
});