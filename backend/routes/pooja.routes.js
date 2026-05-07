const express = require("express");

const router = express.Router();

const multer = require("multer");

const path = require("path");

const fs = require("fs");

const {
  createPooja,
  getAllPooja,
  getSinglePooja,
  updatePooja,
  deletePooja,
} = require("../controllers/pooja.controller");

/* =========================================================
   CREATE UPLOAD FOLDER
========================================================= */

const uploadDir = path.join(
  __dirname,
  "../uploads/pooja"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}

/* =========================================================
   MULTER STORAGE
========================================================= */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname)
    );
  },
});

/* =========================================================
   FILE FILTER
========================================================= */

const fileFilter = (req, file, cb) => {
  const allowedTypes =
    /jpg|jpeg|png|webp/;

  const extname = allowedTypes.test(
    path
      .extname(file.originalname)
      .toLowerCase()
  );

  const mimetype = allowedTypes.test(
    file.mimetype
  );

  if (extname && mimetype) {
    return cb(null, true);
  }

  cb(
    new Error(
      "Only JPG, JPEG, PNG, WEBP allowed"
    )
  );
};

/* =========================================================
   MULTER
========================================================= */

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

/* =========================================================
   ROUTES
========================================================= */

// CREATE
router.post(
  "/create",
  upload.single("image"),
  createPooja
);

// GET ALL
router.get("/", getAllPooja);

// GET SINGLE
router.get("/:id", getSinglePooja);

// UPDATE
router.put(
  "/update/:id",
  upload.single("image"),
  updatePooja
);

// DELETE
router.delete(
  "/delete/:id",
  deletePooja
);

module.exports = router;