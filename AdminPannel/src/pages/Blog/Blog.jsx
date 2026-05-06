import React, { useState, useEffect } from "react";
import "./Blog.css";
import { Editor } from "@tinymce/tinymce-react";
import API from "../../api/axios"; // ✅ use centralized axios

const Blog = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

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

  // 🧠 HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🧠 HANDLE EDITOR
  const handleEditorChange = (content) => {
    setBlogData((prev) => ({
      ...prev,
      details: content,
    }));
  };

  // 🖼 IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // 🧹 FIX MEMORY LEAK
  useEffect(() => {
    return () => {
      if (previewImage?.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  /* 🚀 SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      // append all fields
      Object.keys(blogData).forEach((key) => {
        formData.append(key, blogData[key]);
      });

      // append image
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await API.post("/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Blog Published Successfully");
      console.log(res.data);

      // 🔄 RESET
      setBlogData({
        title: "",
        quote: "",
        category: "",
        author: "",
        designation: "",
        aboutAuthor: "",
        details: "",
        blogType: "Trending",
      });

      setPreviewImage(null);
      setImageFile(null);

    } catch (error) {
      console.error("BLOG ERROR:", error);
      alert("❌ Error publishing blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blogadmin">
      <form
        className="blogadmin-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {/* LEFT */}
        <div className="blogadmin-left">

          <div className="blogadmin-card">
            <label>Blog Title</label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="blogadmin-card">
            <label>Short Quotes</label>
            <textarea
              rows="4"
              name="quote"
              value={blogData.quote}
              onChange={handleChange}
              required
            />
          </div>

          <div className="blogadmin-card">
            <h3>Blog Details</h3>

            <Editor
              apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
              value={blogData.details}
              onEditorChange={handleEditorChange}
              init={{
                height: 400,
                menubar: false,
              }}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="blogadmin-right">

          <div className="blogadmin-card">
            <label>Upload Blog Photo</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />

            {previewImage && (
              <img
                src={previewImage}
                alt="preview"
                className="blogadmin-preview"
              />
            )}
          </div>

          <div className="blogadmin-card">
            <label>Category</label>
            <select
              name="category"
              value={blogData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Art">Art</option>
              <option value="Culture">Culture</option>
              <option value="Festival">Festival</option>
              <option value="Tradition">Tradition</option>
            </select>
          </div>

          <div className="blogadmin-card">
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={blogData.author}
              onChange={handleChange}
            />
          </div>

          <div className="blogadmin-card">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={blogData.designation}
              onChange={handleChange}
            />
          </div>

          <div className="blogadmin-card">
            <label>About Author</label>
            <textarea
              name="aboutAuthor"
              value={blogData.aboutAuthor}
              onChange={handleChange}
            />
          </div>

          <div className="blogadmin-card">
            <label>Blog Type</label>

            <label>
              <input
                type="radio"
                name="blogType"
                value="Trending"
                checked={blogData.blogType === "Trending"}
                onChange={handleChange}
              />
              Trending
            </label>

            <label>
              <input
                type="radio"
                name="blogType"
                value="Normal"
                checked={blogData.blogType === "Normal"}
                onChange={handleChange}
              />
              Normal
            </label>
          </div>

          <button className="blogadmin-submit-btn" disabled={loading}>
            {loading ? "Publishing..." : "Publish Blog"}
          </button>

        </div>
      </form>
    </div>
  );
};

export default Blog;