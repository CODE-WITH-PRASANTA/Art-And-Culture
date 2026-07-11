const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
    question: String,
    answer: String
});

const shopViewSchema = new mongoose.Schema({
    images: [String],
    productTitle: String,
    oldPrice: Number,
    newPrice: Number,
    discount: Number,
    quantity: Number,
    imageRatio: String,
    location: String,
    deliveryTime: String,
    guarantee: String,
    warranty: String,
    mainMaterial: String,
    productDetails: String,
    aboutProduct: String,
    sizeManagement: String,
    faqs: [faqSchema],
    isPublished: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    "ShopView",
    shopViewSchema
);