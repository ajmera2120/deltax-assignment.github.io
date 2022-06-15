const mongoose = require("mongoose");

const musicSchema = mongoose.Schema(
  {
    name: String,
    year: Number,
    plot: String,
    cast: Number,
    poster: String,
    type: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Movie", musicSchema, "Movies");
