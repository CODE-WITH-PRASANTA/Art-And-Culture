const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    use: String,
    rating: Number,
    stock: Number,
    shipping: String,
    categoryType: String,
    helpline: String,
    price: Number,
    discount: Number,

    sizes: {
      height: String,
      width: String,
      weight: String,
    },

    details: String,

    faqs: [
      {
        question: String,
        answer: String,
      },
    ],

    images: [String],

    // ✅ IMPORTANT (used in frontend)
    status: {
      type: String,
      default: "Published",
    },
  },
  {
    timestamps: true, // ✅ FIX (createdAt, updatedAt)
  }
);

module.exports = mongoose.model("Product", productSchema);