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

  const [activeMenu, setActiveMenu] =
    useState(null);

  const [loadingId, setLoadingId] =
    useState(null);

  const [editId, setEditId] =
    useState(null);

  const [editData, setEditData] =
    useState({
      title: "",
      category: "",
      details: "",
    });

  const [viewBlog, setViewBlog] =
    useState(null);

  /* ================= FETCH BLOGS ================= */

  const fetchBlogs = async () => {

    try {

      const res = await API.get("/blog");

      if (Array.isArray(res.data)) {

        setBlogs(res.data);

      } else if (
        Array.isArray(res.data.data)
      ) {

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

  /* ================= CLOSE MENU ================= */

  useEffect(() => {

    const close = () =>
      setActiveMenu(null);

    document.addEventListener(
      "click",
      close
    );

    return () =>
      document.removeEventListener(
        "click",
        close
      );

  }, []);

  const toggleMenu = (e, id) => {

    e.stopPropagation();

    setActiveMenu((prev) =>
      prev === id ? null : id
    );
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {

    if (
      !window.confirm(
        "Delete this blog?"
      )
    )
      return;

    try {

      setLoadingId(id);

      await API.delete(`/blog/${id}`);

      setBlogs((prev) =>
        prev.filter(
          (b) => b._id !== id
        )
      );

    } catch {

      alert("Delete failed");

    } finally {

      setLoadingId(null);

      setActiveMenu(null);

    }

  };

  /* ================= PUBLISH ================= */

  const handleTogglePublish =
    async (blog) => {

      try {

        setLoadingId(blog._id);

        const newStatus =
          blog.status === "Published"
            ? "Draft"
            : "Published";

        await API.put(
          `/blog/${blog._id}`,
          {
            status: newStatus,
          }
        );

        setBlogs((prev) =>
          prev.map((b) =>
            b._id === blog._id
              ? {
                  ...b,
                  status: newStatus,
                }
              : b
          )
        );

      } catch {

        alert("Update failed");

      } finally {

        setLoadingId(null);

        setActiveMenu(null);

      }

    };

  /* ================= VIEW ================= */

  const handleView = (e, blog) => {

    e.stopPropagation();

    setViewBlog(blog);

  };

  /* ================= EDIT ================= */

  const handleEditStart = (blog) => {

    navigate(`/blog/post/${blog._id}`);

  };

  const handleSaveEdit = async () => {

    try {

      setLoadingId(editId);

      await API.put(
        `/blog/${editId}`,
        editData
      );

      setBlogs((prev) =>
        prev.map((b) =>
          b._id === editId
            ? {
                ...b,
                ...editData,
              }
            : b
        )
      );

      setEditId(null);

    } catch {

      alert("Update failed");

    } finally {

      setLoadingId(null);

    }

  };

  /* ================= IMAGE FIX ================= */

  const getImageUrl = (img) => {

    if (!img)
      return "/no-image.png";

    if (img.startsWith("http"))
      return img;

    let path = img
      .replace(/\\/g, "/")
      .replace(/^\/+/, "");

    if (!path.startsWith("uploads")) {

      path = `uploads/${path}`;

    }

    return `${BASE_URL}/${path}`;

  };

  /* ================= STRIP HTML ================= */

  const stripHtml = (html) =>
    html
      ? html.replace(/<[^>]+>/g, "")
      : "";

  return (

    <div className="blogview">

      {/* ================= GRID ================= */}

      <div className="blogview-grid">

        {blogs.map((blog) => {

          const isEditing =
            editId === blog._id;

          const cleanText =
            stripHtml(blog.details);

          const preview =
            cleanText.slice(0, 120);

          return (

            <div
              className="blogview-card"
              key={blog._id}
            >

              {/* IMAGE */}
              <div className="blogview-card-image">

                <img
                  src={getImageUrl(
                    blog.image
                  )}
                  alt=""
                  onError={(e) =>
                    (e.target.src =
                      "/no-image.png")
                  }
                />

                {/* STATUS */}
                <span
                  className={`blogview-status ${
                    blog.status ===
                    "Published"
                      ? "published"
                      : "draft"
                  }`}
                >
                  {blog.status}
                </span>

                {/* MENU BUTTON */}
                <button
                  className="blogview-menu-btn"
                  onClick={(e) =>
                    toggleMenu(
                      e,
                      blog._id
                    )
                  }
                >
                  <MoreVertical size={18} />
                </button>

                {/* DROPDOWN */}
                {activeMenu ===
                  blog._id && (

                  <div
                    className="blogview-dropdown"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >

                    <button
                      onClick={(e) =>
                        handleView(
                          e,
                          blog
                        )
                      }
                    >
                      <Eye size={16} />
                      View
                    </button>

                    <button
                      onClick={() =>
                        handleEditStart(
                          blog
                        )
                      }
                    >
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleTogglePublish(
                          blog
                        )
                      }
                    >

                      {blog.status ===
                      "Published"
                        ? "Unpublish"
                        : "Publish"}

                    </button>

                    <button
                      className="delete"
                      onClick={() =>
                        handleDelete(
                          blog._id
                        )
                      }
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                )}

              </div>

              {/* CONTENT */}
              <div className="blogview-card-content">

                {isEditing ? (

                  <>
                    <input
                      value={
                        editData.title
                      }
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          title:
                            e.target
                              .value,
                        })
                      }
                    />

                    <input
                      value={
                        editData.category
                      }
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          category:
                            e.target
                              .value,
                        })
                      }
                    />

                    <textarea
                      value={
                        editData.details
                      }
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          details:
                            e.target
                              .value,
                        })
                      }
                    />

                    <div className="edit-actions">

                      <button
                        onClick={
                          handleSaveEdit
                        }
                      >
                        <Save size={16} />
                        Save
                      </button>

                      <button
                        onClick={() =>
                          setEditId(
                            null
                          )
                        }
                      >
                        <X size={16} />
                        Cancel
                      </button>

                    </div>
                  </>

                ) : (

                  <>
                    {/* CATEGORY */}
                    <span className="blogview-category">

                      {blog.category ||
                        "General"}

                    </span>

                    {/* TITLE */}
                    <h3>
                      {blog.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p>

                      {preview}

                      {cleanText.length >
                        120 && "..."}

                    </p>

                    {/* FOOTER */}
                    <div className="blogview-card-footer">

                      <div>

                        <User size={14} />

                        <span>

                          {" "}
                          {blog.author ||
                            "Admin"}

                        </span>

                      </div>

                      <div>

                        <CalendarDays size={14} />

                        <span>

                          {blog.createdAt
                            ? new Date(
                                blog.createdAt
                              ).toDateString()
                            : "No Date"}

                        </span>

                      </div>

                    </div>
                  </>

                )}

              </div>

            </div>

          );

        })}

      </div>

      {/* ================= VIEW MODAL ================= */}

      {viewBlog && (

        <div className="blogview-modal">

          <div className="blogview-modal-content">

            <button
              className="modal-close"
              onClick={() =>
                setViewBlog(null)
              }
            >
              <X size={20} />
            </button>

            <img
              src={getImageUrl(
                viewBlog.image
              )}
              alt=""
            />

            <h2>
              {viewBlog.title}
            </h2>

            <p>
              {stripHtml(
                viewBlog.details
              )}
            </p>

            <div className="blogview-card-footer">

              <span>
                <User size={14} />

                {" "}
                {viewBlog.author ||
                  "Admin"}
              </span>

              <span>

                <CalendarDays size={14} />

                {new Date(
                  viewBlog.createdAt
                ).toDateString()}

              </span>

            </div>

          </div>

        </div>

      )}

    </div>

  );

};

export default BlogView;