import React, { useState, useEffect } from "react";
import "./Blog.css";
import { Editor } from "@tinymce/tinymce-react";
import API from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (content) => {
    setBlogData((prev) => ({
      ...prev,
      details: content,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        if (!id) return;

        const res = await API.get(`/blog/${id}`);
        const blog = res.data.data;

        if (!blog) {
          alert("Blog not found");
          return;
        }

        setBlogData({
          title: blog.title || "",
          quote: blog.quote || "",
          category: blog.category || "",
          author: blog.author || "",
          designation: blog.designation || "",
          aboutAuthor: blog.aboutAuthor || "",
          details: blog.details || "",
          blogType: blog.blogType || "Trending",
        });

        if (blog.image) {
          const imagePath = blog.image
            .replace(/\\/g, "/")
            .replace(/^\/+/, "");
          setPreviewImage(`http://localhost:5000/${imagePath}`);
        }
      } catch (error) {
        console.error(error);
        alert("Failed to fetch blog");
      }
    };

    fetchSingleBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(blogData).forEach((key) => {
        formData.append(key, blogData[key]);
      });

      if (imageFile) {
        formData.append("image", imageFile);
      }

      let res;

      if (isEditMode) {
        res = await API.put(`/blog/${id}`, formData);
        alert("✅ Blog Updated Successfully");
      } else {
        res = await API.post("/blog", formData);
        alert("✅ Blog Published Successfully");
      }

      navigate("/blog/view");
    } catch (error) {
      console.error(error);
      alert("❌ Error saving blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blogadmin blogadmin-wrapper">
      <form className="blogadmin-form" onSubmit={handleSubmit}>

        {/* LEFT */}
        <div className="blogadmin-left">

          <div className="blogadmin-card blogadmin-field">
            <label>Blog Title</label>
            <input type="text" name="title" value={blogData.title} onChange={handleChange} required />
          </div>

          <div className="blogadmin-card blogadmin-field">
            <label>Short Quotes</label>
            <textarea rows="4" name="quote" value={blogData.quote} onChange={handleChange} required />
          </div>

          <div className="blogadmin-card blogadmin-editor">
            <h3 className="editor-title">Blog Details</h3>
            <Editor
              apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
              value={blogData.details}
              onEditorChange={handleEditorChange}
              init={{ height: 420, menubar: false }}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="blogadmin-right">

          <div className="blogadmin-card blogadmin-upload">
            <label>Upload Blog Photo</label>

            <div className="blogadmin-upload-box">
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {!previewImage && (
                <div className="blogadmin-upload-content">
                  <div className="blogadmin-upload-icon">📤</div>
                  <h4>Upload Image</h4>
                  <p>Click or drag image here</p>
                </div>
              )}
              {previewImage && (
                <img src={previewImage} alt="preview" className="blogadmin-preview" />
              )}
            </div>
          </div>

          <div className="blogadmin-card blogadmin-field">
            <label>Category</label>
            <select name="category" value={blogData.category} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Art">Art</option>
              <option value="Culture">Culture</option>
              <option value="Festival">Festival</option>
              <option value="Tradition">Tradition</option>
            </select>
          </div>

          <div className="blogadmin-card blogadmin-field">
            <label>Author</label>
            <input type="text" name="author" value={blogData.author} onChange={handleChange} />
          </div>

          <div className="blogadmin-card blogadmin-field">
            <label>Designation</label>
            <input type="text" name="designation" value={blogData.designation} onChange={handleChange} />
          </div>

          <div className="blogadmin-card blogadmin-field">
            <label>About Author</label>
            <textarea name="aboutAuthor" value={blogData.aboutAuthor} onChange={handleChange} />
          </div>

          <div className="blogadmin-card blogadmin-type">
            <label>Blog Type</label>

            <div className="blogadmin-type-wrapper">
              <label className="blogadmin-type-card">
                <input type="radio" name="blogType" value="Trending"
                  checked={blogData.blogType === "Trending"} onChange={handleChange} />
                <span>Trending</span>
              </label>

              <label className="blogadmin-type-card">
                <input type="radio" name="blogType" value="Normal"
                  checked={blogData.blogType === "Normal"} onChange={handleChange} />
                <span>Normal</span>
              </label>
            </div>
          </div>

          <button className="blogadmin-submit-btn" disabled={loading}>
            {loading
              ? isEditMode ? "Updating..." : "Publishing..."
              : isEditMode ? "Update Blog" : "Publish Blog"}
          </button>

        </div>
      </form>
    </div>
  );
};

export default Blog;