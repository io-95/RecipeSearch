const express = require("express");
const { sendHealthStatus } = require("../Controllers/healthController");
const { sendRecipeList } = require("../Controllers/recipeController");
const { sendRecipeOfTheDay } = require("../Controllers/recipeController");

const router = express.Router();

router.get("/health", sendHealthStatus);

router.get("/recipes", sendRecipeList);

router.get("/recipes/recipeoftheday", sendRecipeOfTheDay);

module.exports = router;