const mongoose = require("mongoose");
const vars = require("../configs/vars");

const connectDB = async () => {
  try {
    await mongoose.connect(vars.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
