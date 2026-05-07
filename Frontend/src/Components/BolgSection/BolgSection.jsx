import React, { useState, useEffect } from "react";
import "./BolgSection.css";
import API, { BASE_URL } from "../../api/axios";

const BolgSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  // ✅ FIX IMAGE PATH
  const getImageUrl = (img) => {
    if (!img) return "/no-image.png";
    if (img.startsWith("http")) return img;
    return `${BASE_URL}/${img.replace(/\\/g, "/").replace(/^\/+/, "")}`;
  };

  // ✅ CLEAN HTML TEXT (REMOVE <p>, <div>, &nbsp;, etc.)
  const stripHtml = (html) => {
    if (!html) return "";

    let text = html.replace(/<[^>]+>/g, ""); // remove tags

    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");

    text = text.replace(/\s+/g, " ").trim(); // clean spaces

    return text;
  };

  return (
    <div className="blog-container">
      <h2 className="blog-heading">Latest Blogs</h2>

      {loading && <p className="blog-msg">Loading blogs...</p>}
      {!loading && error && <p className="blog-error">{error}</p>}
      {!loading && !error && blogs.length === 0 && (
        <p className="blog-msg">No Blogs Found</p>
      )}

      <div className="blog-grid">
        {blogs.slice(0, visibleCount).map((blog, index) => {
          const cleanText = stripHtml(blog.details || "");
          const previewText = cleanText.slice(0, 120);

          return (
            <div className="blog-card" key={blog._id || index}>
              
              {/* IMAGE */}
              <div className="blog-image">
                <img
                  src={getImageUrl(blog.image)}
                  alt={blog.title || "blog"}
                  onError={(e) => (e.target.src = "/no-image.png")}
                />
              </div>

              <div className="blog-content">
                <p className="blog-date">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toDateString()
                    : "No Date"}
                </p>

                <h3 className="blog-title">
                  {blog.title || "No Title"}
                </h3>

                {/* ✅ CLEAN DESCRIPTION (NO HTML TAGS) */}
                <p className="blog-desc">
                  {previewText || "No content"}
                  {cleanText.length > 120 && "..."}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {blogs.length > visibleCount && (
        <div className="load-more-wrap">
          <button
            className="load-btn"
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BolgSection;