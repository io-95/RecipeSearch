const { getHealthStatus } = require("../Services/healthService");

async function sendHealthStatus(req, res) {
  const healthStatus = await getHealthStatus();
  res.status(200).json({ message: healthStatus });
}

module.exports = { sendHealthStatus };