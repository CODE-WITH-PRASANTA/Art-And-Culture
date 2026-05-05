import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TeamMember.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const API = "http://localhost:5000/api/team";
const IMG = "http://localhost:5000/uploads/";

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

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(API);
      setTeamMembers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= IMAGE HANDLE ================= */
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (image) {
        data.append("image", image);
      }

      if (editId) {
        await axios.put(`${API}/${editId}`, data);
      } else {
        await axios.post(API, data);
      }

      fetchMembers();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= RESET ================= */
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

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchMembers();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= EDIT ================= */
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
      {/* ================= FORM ================= */}
      <div className="teamadmin-left">
        <div className="teamadmin-card">
          <h2>{editId ? "Update Team Member" : "Add Team Member"}</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
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

            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="instagram"
                placeholder="Instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="twitter"
                placeholder="Twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>

            {/* IMAGE UPLOAD */}
            <div className="form-group">
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>

            {/* PREVIEW */}
            {preview && (
              <div className="preview-box">
                <img src={preview} alt="preview" className="preview-img" />
              </div>
            )}

            <button type="submit" className="submit-btn">
              {editId ? "Update Member" : "Add Member"}
            </button>
          </form>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="teamadmin-right">
        <div className="teamadmin-table-card">
          <h2>Team Members</h2>

          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Phone</th>
                <th>Social</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {teamMembers.length === 0 ? (
                <tr>
                  <td colSpan="6">No Data</td>
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

                    <td>{m.name}</td>
                    <td>{m.designation}</td>
                    <td>{m.phone}</td>

                    <td className="social-icons">
                      {m.facebook && (
                        <a href={m.facebook} target="_blank">
                          <FaFacebookF />
                        </a>
                      )}
                      {m.instagram && (
                        <a href={m.instagram} target="_blank">
                          <FaInstagram />
                        </a>
                      )}
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank">
                          <FaLinkedinIn />
                        </a>
                      )}
                      {m.twitter && (
                        <a href={m.twitter} target="_blank">
                          <FaTwitter />
                        </a>
                      )}
                    </td>

                    <td>
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
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberAdmin;