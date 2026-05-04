import React, { useState } from "react";
import "./BlogView.css";
import {
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  UploadCloud,
  CalendarDays,
  User,
} from "lucide-react";

const BlogView = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Beauty of Indian Handcrafted Art",
      category: "Culture",
      author: "Admin",
      date: "02 May 2026",
      status: "Published",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Traditional Paintings That Define Heritage",
      category: "Painting",
      author: "Admin",
      date: "28 April 2026",
      status: "Draft",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Wooden Sculptures & Temple Artwork",
      category: "Sculpture",
      author: "Admin",
      date: "22 April 2026",
      status: "Review",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Modern Handmade Decorative Trends",
      category: "Decor",
      author: "Admin",
      date: "18 April 2026",
      status: "Published",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Exploring Odisha Traditional Culture",
      category: "Heritage",
      author: "Admin",
      date: "14 April 2026",
      status: "Draft",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Ancient Art Forms That Still Inspire",
      category: "History",
      author: "Admin",
      date: "09 April 2026",
      status: "Published",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  // ACTIONS

  const handleView = (blog) => {
    alert(`Viewing:\n${blog.title}`);
    setActiveMenu(null);
  };

  const handleEdit = (blog) => {
    alert(`Editing:\n${blog.title}`);
    setActiveMenu(null);
  };

  const handleTogglePublish = (id) => {
    setBlogs(
      blogs.map((b) =>
        b.id === id
          ? {
              ...b,
              status: b.status === "Published" ? "Draft" : "Published",
            }
          : b
      )
    );
    setActiveMenu(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this blog?")) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
    setActiveMenu(null);
  };

  return (
    <div className="blogview">

      {/* HEADER (TEXT REMOVED ONLY) */}
      <div className="blogview-header">
        <button className="blogview-create-btn">
          <UploadCloud size={18} />
          Create Blog
        </button>
      </div>

      {/* GRID */}
      <div className="blogview-grid">
        {blogs.map((blog) => (
          <div className="blogview-card" key={blog.id}>

            {/* IMAGE */}
            <div className="blogview-card-image">
              <img src={blog.image} alt={blog.title} />

              <span className={`blogview-status ${blog.status.toLowerCase()}`}>
                {blog.status}
              </span>

              <button
                className="blogview-menu-btn"
                onClick={() => toggleMenu(blog.id)}
              >
                <MoreVertical size={18} />
              </button>

              {activeMenu === blog.id && (
                <div className="blogview-dropdown">

                  <button onClick={() => handleView(blog)}>
                    <Eye size={16} /> View
                  </button>

                  <button onClick={() => handleEdit(blog)}>
                    <Pencil size={16} /> Edit
                  </button>

                  <button onClick={() => handleTogglePublish(blog.id)}>
                    <UploadCloud size={16} />
                    {blog.status === "Published" ? "Unpublish" : "Publish"}
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>

                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="blogview-card-content">
              <span className="blogview-category">{blog.category}</span>

              <h3>{blog.title}</h3>

              <p>
                Discover premium handcrafted stories, cultural traditions, and
                artistic inspirations beautifully curated for modern audiences.
              </p>

              {/* FOOTER */}
              <div className="blogview-card-footer">
                <div>
                  <User size={15} />
                  <span>{blog.author}</span>
                </div>

                <div>
                  <CalendarDays size={15} />
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogView;