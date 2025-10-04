const { sendRecipeList } = require("../../src/Controllers/recipeController");

jest.mock("../../src/Controllers/recipeController", () => {
    getRecipeList: jest.fn(),
});

const { getRecipeList } = require("../../src/Controllers/recipeController");

describe("sendRecipeList (Unit-Test)", () => {
    let req, res;

    beforeEach( () => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });
});