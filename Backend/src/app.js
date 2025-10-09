const express = require("express");
const router = require("./Routers");
const { intitRecipeScheduler } = require("Services/recipeOfTheDayService");

const app = express();
app.use(express.json());
app.use("/api", router);

initRecipeScheduler();

module.exports = app;