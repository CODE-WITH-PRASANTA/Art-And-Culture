const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

// CREATE
router.post("/", upload.single("image"), createBlog);

// READ
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);

// UPDATE
router.put("/:id", upload.single("image"), updateBlog);

// DELETE
router.delete("/:id", deleteBlog);

module.exports = router;