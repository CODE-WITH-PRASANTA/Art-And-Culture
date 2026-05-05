const mongoose = require("mongoose");

const poojaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Active", "Draft"],
      default: "Active",
    },
    type: {
      type: String,
      enum: ["Featured", "Normal"],
      default: "Normal",
    },
    shortDesc: {
      type: String,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pooja", poojaSchema);