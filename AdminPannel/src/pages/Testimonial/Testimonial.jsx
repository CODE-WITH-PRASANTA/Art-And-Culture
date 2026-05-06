import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import API, { BASE_URL } from "../../api/axios";

const Testimonial = () => {

  // ================= DEFAULT =================
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

  // ================= IMAGE URL FIX =================
  const getImageUrl = (path) => {
    if (!path) return "";

    if (path.startsWith("http")) return path;

    const cleanPath = path.replace(/^\/+/, "");
    return `${BASE_URL}/${cleanPath}`;
  };

  // ================= FETCH =================
  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonial");

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.data || [];

      setTestimonials(data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setTestimonials([]);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ================= INPUT =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ================= IMAGE =================
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  // ================= SAVE =================
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
      console.error("Save Error:", err);
    }
  };

  // ================= EDIT =================
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

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await API.delete(`/testimonial/${id}`);
      fetchTestimonials();
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  return (
    <div className="testimonialadmin">

      {/* ================= TOP ================= */}
      <div className="testimonialadmin-top">

        {/* FORM */}
        <div className="testimonialadmin-formbox">

          <h2>Add Testimonial</h2>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
          />

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />

          <input type="file" onChange={handleImageUpload} />

          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="preview"
              width="80"
            />
          )}

       

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

            <p>{formData.message || "Preview text..."}</p>

            <div>
              {formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt=""
                  width="50"
                />
              ) : (
                <div className="avatar">IMG</div>
              )}

              <h4>{formData.name || "Name"}</h4>
              <span>{formData.role || "Role"}</span>
            </div>

          </div>
        </div>

      </div>

      {/* ================= TABLE ================= */}
      <div className="testimonialadmin-tablebox">

        <h2>Testimonials List</h2>

        <table className="testimonialadmin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Role</th>
              <th>Message</th>
              <th>Highlight</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.length > 0 ? (
              testimonials.map((item) => (
                <tr key={item._id}>

                  {/* IMAGE FIXED */}
                  <td>
                    {item.image ? (
                      <img
                        src={getImageUrl(item.image)}
                        alt="testimonial"
                        className="testimonialadmin-table-img"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/60?text=No+Img";
                        }}
                      />
                    ) : (
                      <div className="avatar">No Img</div>
                    )}
                  </td>

                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.message}</td>

                  <td>
                    {item.highlight ? (
                      <span className="testimonialadmin-yes">Yes</span>
                    ) : (
                      <span className="testimonialadmin-no">No</span>
                    )}
                  </td>

                 <td>
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
                <td colSpan="6">No Data</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default Testimonial;