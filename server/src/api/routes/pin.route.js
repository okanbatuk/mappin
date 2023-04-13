"use strict";
const pinRoutes = require("express").Router();
const pinController = require("../controllers/pin.controller");

pinRoutes.route("/").get(pinController.getAllPins).post(pinController.create);

module.exports = pinRoutes;
