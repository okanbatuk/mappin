const Schema = require("mongoose").Schema;

const pinSchema = new Schema(
  {
    username: { type: String, required: true },
    title: {
      type: String,
      required: true,
      min: 3,
    },
    dec: {
      type: String,
      required: true,
      min: 3,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    latitude:{
      type:Number,
      required:true
    },
    longtitude:{
      type:Number,
      required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", pinSchema);
