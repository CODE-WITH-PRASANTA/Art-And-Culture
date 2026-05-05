const express = require("express");
const router = express.Router();

const {
  createPooja,
  getAllPooja,
  getSinglePooja,
  updatePooja,
  deletePooja,
} = require("../controllers/pooja.controller");

const multer = require("multer");

/* ================= MULTER ================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ================= ROUTES ================= */

router.post("/create", upload.single("image"), createPooja);

router.get("/all", getAllPooja);

router.get("/:id", getSinglePooja);

router.put("/update/:id", upload.single("image"), updatePooja);

router.delete("/delete/:id", deletePooja);

module.exports = router;