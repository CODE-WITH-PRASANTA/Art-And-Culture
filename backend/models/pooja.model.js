const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      default: "",
    },

    answer: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const poojaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    /* MULTIPLE IMAGES */

    images: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
      default: "Pooja",
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    oldPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    size: {
      type: String,
      default: "",
    },

    weight: {
      type: String,
      default: "",
    },

    material: {
      type: String,
      default: "",
    },

    faqs: [faqSchema],

    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Pooja",
  poojaSchema
);