import React, { useState } from "react";
import "./ContactFormsection.css";
import kidImg from "../../assets/k-5.webp";
import API from "../../api/axios";

export default function ContactFormSection() {

  /* =========================
      STATES
  ========================= */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* =========================
      HANDLE CHANGE
  ========================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
      HANDLE SUBMIT
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* VALIDATION */
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields ❗");
      return;
    }

    try {

      setLoading(true);

      /* SEND DATA */
      const response = await API.post(
        "/contact",
        formData
      );

      console.log(response.data);

      /* SUCCESS */
      alert("Message Sent Successfully ✅");

      /* RESET */
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      if (error.response) {
        alert(
          error.response.data.message ||
          "Something went wrong ❌"
        );
      } else {
        alert("Server Error ❌");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contactformux-root">

      <div className="contactformux-inner">

        {/* ====================================
                LEFT SECTION
        ==================================== */}
        <div className="contactformux-left">

          <p className="contactformux-topline">
            HAVE ANY QUESTIONS? SO PLEASE
          </p>

          <h2 className="contactformux-title">
            Feel Free To Contact!
          </h2>

          <p className="contactformux-subtitle">
            We would love to hear from you. Send us your
            questions, feedback, or creative ideas and
            our team will get back to you as soon as possible.
          </p>

          {/* FORM */}
          <form
            className="contactformux-form"
            onSubmit={handleSubmit}
          >

            {/* ROW */}
            <div className="contactformux-row">

              {/* FIRST NAME */}
              <label className="contactformux-label">

                First Name

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contactformux-input"
                />

              </label>

              {/* LAST NAME */}
              <label className="contactformux-label">

                Last Name

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contactformux-input"
                />

              </label>

            </div>

            {/* ROW */}
            <div className="contactformux-row">

              {/* EMAIL */}
              <label className="contactformux-label">

                Email Address

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="contactformux-input"
                />

              </label>

              {/* PHONE */}
              <label className="contactformux-label">

                Phone Number

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contactformux-input"
                />

              </label>

            </div>

            {/* MESSAGE */}
            <label className="contactformux-label">

              Message

              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="contactformux-textarea"
              ></textarea>

            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="contactformux-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

        {/* ====================================
                RIGHT SECTION
        ==================================== */}
        <div className="contactformux-right">

          {/* BG SHAPE */}
          <div className="contactformux-yellowblob"></div>

          {/* IMAGE WRAP */}
          <div className="contactformux-kid-wrap">

            <div className="contactformux-kid-frame">

              <img
                src={kidImg}
                alt="Kid Painting"
                className="contactformux-kidimg"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}