const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  toggleStatus,
} = require("../controllers/product.controller");

const {
  upload,
  convertToWebp,
} = require("../middlewares/upload");

/* ================= CREATE PRODUCT ================= */
router.post(
  "/",
  upload.array("images", 5),
  convertToWebp,
  createProduct
);

/* ================= GET ALL PRODUCTS ================= */
router.get("/", getProducts);

/* ================= TOGGLE STATUS ================= */
router.put("/toggle/:id", toggleStatus);

/* ================= GET SINGLE PRODUCT ================= */
router.get("/:id", getSingleProduct);

/* ================= UPDATE PRODUCT ================= */
router.put(
  "/:id",
  upload.array("images", 5),
  convertToWebp,
  updateProduct
);

/* ================= DELETE PRODUCT ================= */
router.delete("/:id", deleteProduct);

module.exports = router;