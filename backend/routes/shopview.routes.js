const express = require("express");
const multer = require("multer");

const {
    createShopView,
    getAllShopView,
    getSingleShopView,
    updateShopView,
    deleteShopView,
    togglePublish
} = require("../controllers/shopview.controller");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/shopview");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

router.post("/create", upload.array("images", 20), createShopView);
router.get("/all", getAllShopView);
router.get("/:id", getSingleShopView);
router.put("/update/:id", upload.array("images", 20), updateShopView);
router.delete("/delete/:id", deleteShopView);
router.patch("/publish/:id", togglePublish);

module.exports = router;