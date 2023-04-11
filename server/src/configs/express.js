"use strict";
const express = require("express");
const connectDB = require("./dbConn");
const routes = require("../api/routes");

/*
 * Create app
 * @public
 */
const app = express();

// Connect to db
connectDB();

// Parse requests with JSON
app.use(express.json());

// Import routes
app.use("/api", routes);

module.exports = app;
