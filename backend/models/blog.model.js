const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    quote: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    designation: { type: String, required: true },
    aboutAuthor: { type: String, required: true },
    details: { type: String, required: true },
    blogType: { type: String, default: "Trending" },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);