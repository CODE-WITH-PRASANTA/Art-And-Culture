const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Temple Idol", "Decor", "Spiritual"],
      default: "Temple Idol",
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
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
      enum: ["Active", "Draft", "Out of Stock"],
      default: "Active",
    },

    type: {
      type: String,
      enum: ["Featured", "Trending", "Sale"],
      default: "Featured",
    },

    material: {
      type: String,
      default: "Brass",
    },

    tags: [String],

    weight: String,
    dimensions: String,

    shortDesc: String,
    fullDesc: String,

    wishlist: {
      type: Boolean,
      default: false,
    },

    compare: {
      type: Boolean,
      default: false,
    },

    saleBadge: {
      type: Boolean,
      default: false,
    },

    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);