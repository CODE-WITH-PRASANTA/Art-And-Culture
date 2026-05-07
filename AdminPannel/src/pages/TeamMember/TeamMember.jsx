import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TeamMember.css";
import Swal from "sweetalert2";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

/* ================= AXIOS INSTANCE ================= */
const API_BASE = "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

const API = "/api/team";
const IMG = `${API_BASE}/uploads/`;

const TeamMemberAdmin = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    phone: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await api.get(API);
      setTeamMembers(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (image) data.append("image", image);

      if (editId) {
        await api.put(`${API}/${editId}`, data);
        Swal.fire("Updated!", "Member updated successfully", "success");
      } else {
        await api.post(API, data);
        Swal.fire("Added!", "Member added successfully", "success");
      }

      fetchMembers();
      resetForm();
    } catch (err) {
      console.error("Submit Error:", err);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      phone: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
    });

    setImage(null);
    setPreview(null);
    setEditId(null);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Member?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff2e2e",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`${API}/${id}`);
        fetchMembers();
        Swal.fire("Deleted!", "Member removed successfully", "success");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      designation: member.designation,
      phone: member.phone,
      facebook: member.facebook,
      instagram: member.instagram,
      linkedin: member.linkedin,
      twitter: member.twitter,
    });

    setPreview(member.image ? IMG + member.image : null);
    setEditId(member._id);
  };

  return (
    <div className="teamadmin">
      {/* FORM */}
      <div className="teamadmin-left">
        <div className="teamadmin-card">
          <h2>{editId ? "Update Team Member" : "Add Team Member"}</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-section-title form-full">
              Basic Information
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group form-full">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-section-title form-full">
              Social Links
            </div>

            <div className="form-group">
              <input
                type="text"
                name="facebook"
                placeholder="Facebook URL"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="instagram"
                placeholder="Instagram URL"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="twitter"
                placeholder="Twitter URL"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>

            <div className="form-section-title form-full">
              Profile Image
            </div>

            <div className="form-group form-full">
              <label className="custom-upload">
                <input type="file" accept="image/*" onChange={handleImage} />
                <span>📁 Choose Image</span>
              </label>
            </div>

            {preview && (
              <div className="preview-box form-full">
                <img src={preview} alt="preview" className="preview-img" />
              </div>
            )}

            <button type="submit" className="submit-btn form-full">
              {editId ? "Update Member" : "Add Member"}
            </button>
          </form>
        </div>
      </div>

      {/* TABLE */}
  <div className="table-wrapper">
  <table className="team-table">

    {/* 🔥 COLUMN CONTROL (IMPORTANT) */}
    <colgroup>
      <col style={{ width: "90px" }} />
      <col style={{ width: "180px" }} />
      <col style={{ width: "180px" }} />
      <col style={{ width: "140px" }} />
      <col style={{ width: "160px" }} />
      <col style={{ width: "120px" }} />
    </colgroup>

    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Phone</th>
        <th>Social</th>
        <th className="action-col">Action</th>
      </tr>
    </thead>

    <tbody>
      {teamMembers.length === 0 ? (
        <tr>
          <td colSpan="6" className="empty-data">
            No Team Members Found
          </td>
        </tr>
      ) : (
        teamMembers.map((m) => (
          <tr key={m._id}>
            <td>
              <img
                src={IMG + m.image}
                alt=""
                className="table-profile"
              />
            </td>

            <td className="text-ellipsis">{m.name}</td>
            <td className="text-ellipsis">{m.designation}</td>
            <td>{m.phone}</td>

            {/* SOCIAL */}
            <td>
              <div className="social-icons">
                {m.facebook && (
                  <a href={m.facebook} target="_blank" rel="noreferrer">
                    <FaFacebookF />
                  </a>
                )}
                {m.instagram && (
                  <a href={m.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                )}
                {m.twitter && (
                  <a href={m.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                )}
              </div>
            </td>

            {/* ✅ ACTION FIXED */}
            <td>
              <div className="action-buttons">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(m)}
                >
                  <FaEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(m._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>
        </div>
      
  );
};

export default TeamMemberAdmin;