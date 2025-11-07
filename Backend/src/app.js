const express = require("express");
const cors = require("cors");
const router = require("./Routers");
const { initRecipeScheduler } = require("./Services/recipeOfTheDayService");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

initRecipeScheduler();

module.exports = app;