const { sendRecipeOfTheDay } = require("../../src/Controllers/recipeController");

jest.mock("../../src/Services/recipeService", () => ({
    getRecipeOfTheDay: jest.fn(),
}));

const { getRecipeOfTheDay } = require("../../src/Services/recipeService");

describe("sendRecipeOfTheDay (Unit-Test)", () => {
    let req, res;

    beforeEach( () => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it("returns 200 and the recipe of the day", async () => {
        getRecipeOfTheDay.mockResolvedValue(recipeOfTheDay);

        await sendRecipeOfTheDay(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(recipeOfTheDay);
    });

    it("returns 503 if service throws", async () => {
        getRecipeOfTheDay.mockRejectedValue(new Error("DB error"));

        await sendRecipeOfTheDay(req, res);
        expect(res.status).toHaveBeenCalledWith(503);
        expect(res.json).toHaveBeenCalledWith({ error: "Database unavailable" });
    });
});

var recipeOfTheDay = {
    recipe: [
        {
            id: "52835",
            mealName: "Fettucine alfredo",
            instraction: `In a medium saucepan, stir the clotted cream, butter 
                and cornflour over a low-ish heat and bring to a low simmer. 
                Turn off the heat and keep warm.\r\nMeanwhile, put the cheese 
                and nutmeg in a small bowl and add a good grinding of black 
                pepper, then stir everything together (don’t add any salt at 
                this stage).\r\nPut the pasta in another pan with 2 tsp salt, 
                pour over some boiling water and cook following pack 
                instructions (usually 3-4 mins). When cooked, scoop some of 
                the cooking water into a heatproof jug or mug and drain the 
                pasta, but not too thoroughly.\r\nAdd the pasta to the pan with 
                the clotted cream mixture, then sprinkle over the cheese and 
                gently fold everything together over a low heat using a rubber 
                spatula. When combined, splash in 3 tbsp of the cooking water. 
                At first, the pasta will look wet and sloppy: keep stirring 
                until the water is absorbed and the sauce is glossy. Check the 
                seasoning before transferring to heated bowls. Sprinkle over 
                some chives or parsley, then serve immediately.`,
            thumbnail: `https://www.themealdb.com/images/media/meals
                /uquqtu1511178042.jpg`,
            ingredients: [
                "Clotted Cream", "Butter", "Corn Flour", "Parmesan Cheese", 
                "Nutmeg", "Fettuccine", "Parsley",
            ],
            measure: [
                "227g", "25g", "1 tsp ", "100g ", "Grated", "250g", "Chopped",
            ]
        }
    ]
};