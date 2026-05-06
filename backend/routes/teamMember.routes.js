const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createMember,
  getMembers,
  deleteMember,
  updateMember,
} = require("../controllers/teamMember.controller");

// Upload config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ROUTES
router.post("/", upload.single("image"), createMember);
router.get("/", getMembers);
router.delete("/:id", deleteMember);
router.put("/:id", upload.single("image"), updateMember);

module.exports = router;