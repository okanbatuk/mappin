const path = require("path");

// import env variables from .env file
require("dotenv-safe").config({
  allowEmptyValues: true,
  path: path.join(__dirname, "../../.env"),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: process.env.DB_URI,
};
