import React, { useState, useEffect } from "react";
import "./BolgSection.css";
import API, { BASE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const BolgSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/blog");

        let data = [];

        if (Array.isArray(res.data)) data = res.data;
        else if (Array.isArray(res.data?.data)) data = res.data.data;
        else if (Array.isArray(res.data?.blogs)) data = res.data.blogs;

        setBlogs(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getImageUrl = (img) => {
    if (!img) return "/no-image.png";
    if (img.startsWith("http")) return img;
    return `${BASE_URL}/${img.replace(/\\/g, "/").replace(/^\/+/, "")}`;
  };

  const stripHtml = (html) => {
    if (!html) return "";

    let text = html.replace(/<[^>]+>/g, "");
    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");

    return text.replace(/\s+/g, " ").trim();
  };

  return (
    <div className="blog-container">

      {/* HEADER */}
      <div className="blog-header">
        <h2 className="blog-heading">Latest Blogs</h2>
        <p className="blog-subtitle">Discover stories, ideas and insights</p>
      </div>

      {/* STATES */}
      {loading && <div className="blog-msg">Loading amazing blogs...</div>}
      {!loading && error && <div className="blog-error">{error}</div>}
      {!loading && !error && blogs.length === 0 && (
        <div className="blog-msg">No Blogs Found</div>
      )}

      {/* GRID */}
      <div className="blog-grid">
        {blogs.slice(0, visibleCount).map((blog) => {
          const cleanText = stripHtml(blog.details || "");
          const previewText = cleanText.slice(0, 120);

          return (
            <div
              className="blog-card"
              key={blog._id}
              onClick={() => navigate(`/blog/${blog._id}`)}
            >

              {/* IMAGE */}
              <div className="blog-image">
                <img
                  src={getImageUrl(blog.image)}
                  alt={blog.title || "blog"}
                  onError={(e) => (e.target.src = "/no-image.png")}
                />

                <span className="blog-badge">
                  {blog.category || "Blog"}
                </span>
              </div>

              {/* CONTENT */}
              <div className="blog-content">

                <p className="blog-date">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toDateString()
                    : "No Date"}
                </p>

                <h3 className="blog-title">
                  {blog.title || "No Title"}
                </h3>

                <p className="blog-desc">
                  {previewText || "No content"}
                  {cleanText.length > 120 && "..."}
                </p>

                <button className="read-more-btn">
                  Read More →
                </button>

              </div>
            </div>
          );
        })}
      </div>

      {/* LOAD MORE */}
      {blogs.length > visibleCount && (
        <div className="load-more-wrap">
          <button
            className="load-btn"
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            Load More Stories
          </button>
        </div>
      )}
    </div>
  );
};

export default BolgSection;