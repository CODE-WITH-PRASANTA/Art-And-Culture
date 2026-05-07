const fs = require("fs");

const path = require("path");

const Pooja = require("../models/pooja.model");

/* =====================================================
   CREATE
===================================================== */

exports.createPooja = async (
  req,
  res
) => {
  try {
    console.log("BODY :", req.body);

    console.log("FILE :", req.file);

    const {
      title,
      category,
      price,
      oldPrice,
      stock,
      rating,
      description,
    } = req.body;

    /* IMAGE REQUIRED */

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const newPooja =
      await Pooja.create({
        title,
        category,
        price,
        oldPrice,
        stock,
        rating,
        description,

        image: `/uploads/pooja/${req.file.filename}`,
      });

    res.status(201).json({
      success: true,
      message:
        "Pooja Product Created",
      data: newPooja,
    });
  } catch (error) {
    console.log(
      "CREATE ERROR :",
      error
    );

    res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to create product",
    });
  }
};

/* =====================================================
   GET ALL
===================================================== */

exports.getAllPooja = async (
  req,
  res
) => {
  try {
    const products =
      await Pooja.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch products",
    });
  }
};

/* =====================================================
   GET SINGLE
===================================================== */

exports.getSinglePooja =
  async (req, res) => {
    try {
      const product =
        await Pooja.findById(
          req.params.id
        );

      if (!product) {
        return res.status(404).json({
          success: false,
          message:
            "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch product",
      });
    }
  };

/* =====================================================
   UPDATE
===================================================== */

exports.updatePooja = async (
  req,
  res
) => {
  try {
    const product =
      await Pooja.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        success: false,
        message:
          "Product not found",
      });
    }

    const {
      title,
      category,
      price,
      oldPrice,
      stock,
      rating,
      description,
    } = req.body;

    /* UPDATE IMAGE */

    if (req.file) {
      /* DELETE OLD IMAGE */

      if (product.image) {
        const oldImagePath =
          path.join(
            __dirname,
            "..",
            product.image
          );

        if (
          fs.existsSync(oldImagePath)
        ) {
          fs.unlinkSync(
            oldImagePath
          );
        }
      }

      product.image = `/uploads/pooja/${req.file.filename}`;
    }

    /* UPDATE DATA */

    product.title = title;
    product.category = category;
    product.price = price;
    product.oldPrice = oldPrice;
    product.stock = stock;
    product.rating = rating;
    product.description =
      description;

    await product.save();

    res.status(200).json({
      success: true,
      message:
        "Product Updated Successfully",
      data: product,
    });
  } catch (error) {
    console.log(
      "UPDATE ERROR :",
      error
    );

    res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to update product",
    });
  }
};

/* =====================================================
   DELETE
===================================================== */

exports.deletePooja = async (
  req,
  res
) => {
  try {
    const product =
      await Pooja.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        success: false,
        message:
          "Product not found",
      });
    }

    /* DELETE IMAGE */

    if (product.image) {
      const imagePath = path.join(
        __dirname,
        "..",
        product.image
      );

      if (
        fs.existsSync(imagePath)
      ) {
        fs.unlinkSync(imagePath);
      }
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(
      "DELETE ERROR :",
      error
    );

    res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to delete product",
    });
  }
};