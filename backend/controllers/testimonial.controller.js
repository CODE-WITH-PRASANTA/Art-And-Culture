const Testimonial = require("../models/testimonial.model");
const { deleteImageFile } = require("../middlewares/upload");

// CREATE
exports.createTestimonial = async (req, res) => {
  try {
    const { name, role, message, highlight, rating } = req.body;

    const image = req.file ? req.file.path : "";

    const testimonial = await Testimonial.create({
      name,
      role,
      message,
      image,
      highlight,
      rating,
    });

    res.status(201).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
exports.getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ONE
exports.getTestimonial = async (req, res) => {
  try {
    const item = await Testimonial.findById(req.params.id);

    res.json({
      success: true,
      data: item,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
exports.updateTestimonial = async (req, res) => {
  try {
    const { name, role, message, highlight, rating } = req.body;

    const existing = await Testimonial.findById(req.params.id);

    if (!existing) {
      return res.status(404).json({ message: "Not found" });
    }

    let image = existing.image;

    if (req.file) {
      // delete old image
      deleteImageFile(existing.image);

      image = req.file.path;
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { name, role, message, highlight, rating, image },
      { new: true }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
exports.deleteTestimonial = async (req, res) => {
  try {
    const existing = await Testimonial.findById(req.params.id);

    if (existing && existing.image) {
      deleteImageFile(existing.image);
    }

    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};