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

    sku: String,

    expressDelivery: String,

    indiaDelivery: String,

    aboutProduct: String,

    productMaterial: String,

    sizes: {
      height: String,
      width: String,
      weight: String,
      diameter: String,
      inches: String,
    },

    weightDetails: {
      thali: String,
      diya: String,
      incenseHolder: String,
      bell: String,
      bowl: String,
      kalash: String,
    },

    quantityDiscounts: [
      {
        quantity: String,
        discount: String,
      },
    ],

    faqs: [
      {
        question: String,
        answer: String,
      },
    ],

    images: [String],

    status: {
      type: String,
      default: "Published",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);