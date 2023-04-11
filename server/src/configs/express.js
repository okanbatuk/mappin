const express = require("express");
const connectDB = require("./dbConn");

const app = express();

connectDB();

module.exports = app;
