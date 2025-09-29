const { getHealthStatus } = require("../Services/healthService");

function sendHealthStatus(req, res) {
  const healthStatus = getHealthStatus();
  res.status(200).json({ message: healthStatus });
}

module.exports = { sendHealthStatus };