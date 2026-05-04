const Blog = require("../models/blog.model");

// CREATE BLOG
exports.createBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
      image: req.file ? req.file.filename : "",
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully",
      data: newBlog,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL BLOGS
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SINGLE BLOG
exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE BLOG
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(req.file && { image: req.file.filename }),
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Blog Updated",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE BLOG
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog Deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};