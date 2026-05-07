const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

/* ================= MULTER ================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/\s+/g, "-");
    cb(null, Date.now() + "-" + cleanName);
  },
});

const upload = multer({ storage });

/* ================= ROUTES ================= */

// ✅ CREATE (WITH IMAGE)
router.post("/create", upload.single("image"), createOrder);

// READ
router.get("/", getAllOrders);
router.get("/:id", getOrderById);

// ✅ UPDATE (WITH IMAGE)
router.put("/update/:id", upload.single("image"), updateOrder);

// DELETE
router.delete("/delete/:id", deleteOrder);

module.exports = router;