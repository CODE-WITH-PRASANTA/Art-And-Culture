import React, { useState } from "react";
import "./Blog.css";
import { Editor } from "@tinymce/tinymce-react";

const Blog = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const [blogData, setBlogData] = useState({
    title: "",
    quote: "",
    category: "",
    author: "",
    designation: "",
    aboutAuthor: "",
    details: "",
    blogType: "Trending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleEditorChange = (content) => {
    setBlogData({
      ...blogData,
      details: content,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(blogData);
    alert("Blog Published Successfully");
  };

  return (
    <div className="blogadmin">
      <form className="blogadmin-form" onSubmit={handleSubmit}>

        {/* LEFT */}
        <div className="blogadmin-left">

          {/* TITLE */}
          <div className="blogadmin-card">
            <label>Blog Title</label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              placeholder="Enter Blog Title"
              required
            />
          </div>

          {/* QUOTE */}
          <div className="blogadmin-card">
            <label>Short Quotes</label>
            <textarea
              rows="4"
              name="quote"
              value={blogData.quote}
              onChange={handleChange}
              placeholder="Write attractive blog quote..."
              required
            />
          </div>

          {/* ✅ REAL TINYMCE EDITOR */}
          <div className="blogadmin-card">
            <h3 className="editor-title">Blog Details</h3>

            <Editor
              apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
              value={blogData.details}
              onEditorChange={handleEditorChange}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | \
                   alignleft aligncenter alignright alignjustify | \
                   bullist numlist outdent indent | link image | removeformat",
                content_style:
                  "body { font-family:Inter,sans-serif; font-size:14px }",
              }}
            />
          </div>

        </div>

        {/* RIGHT */}
        <div className="blogadmin-right">

          {/* IMAGE */}
          <div className="blogadmin-card">
            <label>Upload Blog Photo</label>

            <div className="blogadmin-upload-box">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />

              {previewImage ? (
                <img
                  src={previewImage}
                  alt="preview"
                  className="blogadmin-preview"
                />
              ) : (
                <div className="blogadmin-upload-content">
                  <div className="blogadmin-upload-icon">📷</div>
                  <h4>Upload Blog Image</h4>
                  <p>Drag & Drop or Click</p>
                </div>
              )}
            </div>
          </div>

          {/* CATEGORY */}
          <div className="blogadmin-card">
            <label>Choose Category</label>
            <select
              name="category"
              value={blogData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Art">Art</option>
              <option value="Culture">Culture</option>
              <option value="Festival">Festival</option>
              <option value="Tradition">Tradition</option>
              <option value="Handicraft">Handicraft</option>
            </select>
          </div>

          {/* AUTHOR */}
          <div className="blogadmin-card">
            <label>Author Name</label>
            <input
              type="text"
              name="author"
              value={blogData.author}
              onChange={handleChange}
              required
            />
          </div>

          {/* DESIGNATION */}
          <div className="blogadmin-card">
            <label>Author Designation</label>
            <input
              type="text"
              name="designation"
              value={blogData.designation}
              onChange={handleChange}
              required
            />
          </div>

          {/* ABOUT AUTHOR */}
          <div className="blogadmin-card">
            <label>About Author</label>
            <textarea
              rows="5"
              name="aboutAuthor"
              value={blogData.aboutAuthor}
              onChange={handleChange}
              required
            />
          </div>

          {/* TYPE */}
          <div className="blogadmin-card">
            <label>Blog Type</label>

            <div className="blogadmin-type-wrapper">
              <label className="blogadmin-type-card">
                <input
                  type="radio"
                  name="blogType"
                  value="Trending"
                  checked={blogData.blogType === "Trending"}
                  onChange={handleChange}
                />
                <span>🔥 Trending</span>
              </label>

              <label className="blogadmin-type-card">
                <input
                  type="radio"
                  name="blogType"
                  value="Normal"
                  checked={blogData.blogType === "Normal"}
                  onChange={handleChange}
                />
                <span>📝 Normal</span>
              </label>
            </div>
          </div>

          <button className="blogadmin-submit-btn">
            Publish Blog
          </button>

        </div>
      </form>
    </div>
  );
};

export default Blog;