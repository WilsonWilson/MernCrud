const mongoose = require("mongoose");

const postShema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      min: 3,
      max: 300,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      min: 3,
      max: 200,
      required: true,
    },
    abv: {
      type: String,
      trim: true,
      min: 1,
      max: 5,
      required: false,
    },
    brewery: {
      type: String,
      trim: true,
      min: 2,
      max: 200,
      required: false,
    },
    brewCity: {
      type: String,
      trim: true,
      min: 2,
      max: 200,
      required: false,
    },
    brewState: {
      type: String,
      trim: true,
      min: 2,
      max: 200,
      required: false,
    },
    brewSize1: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: true,
    },
    brewSize1Price: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: true,
    },
    brewSize2: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize2Price: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize3: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize3Price: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize4: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize4Price: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize5: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    brewSize5Price: {
      type: String,
      trim: true,
      min: 2,
      max: 30,
      required: false,
    },
    description: {
      type: {},
      required: true,
      min: 20,
      max: 2000000,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },
    user: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postShema);
