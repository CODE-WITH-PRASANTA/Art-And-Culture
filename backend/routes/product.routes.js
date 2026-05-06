const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middlewares/upload");

const {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  toggleStatus,
} = require("../controllers/product.controller");

/* ================= ROUTES ================= */

// CREATE
router.post(
  "/",
  upload.array("images", 5),
  convertToWebp,
  createProduct
);

// GET ALL
router.get("/", getProducts);

// DELETE
router.delete("/:id", deleteProduct);

// UPDATE
router.put(
  "/:id",
  upload.array("images", 5),
  convertToWebp,
  updateProduct
);

// TOGGLE STATUS 🔥
router.put("/toggle/:id", toggleStatus);

module.exports = router;