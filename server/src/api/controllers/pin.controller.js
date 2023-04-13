"use strict";
const httpStatus = require("http-status");
const Pin = require("../models/Pin");

/*
 *
 * Create a pin
 *
 * @body {String} username
 * @body {String} title
 * @body {String} description
 * @body {Number} rating
 * @body {Number} latitude
 * @body {Number} longtitude
 *
 * @public POST /api/pins
 */
exports.create = async (req, res, next) => {
  try {
    const newPin = new Pin(req.body);
    const savedPin = await newPin.save();
    res.status(httpStatus.OK).json(savedPin);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

/*
 *
 * Get all pins
 *
 * @public GET /api/pins
 */
exports.getAllPins = async (req, res, next) => {
  try {
    const pins = await Pin.find();
    res.status(httpStatus.OK).json(pins);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
