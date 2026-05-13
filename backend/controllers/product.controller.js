const Product = require("../models/product.model");

/* ================= CREATE PRODUCT ================= */
exports.createProduct = async (req, res) => {

  try {

    let sizes = {};
    let faqs = [];
    let weightDetails = {};
    let quantityDiscounts = [];

    /* ================= PARSE JSON ================= */

    try {

      sizes = req.body.sizes
        ? JSON.parse(req.body.sizes)
        : {};

    } catch (err) {

      console.log("Sizes Parse Error");

    }

    try {

      faqs = req.body.faqs
        ? JSON.parse(req.body.faqs)
        : [];

    } catch (err) {

      console.log("FAQ Parse Error");

    }

    try {

      weightDetails =
        req.body.weightDetails
          ? JSON.parse(
              req.body.weightDetails
            )
          : {};

    } catch (err) {

      console.log(
        "Weight Details Parse Error"
      );

    }

    try {

      quantityDiscounts =
        req.body.quantityDiscounts
          ? JSON.parse(
              req.body.quantityDiscounts
            )
          : [];

    } catch (err) {

      console.log(
        "Quantity Discounts Parse Error"
      );

    }

    /* ================= CREATE PRODUCT ================= */

    const newProduct = new Product({

      title: req.body.title || "",

      use: req.body.use || "",

      rating:
        Number(req.body.rating) || 0,

      stock:
        Number(req.body.stock) || 0,

      shipping:
        req.body.shipping || "",

      categoryType:
        req.body.categoryType ||
        "Normal",

      helpline:
        req.body.helpline || "",

      price:
        Number(req.body.price) || 0,

      discount:
        Number(req.body.discount) || 0,

      sku: req.body.sku || "",

      expressDelivery:
        req.body.expressDelivery || "",

      indiaDelivery:
        req.body.indiaDelivery || "",

      aboutProduct:
        req.body.aboutProduct || "",

      productMaterial:
        req.body.productMaterial || "",

      sizes,

      weightDetails,

      quantityDiscounts,

      faqs,

      images:
        req.files &&
        req.files.length > 0
          ? req.files.map(
              (file) =>
                `/uploads/products/${file.filename}`
            )
          : [],

      status: "Published",
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message:
        "Product created successfully",
      data: newProduct,
    });

  } catch (err) {

    console.error(
      "❌ CREATE PRODUCT ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Failed to create product",
    });

  }
};

/* ================= GET ALL PRODUCTS ================= */
exports.getProducts = async (req, res) => {

  try {

    const products = await Product.find()
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: products,
    });

  } catch (err) {

    console.error(
      "❌ GET PRODUCTS ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Failed to fetch products",
    });

  }
};

/* ================= GET SINGLE PRODUCT ================= */
exports.getSingleProduct = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    }

    res.status(200).json({
      success: true,
      data: product,
    });

  } catch (err) {

    console.error(
      "❌ SINGLE PRODUCT ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Failed to fetch product",
    });

  }
};

/* ================= UPDATE PRODUCT ================= */
exports.updateProduct = async (
  req,
  res
) => {

  try {

    let sizes = {};
    let faqs = [];
    let weightDetails = {};
    let quantityDiscounts = [];

    /* ================= PARSE JSON ================= */

    try {

      sizes = req.body.sizes
        ? JSON.parse(req.body.sizes)
        : {};

    } catch (err) {

      console.log("Sizes Parse Error");

    }

    try {

      faqs = req.body.faqs
        ? JSON.parse(req.body.faqs)
        : [];

    } catch (err) {

      console.log("FAQ Parse Error");

    }

    try {

      weightDetails =
        req.body.weightDetails
          ? JSON.parse(
              req.body.weightDetails
            )
          : {};

    } catch (err) {

      console.log(
        "Weight Details Parse Error"
      );

    }

    try {

      quantityDiscounts =
        req.body.quantityDiscounts
          ? JSON.parse(
              req.body.quantityDiscounts
            )
          : [];

    } catch (err) {

      console.log(
        "Quantity Discounts Parse Error"
      );

    }

    /* ================= FIND PRODUCT ================= */

    const existingProduct =
      await Product.findById(
        req.params.id
      );

    if (!existingProduct) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    }

    /* ================= IMAGE UPDATE ================= */

    const newImages =
      req.files &&
      req.files.length > 0
        ? req.files.map(
            (file) =>
              `/uploads/products/${file.filename}`
          )
        : [];

    const updatedImages =
      newImages.length > 0
        ? newImages
        : existingProduct.images;

    /* ================= UPDATE ================= */

    const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,

        {
          title:
            req.body.title || "",

          use:
            req.body.use || "",

          rating:
            Number(req.body.rating) ||
            0,

          stock:
            Number(req.body.stock) || 0,

          shipping:
            req.body.shipping || "",

          categoryType:
            req.body.categoryType ||
            "Normal",

          helpline:
            req.body.helpline || "",

          price:
            Number(req.body.price) || 0,

          discount:
            Number(req.body.discount) ||
            0,

          sku:
            req.body.sku || "",

          expressDelivery:
            req.body.expressDelivery ||
            "",

          indiaDelivery:
            req.body.indiaDelivery ||
            "",

          aboutProduct:
            req.body.aboutProduct ||
            "",

          productMaterial:
            req.body.productMaterial ||
            "",

          sizes,

          weightDetails,

          quantityDiscounts,

          faqs,

          images: updatedImages,
        },

        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message:
        "Product updated successfully",
      data: updatedProduct,
    });

  } catch (err) {

    console.error(
      "❌ UPDATE PRODUCT ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Failed to update product",
    });

  }
};

/* ================= DELETE PRODUCT ================= */
exports.deleteProduct = async (
  req,
  res
) => {

  try {

    const deletedProduct =
      await Product.findByIdAndDelete(
        req.params.id
      );

    if (!deletedProduct) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    }

    res.status(200).json({
      success: true,
      message:
        "Product deleted successfully",
    });

  } catch (err) {

    console.error(
      "❌ DELETE PRODUCT ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Failed to delete product",
    });

  }
};

/* ================= TOGGLE STATUS ================= */
exports.toggleStatus = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    }

    product.status =
      product.status === "Published"
        ? "Unpublished"
        : "Published";

    await product.save();

    res.status(200).json({
      success: true,
      message:
        "Product status updated",
      data: product,
    });

  } catch (err) {

    console.error(
      "❌ TOGGLE STATUS ERROR:",
      err
    );

    res.status(500).json({
      success: false,
      message:
        err.message ||
        "Failed to update status",
    });

  }
};