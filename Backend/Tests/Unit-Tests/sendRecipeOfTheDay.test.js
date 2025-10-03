const { sendRecipeOfTheDay } = require("../src/Controllers/recipeController");

jest.mock("../src/Services/recipeService", () => ({
    getRecipeOfTheDay: jest.fn(),
}));

const { getRecipeOfTheDay } = require("../src/Service/recipeService");

describe("sendRecipeOfTheDay (Unit-Test)", () => {
    
});