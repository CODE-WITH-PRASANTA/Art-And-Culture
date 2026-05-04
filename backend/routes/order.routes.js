const express = require("express");
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

/* ================= ROUTES ================= */

// CREATE
router.post("/create", createOrder);

// READ
router.get("/", getAllOrders);
router.get("/:id", getOrderById);

// UPDATE
router.put("/update/:id", updateOrder);

// DELETE
router.delete("/delete/:id", deleteOrder);

module.exports = router;