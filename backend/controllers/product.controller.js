const Product = require("../models/product.model");

/* ================= CREATE PRODUCT ================= */
exports.createProduct = async (req, res) => {
  try {
    let sizes = {};
    let faqs = [];

    try {
      sizes = req.body.sizes ? JSON.parse(req.body.sizes) : {};
    } catch {}

    try {
      faqs = req.body.faqs ? JSON.parse(req.body.faqs) : [];
    } catch {}

    const newProduct = new Product({
      ...req.body,
      price: Number(req.body.price) || 0,
      discount: Number(req.body.discount) || 0,
      rating: Number(req.body.rating) || 0,
      stock: Number(req.body.stock) || 0,
      sizes,
      faqs,
      images: req.body.images || [],
      status: "Published",
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });

  } catch (err) {
    console.error("❌ CREATE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= GET ALL PRODUCTS ================= */
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: products,
    });

  } catch (err) {
    console.error("❌ GET ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= DELETE PRODUCT ================= */
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product deleted",
    });

  } catch (err) {
    console.error("❌ DELETE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= UPDATE PRODUCT ================= */
exports.updateProduct = async (req, res) => {
  try {
    let sizes = {};
    let faqs = [];

    try {
      sizes = req.body.sizes ? JSON.parse(req.body.sizes) : {};
    } catch {}

    try {
      faqs = req.body.faqs ? JSON.parse(req.body.faqs) : [];
    } catch {}

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        sizes,
        faqs,
        images: req.body.images || [],
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Product updated",
      data: updated,
    });

  } catch (err) {
    console.error("❌ UPDATE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= TOGGLE STATUS ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.status =
      product.status === "Published" ? "Unpublished" : "Published";

    await product.save();

    res.json({
      success: true,
      message: "Status updated",
      data: product,
    });

  } catch (err) {
    console.error("❌ TOGGLE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};