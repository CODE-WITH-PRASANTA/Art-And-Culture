const express = require("express");

const router = express.Router();

const multer = require("multer");

const path = require("path");

const fs = require("fs");

const sharp = require("sharp");

const {
  createPooja,
  getAllPooja,
  getSinglePooja,
  updatePooja,
  deletePooja,
} = require("../controllers/pooja.controller");

/* =========================================================
   UPLOAD FOLDER
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
   MULTER MEMORY STORAGE
========================================================= */

const storage = multer.memoryStorage();

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
   WEBP CONVERT MIDDLEWARE
========================================================= */

const convertToWebp = async (
  req,
  res,
  next
) => {
  try {
    if (!req.files || req.files.length === 0) {
      return next();
    }

    const processedFiles = [];

    for (const file of req.files) {
      const fileName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        ".webp";

      const outputPath = path.join(
        uploadDir,
        fileName
      );

      await sharp(file.buffer)
        .resize({
          width: 1200,
          withoutEnlargement: true,
        })
        .webp({
          quality: 80,
        })
        .toFile(outputPath);

      processedFiles.push({
        filename: fileName,
        path: `/uploads/pooja/${fileName}`,
      });
    }

    req.convertedImages = processedFiles;

    next();
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Image conversion failed",
    });
  }
};

/* =========================================================
   ROUTES
========================================================= */

// CREATE
router.post(
  "/create",
  upload.array("images", 5),
  convertToWebp,
  createPooja
);

// GET ALL
router.get("/", getAllPooja);

// GET SINGLE
router.get("/:id", getSinglePooja);

// UPDATE
router.put(
  "/update/:id",
  upload.array("images", 5),
  convertToWebp,
  updatePooja
);

// DELETE
router.delete(
  "/delete/:id",
  deletePooja
);

module.exports = router;