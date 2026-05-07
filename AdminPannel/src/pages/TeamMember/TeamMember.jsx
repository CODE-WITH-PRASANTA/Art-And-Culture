// TeamMemberAdmin.jsx

import React, { useState } from "react";
import "./TeamMember.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

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
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE IMAGE
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      ...formData,
      preview,
    };

    if (editIndex !== null) {
      const updatedMembers = [...teamMembers];
      updatedMembers[editIndex] = newMember;
      setTeamMembers(updatedMembers);
      setEditIndex(null);
    } else {
      setTeamMembers([...teamMembers, newMember]);
    }

    // RESET
    setFormData({
      name: "",
      designation: "",
      phone: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      image: null,
    });

    setPreview(null);
  };

  // DELETE
  const handleDelete = (index) => {
    const updated = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updated);
  };

  // EDIT
  const handleEdit = (index) => {
    const member = teamMembers[index];

    setFormData(member);
    setPreview(member.preview);
    setEditIndex(index);
  };

  return (
    <div className="teamadmin">
      {/* =========================
          FORM SECTION
      ========================= */}
      <div className="teamadmin-left">
        <div className="teamadmin-card">
          <h2>Post Team Member</h2>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label>Team Member Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter member name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* DESIGNATION */}
            <div className="form-group">
              <label>Designation</label>

              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* FACEBOOK */}
            <div className="form-group">
              <label>Facebook Link</label>

              <input
                type="text"
                name="facebook"
                placeholder="Facebook profile link"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            {/* INSTAGRAM */}
            <div className="form-group">
              <label>Instagram Link</label>

              <input
                type="text"
                name="instagram"
                placeholder="Instagram profile link"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            {/* LINKEDIN */}
            <div className="form-group">
              <label>LinkedIn Link</label>

              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn profile link"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            {/* TWITTER */}
            <div className="form-group">
              <label>Twitter Link</label>

              <input
                type="text"
                name="twitter"
                placeholder="Twitter profile link"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>

            {/* UPLOAD */}
            <div className="form-group form-full">
              <label>Upload Profile Picture</label>

              <div className="upload-box">
                <label htmlFor="profileUpload" className="upload-label">
                
                </label>

                <input
                  id="profileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  hidden
                />

                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    className="preview-img"
                  />
                )}
              </div>
            </div>

            {/* BUTTON */}
            <div className="form-full">
              <button type="submit" className="submit-btn">
                {editIndex !== null ? "Update Member" : "Add Member"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* =========================
          TABLE SECTION
      ========================= */}
      <div className="teamadmin-right">
        <div className="teamadmin-table-card">
          <div className="table-header">
            <h2>Team Members List</h2>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone</th>
                  <th>Social Media</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {teamMembers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="empty-data">
                      No Team Members Added
                    </td>
                  </tr>
                ) : (
                  teamMembers.map((member, index) => (
                    <tr key={index}>
                      {/* IMAGE */}
                      <td>
                        <img
                          src={member.preview}
                          alt="profile"
                          className="table-profile"
                        />
                      </td>

                      {/* NAME */}
                      <td>{member.name}</td>

                      {/* DESIGNATION */}
                      <td>{member.designation}</td>

                      {/* PHONE */}
                      <td>{member.phone}</td>

                      {/* SOCIAL */}
                      <td>
                        <div className="social-icons">
                          {member.facebook && (
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaFacebookF />
                            </a>
                          )}

                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaInstagram />
                            </a>
                          )}

                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaLinkedinIn />
                            </a>
                          )}

                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaTwitter />
                            </a>
                          )}
                        </div>
                      </td>

                      {/* ACTION */}
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(index)}
                          >
                            <FaEdit />
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(index)}
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
      </div>
    </div>
  );
};

export default TeamMemberAdmin;