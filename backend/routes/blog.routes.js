const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middlewares/upload");

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

/* CREATE */
router.post("/", upload.single("image"), convertToWebp, createBlog);

/* GET ALL */
router.get("/", getAllBlogs);

/* GET ONE */
router.get("/:id", getSingleBlog);

/* UPDATE */
router.put("/:id", upload.single("image"), convertToWebp, updateBlog);

/* DELETE */
router.delete("/:id", deleteBlog);

module.exports = router;