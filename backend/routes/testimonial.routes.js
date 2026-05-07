const express = require("express");
const router = express.Router();

// ✅ CORRECT IMPORT
const { upload, convertToWebp } = require("../middlewares/upload");

const {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonial.controller");

// CREATE
router.post(
  "/",
  upload.single("image"),     // multer
  convertToWebp,              // sharp convert
  createTestimonial
);

// GET ALL
router.get("/", getTestimonials);

// GET ONE
router.get("/:id", getTestimonial);

// UPDATE
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  updateTestimonial
);

// DELETE
router.delete("/:id", deleteTestimonial);

module.exports = router;