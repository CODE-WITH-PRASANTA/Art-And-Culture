import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./TeamMember.css";

/* ================= AXIOS ================= */
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

  /* ================= FETCH ================= */

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await api.get(API);
      setTeamMembers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= INPUT ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= IMAGE ================= */

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
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
        await api.put(`${API}/${editId}`, data);

        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Team member updated successfully",
        });
      } else {
        await api.post(API, data);

        Swal.fire({
          icon: "success",
          title: "Added",
          text: "Team member added successfully",
        });
      }

      fetchMembers();
      resetForm();
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
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
    const result = await Swal.fire({
      title: "Delete Member?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff3b3b",
      cancelButtonColor: "#888",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`${API}/${id}`);

        fetchMembers();

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Member deleted successfully",
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (member) => {
    setFormData({
      name: member.name || "",
      designation: member.designation || "",
      phone: member.phone || "",
      facebook: member.facebook || "",
      instagram: member.instagram || "",
      linkedin: member.linkedin || "",
      twitter: member.twitter || "",
    });

    setPreview(member.image ? IMG + member.image : null);

    setEditId(member._id);
  };

  return (
    <div className="tmAdmin">
      {/* ================= FORM ================= */}

      <div className="tmAdmin__formSection">
        <div className="tmAdmin__card">
          <h2 className="tmAdmin__title">
            {editId ? "Update Team Member" : "Add Team Member"}
          </h2>

          <form className="tmAdmin__form" onSubmit={handleSubmit}>
            {/* BASIC */}
            <div className="tmAdmin__sectionTitle tmAdmin__full">
              Basic Information
            </div>

            <div className="tmAdmin__group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="tmAdmin__group">
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="tmAdmin__group tmAdmin__full">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* SOCIAL */}
            <div className="tmAdmin__sectionTitle tmAdmin__full">
              Social Links
            </div>

            <div className="tmAdmin__group">
              <input
                type="text"
                name="facebook"
                placeholder="Facebook URL"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="tmAdmin__group">
              <input
                type="text"
                name="instagram"
                placeholder="Instagram URL"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="tmAdmin__group">
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="tmAdmin__group">
              <input
                type="text"
                name="twitter"
                placeholder="Twitter URL"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>

            {/* IMAGE */}
            <div className="tmAdmin__sectionTitle tmAdmin__full">
              Profile Image
            </div>

            <div className="tmAdmin__full">
              <label className="tmAdmin__upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />

                <span>📁 Choose Image</span>
              </label>
            </div>

            {preview && (
              <div className="tmAdmin__preview tmAdmin__full">
                <img
                  src={preview}
                  alt="preview"
                  className="tmAdmin__previewImg"
                />
              </div>
            )}

            <button type="submit" className="tmAdmin__submit tmAdmin__full">
              {editId ? "Update Member" : "Add Member"}
            </button>
          </form>
        </div>
      </div>

      {/* ================= TABLE ================= */}

      <div className="tmAdmin__tableWrapper">
        <table className="tmAdmin__table">
          <colgroup>
            <col style={{ width: "90px" }} />
            <col style={{ width: "180px" }} />
            <col style={{ width: "180px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "170px" }} />
            <col style={{ width: "120px" }} />
          </colgroup>

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
                <td colSpan="6" className="tmAdmin__empty">
                  No Team Members Found
                </td>
              </tr>
            ) : (
              teamMembers.map((m) => (
                <tr key={m._id}>
                  <td>
                    <img
                      src={IMG + m.image}
                      alt={m.name}
                      className="tmAdmin__profile"
                    />
                  </td>

                  <td>{m.name}</td>

                  <td>{m.designation}</td>

                  <td>{m.phone}</td>

                  <td>
                    <div className="tmAdmin__socials">
                      {m.facebook && (
                        <a
                          href={m.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      )}

                      {m.instagram && (
                        <a
                          href={m.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      )}

                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}

                      {m.twitter && (
                        <a
                          href={m.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      )}
                    </div>
                  </td>

                  <td>
                    <div className="tmAdmin__actions">
                      <button
                        className="tmAdmin__editBtn"
                        onClick={() => handleEdit(m)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="tmAdmin__deleteBtn"
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