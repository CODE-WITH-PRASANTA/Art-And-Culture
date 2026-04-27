import React, { useState } from "react";
import "./BlogPost.css";

const BlogPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    image: null,
    preview: "",
  });

  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.date) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...blogs];
      updated[editIndex] = formData;
      setBlogs(updated);
      setEditIndex(null);
    } else {
      setBlogs([formData, ...blogs]);
    }

    setFormData({
      title: "",
      description: "",
      date: "",
      image: null,
      preview: "",
    });
  };

  const handleDelete = (index) => {
    const updated = blogs.filter((_, i) => i !== index);
    setBlogs(updated);
  };

  const handleEdit = (index) => {
    setFormData(blogs[index]);
    setEditIndex(index);
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  return (
    <div className="BlogPost-container">
      {/* FORM */}
      <div className="BlogPost-formSection">
        <h2>Blog Post Form</h2>

        <form onSubmit={handleSubmit}>
          {/* TITLE */}
          <div className="BlogPost-floatingGroup">
            <input
              type="text"
              name="title"
              placeholder=" "
              value={formData.title}
              onChange={handleChange}
            />
            <label>Blog Title</label>
          </div>

          {/* DESCRIPTION */}
          <div className="BlogPost-floatingGroup">
            <textarea
              name="description"
              placeholder=" "
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <label>Blog Description</label>
          </div>

          {/* DATE */}
          <div className="BlogPost-floatingGroup">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="BlogPost-dateInput"
            />
            <label>Publish Date</label>
          </div>

          {/* IMAGE */}
          <div className="BlogPost-uploadSection">
            <label>Upload Image</label>

            <div className="BlogPost-uploadBox">
              <input type="file" onChange={handleImage} />
              <span>Click to upload or drag image</span>
            </div>

            {formData.preview && (
              <img
                src={formData.preview}
                alt="preview"
                className="BlogPost-preview"
              />
            )}
          </div>

          <button type="submit" className="BlogPost-submitBtn">
            {editIndex !== null ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="BlogPost-tableSection">
        <h2>Blog List</h2>

        <table className="BlogPost-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentBlogs.length === 0 ? (
              <tr>
                <td colSpan="4">No Blogs Found</td>
              </tr>
            ) : (
              currentBlogs.map((blog, index) => (
                <tr key={index}>
                  <td>
                    {blog.preview && (
                      <img
                        src={blog.preview}
                        alt=""
                        className="BlogPost-tableImg"
                      />
                    )}
                  </td>
                  <td>{blog.title}</td>
                  <td>{blog.date}</td>
                  <td>
                    <button
                      className="BlogPost-editBtn"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="BlogPost-deleteBtn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="BlogPost-pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;