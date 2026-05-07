import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const defaultForm = {
    name: "",
    role: "",
    message: "",
    image: "",
    highlight: false,
    rating: 5,
  };

  const [formData, setFormData] = useState(defaultForm);
  const [testimonials, setTestimonials] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData({ ...formData, image: url });
    }
  };

  // SAVE / UPDATE
  const handleSave = () => {
    if (!formData.name || !formData.message) {
      alert("Please fill required fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...testimonials];
      updated[editIndex] = formData;
      setTestimonials(updated);
      setEditIndex(null);
    } else {
      setTestimonials([...testimonials, formData]);
    }

    setFormData(defaultForm);
  };

  // EDIT
  const handleEdit = (index) => {
    setFormData(testimonials[index]);
    setEditIndex(index);
  };

  // DELETE
  const handleDelete = (index) => {
    const updated = testimonials.filter((_, i) => i !== index);
    setTestimonials(updated);
  };

  return (
    <div className="testimonialadmin">

      <div className="testimonialadmin-top">

        {/* FORM */}
        <div className="testimonialadmin-formbox">

          <div className="testimonialadmin-heading">
            <h2>Add Sacred Experience</h2>
            <p>Create premium spiritual testimonial cards</p>
          </div>

          {/* BASIC */}
          <div className="testimonialadmin-section">
            <h3>Basic Info</h3>

            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
            <input name="role" value={formData.role} onChange={handleChange} placeholder="Role"/>
          </div>

          {/* CONTENT */}
          <div className="testimonialadmin-section">
            <h3>Content</h3>

            <textarea name="message" rows="5" value={formData.message} onChange={handleChange}/>
          </div>

          {/* MEDIA */}
          <div className="testimonialadmin-section">
            <h3>Media</h3>

            <input type="file" onChange={handleImageUpload} />

            {formData.image && (
              <div className="testimonialadmin-imagepreview">
                <img src={formData.image} alt="" />
              </div>
            )}
          </div>

          {/* SETTINGS */}
          <div className="testimonialadmin-section">
            <h3>Settings</h3>

            <label>
              <input type="checkbox" name="highlight" checked={formData.highlight} onChange={handleChange}/>
              Highlight Card
            </label>

            <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
          </div>

          <button className="testimonialadmin-savebtn" onClick={handleSave}>
            {editIndex !== null ? "Update" : "Save"} Testimonial
          </button>

        </div>

        {/* PREVIEW */}
        <div className="testimonialadmin-previewbox">

          <div className={`testimonialadmin-previewcard ${formData.highlight ? "activehighlight" : ""}`}>

            <div className="testimonialadmin-quote">“</div>

            <p className="testimonialadmin-message">
              {formData.message || "Preview text"}
            </p>

            <div className="testimonialadmin-user">
              {formData.image ? (
                <img src={formData.image} alt="" />
              ) : (
                <div className="avatar">IMG</div>
              )}

              <div>
                <h4>{formData.name || "Name"}</h4>
                <span>{formData.role || "Role"}</span>
                <div>{"⭐".repeat(formData.rating)}</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <div className="testimonialadmin-tablebox">

        <h2>Testimonials List</h2>

        <div className="testimonialadmin-tablewrapper">

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
              {testimonials.map((item, index) => (
                <tr key={index}>

                  <td>
                    {item.image && <img src={item.image} alt="" />}
                  </td>

                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.message}</td>

                  <td>
                    <span className={item.highlight ? "testimonialadmin-yes" : "testimonialadmin-no"}>
                      {item.highlight ? "Yes" : "No"}
                    </span>
                  </td>

                  <td>
                    <div className="testimonialadmin-actions">
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button className="deletebtn" onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Testimonial;