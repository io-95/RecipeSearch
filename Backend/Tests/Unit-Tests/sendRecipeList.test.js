const { sendRecipeList } = require("../../src/Controllers/recipeController");

jest.mock("../../src/Controllers/recipeController", () => {
    getRecipeList: jest.fn(),
});

const { getRecipeList } = require("../../src/Controllers/recipeController");

describe("sendRecipeList (Unit-Test)", () => {
    let req, res;
    let searchInput;

    beforeEach( () => {
        req = {
            query: {
                search: searchInput
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it("return 200 and a list of recipes", () => {

    });
});