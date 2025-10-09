const { getRecipeList } = require("../Services/recipeService");
const { getRecipeOfTheDay } = require("../Services/recipeOfTheDayService");

async function sendRecipeList(req, res) {
    try {
        const raw = req.query.search;
        if (!raw || typeof raw !== "string") {
          return res.status(400).json({ error: "missing or invalid search parameter" });
        }
    
        // sanitize & limit length
        const keyword = sanitizeKeywordForLike(raw);
        if (keyword.length === 0) {
          return res.status(400).json({ error: "empty search after sanitization" });
        }

        const recipeList = await getRecipeList(keyword);
        if(recipeList === null){
            res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json(recipeList);
    }catch(err){
        console.error("Database call failed:", err.message);
        res.status(503).json({ error: "Database unavailable" });
    }
}

async function sendRecipeOfTheDay(req, res) {
    try{
        const recipeOfTheDay = await getRecipeOfTheDay();
        res.status(200).json(recipeOfTheDay);
    }catch(err){
        console.error("Database call failed:", err.message);
        res.status(503).json({ error: "Database unavailable" });
    }
}

function sanitizeKeywordForLike(keyword){
    // remove control chars, trim, enforce max length
    let k = String(keyword || "").trim().slice(0, 30);

    // escape LIKE wildcards '%' and '_' by prefixing with backslash
    // also escape backslash itself
    k = k.replace(/\\/g, "\\\\").replace(/%/g, "\\%").replace(/_/g, "\\_");

    return k;
}

module.exports = { sendRecipeList , sendRecipeOfTheDay};