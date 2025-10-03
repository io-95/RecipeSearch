const { sendRecipeOfTheDay } = require("../src/Controllers/recipeController");

jest.mock("../src/Services/recipeService", () => ({
    getRecipeOfTheDay: jest.fn(),
}));

const { getRecipeOfTheDay } = require("../src/Service/recipeService");

describe("sendRecipeOfTheDay (Unit-Test)", () => {
    let req, res;

    beforeEach( () => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    })

    
});