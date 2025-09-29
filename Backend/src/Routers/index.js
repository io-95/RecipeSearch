const express = require("express");
const { sendHealthStatus } = require("../Controllers/healthController");

const router = express.Router();

router.get("/health", sendHealthStatus);

module.exports = router;