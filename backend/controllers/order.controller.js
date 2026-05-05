const Order = require("../models/order.model");

/* ================= CREATE ================= */
const Order = require("../models/order.model");

exports.createOrder = async (req, res) => {
  try {
    const data = { ...req.body };

    // IMAGE
    if (req.file) {
      data.image = req.file.filename;
    }

    // NUMBER FIX
    data.price = data.price ? Number(data.price) : 0;
    data.salePrice = data.salePrice ? Number(data.salePrice) : 0;
    data.stock = data.stock ? Number(data.stock) : 0;

    // BOOLEAN FIX
    data.wishlist = data.wishlist === "true";
    data.compare = data.compare === "true";
    data.saleBadge = data.saleBadge === "true";

    // TAGS FIX
    if (data.tags) {
      data.tags = data.tags.split(",");
    }

    // 🔥 UNIQUE SLUG FIX (IMPORTANT)
    if (!data.slug && data.name) {
      data.slug =
        data.name.toLowerCase().replace(/\s+/g, "-") +
        "-" +
        Date.now();
    }

    const newOrder = await Order.create(data);

    res.status(201).json({
      success: true,
      data: newOrder,
    });

  } catch (error) {
    console.error("🔥 ERROR:", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};
/* ================= UPDATE ================= */
exports.updateOrder = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = req.file.filename;
    }

    data.price = data.price ? Number(data.price) : 0;
    data.salePrice = data.salePrice ? Number(data.salePrice) : 0;
    data.stock = data.stock ? Number(data.stock) : 0;

    data.wishlist = data.wishlist === "true";
    data.compare = data.compare === "true";
    data.saleBadge = data.saleBadge === "true";

    if (data.tags) {
      data.tags = data.tags.split(",");
    }

    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updated });
  } catch (error) {
    console.error("🔥 UPDATE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ONE ================= */
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};