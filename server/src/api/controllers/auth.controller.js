"use strict";
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const User = require("../models/User");

/*
 * User Registration
 *
 * @body {String} username
 * @body {String} email
 * @body {String} password
 *
 * @public POST /api/register
 */
exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // generate password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // save new user and add user to response body
    const savedUser = await newUser.save();
    res.status(httpStatus.CREATED).json({ id: savedUser._id });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

/*
 * User Login
 *
 * @body {String} username / email
 * @body {String} password
 *
 * @public POST  /api/login
 *  */
exports.login = async (req, res, next) => {
  try {
    // get fields from req.body
    const field = req.body.username || req.body.email;
    const { password } = req.body;

    // find user according to fields
    const user = await User.findOne({
      $or: [{ username: field }, { email: field }],
    }).lean();

    // validate password
    const isMatch = user && (await bcrypt.compare(password, user.password));

    !isMatch &&
      res.status(httpStatus.UNAUTHORIZED).json({
        error: true,
        message: "Email or password incorrect.",
        status: httpStatus.UNAUTHORIZED,
      });

    isMatch &&
      res.status(httpStatus.OK).json({
        id: user._id,
        username: user.username,
      });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};
