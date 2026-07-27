const ShopView = require("../models/shopview.model");

// Remove HTML tags from TinyMCE content
const cleanHtml = (text) => {
    if (!text) return "";
    return text.replace(/<[^>]*>/g, "").trim();
};

/* =========================================================
   CREATE PRODUCT
========================================================= */
const createShopView = async (req, res) => {
    try {

        const images = req.files
            ? req.files.map(file => file.filename)
            : [];

        const {
            productTitle,
            oldPrice,
            newPrice,
            quantity,
            imageRatio,
            location,
            deliveryTime,
            guarantee,
            warranty,
            mainMaterial,
            productDetails,
            aboutProduct,
            sizeManagement,
            faqs
        } = req.body;

        const discount =
            oldPrice && newPrice
                ? Math.round(
                    ((oldPrice - newPrice) / oldPrice) * 100
                )
                : 0;

        const shop = await ShopView.create({
            images,
            productTitle,
            oldPrice,
            newPrice,
            discount,
            quantity,
            imageRatio,
            location,
            deliveryTime,
            guarantee,
            warranty,
            mainMaterial,

            productDetails: cleanHtml(productDetails),
            aboutProduct: cleanHtml(aboutProduct),
            sizeManagement: cleanHtml(sizeManagement),

            faqs:
                typeof faqs === "string"
                    ? JSON.parse(faqs)
                    : Array.isArray(faqs)
                    ? faqs
                    : []
        });

        res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            data: shop
        });

    } catch (error) {
        console.error("CREATE SHOPVIEW ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================================================
   GET ALL PRODUCTS
========================================================= */
const getAllShopView = async (req, res) => {
    try {

        const data = await ShopView.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: data.length,
            data
        });

    } catch (error) {
        console.error("GET ALL ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================================================
   GET SINGLE PRODUCT
========================================================= */
const getSingleShopView = async (req, res) => {
    try {

        const data = await ShopView.findById(
            req.params.id
        );

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        console.error("GET SINGLE ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================================================
   UPDATE PRODUCT
========================================================= */
const updateShopView = async (req, res) => {
    try {

        const updateData = { ...req.body };

        // Remove HTML tags
        updateData.productDetails = cleanHtml(
            updateData.productDetails
        );

        updateData.aboutProduct = cleanHtml(
            updateData.aboutProduct
        );

        updateData.sizeManagement = cleanHtml(
            updateData.sizeManagement
        );

        // Update images if uploaded
        if (req.files && req.files.length > 0) {
            updateData.images = req.files.map(
                file => file.filename
            );
        }

        // Recalculate discount
        if (
            updateData.oldPrice &&
            updateData.newPrice
        ) {
            updateData.discount = Math.round(
                (
                    (updateData.oldPrice -
                        updateData.newPrice) /
                    updateData.oldPrice
                ) * 100
            );
        }

        // FAQ parsing
        if (updateData.faqs) {
            updateData.faqs =
                typeof updateData.faqs === "string"
                    ? JSON.parse(updateData.faqs)
                    : updateData.faqs;
        }

        const updated =
            await ShopView.findByIdAndUpdate(
                req.params.id,
                updateData,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data: updated
        });

    } catch (error) {
        console.error(
            "UPDATE SHOPVIEW ERROR:",
            error
        );

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================================================
   DELETE PRODUCT
========================================================= */
const deleteShopView = async (req, res) => {
    try {

        const deleted =
            await ShopView.findByIdAndDelete(
                req.params.id
            );

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });

    } catch (error) {
        console.error(
            "DELETE SHOPVIEW ERROR:",
            error
        );

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/* =========================================================
   PUBLISH / UNPUBLISH
========================================================= */
const togglePublish = async (req, res) => {
    try {

        const product =
            await ShopView.findById(
                req.params.id
            );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        product.isPublished =
            !product.isPublished;

        await product.save();

        res.status(200).json({
            success: true,
            message: product.isPublished
                ? "Product Published"
                : "Product Unpublished",
            data: product
        });

    } catch (error) {
        console.error(
            "PUBLISH ERROR:",
            error
        );

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createShopView,
    getAllShopView,
    getSingleShopView,
    updateShopView,
    deleteShopView,
    togglePublish
};