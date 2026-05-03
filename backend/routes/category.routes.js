const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

/* ================= ROUTES ================= */

// Create
router.post("/", createCategory);

// Get all
router.get("/", getCategories);

// Update
router.put("/:id", updateCategory);

// Delete
router.delete("/:id", deleteCategory);

module.exports = router;