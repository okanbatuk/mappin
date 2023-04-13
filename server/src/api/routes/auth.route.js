"use strict";
const httpStatus = require("http-status");
const authRoute = require("express").Router();
const authController = require("../controllers/auth.controller");

// Register route
authRoute
  .route("/register")
  .get((req, res, next) => {
    res.status(httpStatus.OK).json({ mesage: "Register Page" });
  })
  .post(authController.register);

// Login Route
authRoute
  .route("/login")
  .get((req, res, next) => {
    res.status(httpStatus.OK).json({ mesage: "Login Page" });
  })
  .post(authController.login);

module.exports = authRoute;
