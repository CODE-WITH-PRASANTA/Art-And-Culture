import React, { useState, useEffect } from "react";
import "./BlogView.css";
import API, { BASE_URL } from "../../api/axios";
import { useNavigate } from "react-router-dom";

import {
  MoreVertical,
  Trash2,
  CalendarDays,
  User,
  Pencil,
  Save,
  X,
  Eye,
} from "lucide-react";

const BlogView = () => {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [editId, setEditId] = useState(null);

  const [editData, setEditData] = useState({
    title: "",
    category: "",
    details: "",
  });

  const [viewBlog, setViewBlog] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blog");

      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else if (Array.isArray(res.data.data)) {
        setBlogs(res.data.data);
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const close = () => setActiveMenu(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const toggleMenu = (e, id) => {
    e.stopPropagation();
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      setLoadingId(id);
      await API.delete(`/blog/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch {
      alert("Delete failed");
    } finally {
      setLoadingId(null);
      setActiveMenu(null);
    }
  };

  const handleTogglePublish = async (blog) => {
    try {
      setLoadingId(blog._id);

      const newStatus =
        blog.status === "Published" ? "Draft" : "Published";

      await API.put(`/blog/${blog._id}`, {
        status: newStatus,
      });

      setBlogs((prev) =>
        prev.map((b) =>
          b._id === blog._id ? { ...b, status: newStatus } : b
        )
      );
    } catch {
      alert("Update failed");
    } finally {
      setLoadingId(null);
      setActiveMenu(null);
    }
  };

  const handleView = (e, blog) => {
    e.stopPropagation();
    setViewBlog(blog);
  };

  const handleEditStart = (blog) => {
    navigate(`/blog/post/${blog._id}`);
  };

  const handleSaveEdit = async () => {
    try {
      setLoadingId(editId);

      await API.put(`/blog/${editId}`, editData);

      setBlogs((prev) =>
        prev.map((b) =>
          b._id === editId ? { ...b, ...editData } : b
        )
      );

      setEditId(null);
    } catch {
      alert("Update failed");
    } finally {
      setLoadingId(null);
    }
  };

  const getImageUrl = (img) => {
    if (!img) return "/no-image.png";
    if (img.startsWith("http")) return img;

    let path = img.replace(/\\/g, "/").replace(/^\/+/, "");
    if (!path.startsWith("uploads")) {
      path = `uploads/${path}`;
    }

    return `${BASE_URL}/${path}`;
  };

  const stripHtml = (html) =>
    html ? html.replace(/<[^>]+>/g, "") : "";

  return (

    <div className="blogview blogview-wrapper">

      <div className="blogview-grid">

        {blogs.map((blog) => {

          const isEditing = editId === blog._id;
          const cleanText = stripHtml(blog.details);
          const preview = cleanText.slice(0, 120);

          return (

            <div className="blogview-card" key={blog._id}>

              <div className="blogview-card-image">

                <img
                  src={getImageUrl(blog.image)}
                  alt=""
                  onError={(e) =>
                    (e.target.src = "/no-image.png")
                  }
                />

                <span className={`blogview-status ${blog.status === "Published" ? "published" : "draft"}`}>
                  {blog.status}
                </span>

                <button
                  className="blogview-menu-btn"
                  onClick={(e) => toggleMenu(e, blog._id)}
                >
                  <MoreVertical size={18} />
                </button>

                {activeMenu === blog._id && (
                  <div
                    className="blogview-dropdown"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button onClick={(e) => handleView(e, blog)}>
                      <Eye size={16} /> View
                    </button>

                    <button onClick={() => handleEditStart(blog)}>
                      <Pencil size={16} /> Edit
                    </button>

                    <button onClick={() => handleTogglePublish(blog)}>
                      {blog.status === "Published" ? "Unpublish" : "Publish"}
                    </button>

                    <button className="delete" onClick={() => handleDelete(blog._id)}>
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                )}

              </div>

              <div className="blogview-card-content">

                <span className="blogview-category">
                  {blog.category || "General"}
                </span>

                <h3>{blog.title}</h3>

                <p>
                  {preview}
                  {cleanText.length > 120 && "..."}
                </p>

                <div className="blogview-card-footer">

                  <div>
                    <User size={14} />
                    <span> {blog.author || "Admin"}</span>
                  </div>

                  <div>
                    <CalendarDays size={14} />
                    <span>
                      {blog.createdAt
                        ? new Date(blog.createdAt).toDateString()
                        : "No Date"}
                    </span>
                  </div>

                </div>

              </div>

            </div>

          );
        })}

      </div>

      {viewBlog && (
        <div className="blogview-modal">
          <div className="blogview-modal-content">

            <button className="modal-close" onClick={() => setViewBlog(null)}>
              <X size={20} />
            </button>

            <img src={getImageUrl(viewBlog.image)} alt="" />

            <h2>{viewBlog.title}</h2>

            <p>{stripHtml(viewBlog.details)}</p>

          </div>
        </div>
      )}

    </div>
  );
};

export default BlogView;