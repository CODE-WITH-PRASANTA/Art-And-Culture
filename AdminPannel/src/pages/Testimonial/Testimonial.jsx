import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import API, { BASE_URL } from "../../api/axios";

const Testimonial = () => {

  const defaultForm = {
    name: "",
    role: "",
    message: "",
    image: null,
    highlight: false,
    rating: 5,
  };

  const [formData, setFormData] = useState(defaultForm);
  const [testimonials, setTestimonials] = useState([]);
  const [editId, setEditId] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const cleanPath = path.replace(/^\/+/, "");
    return `${BASE_URL}/${cleanPath}`;
  };

  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonial");
      const data = Array.isArray(res.data)
        ? res.data
        : res.data.data || [];
      setTestimonials(data);
    } catch (err) {
      console.error(err);
      setTestimonials([]);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSave = async () => {
    try {
      if (!formData.name || !formData.message) {
        alert("Please fill required fields");
        return;
      }

      const data = new FormData();
      data.append("name", formData.name);
      data.append("role", formData.role);
      data.append("message", formData.message);
      data.append("highlight", formData.highlight);
      data.append("rating", formData.rating);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (editId) {
        await API.put(`/testimonial/${editId}`, data);
      } else {
        await API.post("/testimonial", data);
      }

      fetchTestimonials();
      setFormData(defaultForm);
      setEditId(null);

    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      role: item.role,
      message: item.message,
      image: null,
      highlight: item.highlight,
      rating: item.rating,
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/testimonial/${id}`);
      fetchTestimonials();
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div className="testimonialadmin testimonialadmin-wrapper">

      {/* ================= TOP ================= */}
      <div className="testimonialadmin-top">

        {/* FORM */}
        <div className="testimonialadmin-formbox">

          <h2 className="testimonialadmin-title">
            {editId ? "Update Testimonial" : "Add Testimonial"}
          </h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter role"
          />

          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write testimonial message..."
          />

          {/* Upload */}
          <div className="testimonialadmin-uploadbox">
            <label className="testimonialadmin-uploadlabel">
              <div className="testimonialadmin-uploadicon">📤</div>
              <h4>Upload Image</h4>
              <p>Click to upload testimonial image</p>
              <input type="file" onChange={handleImageUpload} hidden />
            </label>

            {formData.image && (
              <div className="testimonialadmin-imagepreview">
                <img src={URL.createObjectURL(formData.image)} alt="preview" />
              </div>
            )}
          </div>

          <button
            className={`testimonialadmin-savebtn ${editId ? "update" : ""}`}
            onClick={handleSave}
          >
            {editId ? "Update Testimonial" : "Save Testimonial"}
          </button>

        </div>

        {/* PREVIEW */}
        <div className="testimonialadmin-previewbox">
          <div className="testimonialadmin-previewcard">

            <div className="testimonialadmin-quote">“</div>

            <p>{formData.message || "Preview text..."}</p>

            <div className="testimonialadmin-user">

              {formData.image ? (
                <img src={URL.createObjectURL(formData.image)} alt="" />
              ) : (
                <div className="avatar">IMG</div>
              )}

              <div className="userinfo">
                <h4>{formData.name || "Name"}</h4>
                <span>{formData.role || "Role"}</span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ================= TABLE ================= */}
      <div className="testimonialadmin-tablebox">

        <h2 className="testimonialadmin-title">Testimonials List</h2>

        <div className="testimonialadmin-tablewrapper">

          <table className="testimonialadmin-table">

            <thead>
              <tr>
                <th className="col-img">Image</th>
                <th className="col-name">Name</th>
                <th className="col-role">Role</th>
                <th className="col-message">Message</th>
                <th className="col-action">Actions</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.length > 0 ? (
                testimonials.map((item) => (
                  <tr key={item._id}>

                    <td className="col-img">
                      {item.image ? (
                        <img
                          src={getImageUrl(item.image)}
                          alt=""
                          className="testimonialadmin-table-img"
                        />
                      ) : (
                        <div className="avatar">No Img</div>
                      )}
                    </td>

                    <td className="col-name">{item.name}</td>

                    <td className="col-role">{item.role}</td>

                    <td className="col-message">
                      <div className="message-text">
                        {item.message}
                      </div>
                    </td>

                    <td className="col-action">
                      <div className="testimonialadmin-actions">

                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="deletebtn delete-btn"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="empty-row">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
};

export default Testimonial;