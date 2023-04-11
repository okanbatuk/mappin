const mongoose = require("mongoose");
const app = require("./configs/express");
const vars = require("./configs/vars");

// If an error occurs, this event will be triggered
mongoose.connection.on("error", console.error.bind(console, "Conn error: "));

// Open the connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(vars.port, (err) => {
    if (err) throw err;
    console.log(`Backend server is running on ${vars.port}`);
  });
});
