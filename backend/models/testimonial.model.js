const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: String,
    message: {
      type: String,
      required: true,
    },
    image: String,
    highlight: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);