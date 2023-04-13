"use strict";
const router = require("express").Router();

router.get("/status", (req, res, next) => {
  res.status(200).json({ message: "Everything is OK" });
});

// Routes
router.use("/", require("./auth.route.js"));
router.use("/pins", require("./pin.route"));

module.exports = router;
