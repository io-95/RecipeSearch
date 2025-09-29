const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use.`);
    console.error("server error:", err);
    process.exit(1);
  } else if (err.code === "EACCES") {
    console.error(
      `Permission denied for port ${PORT}. Ports below 1024 require administrator rights.`
    );
    console.error("server error:", err);
  } else {
    console.error("Error while starting the server:", err);
  }
});