const Blog = require("../models/blog.model");

/* CREATE */
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      ...req.body,
      image: req.file ? req.file.path : "",
    });

    await blog.save();

    res.status(201).json({
      success: true,
      message: "Blog Created",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* GET ALL */
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* GET ONE */
exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: "Not Found" });

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* UPDATE */
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(req.file && { image: req.file.path }),
      },
      { new: true }
    );

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* DELETE */
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};