const express = require("express");
const router = require("./Routers");
cost { intitRecipeScheduler } = require("Service/recipeOfTheDayService");

const app = express();
app.use(express.json());
app.use("/api", router);

initRecipeScheduler();

module.exports = app;