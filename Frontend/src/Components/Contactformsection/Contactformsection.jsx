import React, { useState } from "react";
import "./Contactformsection.css";
import kidImg from "../../assets/k-5.webp";
import bgPattern from "../../assets/Artall background.webp";
import API from "../../api/axios";

export default function ContactFormSection() {
  /* =========================
     STATES
  ========================= */
  const [userType, setUserType] = useState("provider"); // "provider" or "customer"

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

      // Endpoint switches depending on whether they are applying as a Provider (employee/artisan) or Customer
      const endpoint = userType === "provider" ? "/provider-apply" : "/contact";

      const payload = {
        ...formData,
        role: userType, // passing role info
      };

      /* SEND DATA */
      const response = await API.post(endpoint, payload);

      console.log(response.data);

      /* SUCCESS */
      const successMsg =
        userType === "provider"
          ? "Provider Application Sent Successfully ✅ Our team will review and connect with you."
          : "Message Sent Successfully ✅";
      alert(successMsg);

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
    <section 
      className="contactformux-root"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="contactformux-overlay-tint"></div>

      <div className="contactformux-inner">

        {/* ====================================
                LEFT SECTION (FORM)
        ==================================== */}
        <div className="contactformux-left">

          <p className="contactformux-topline">
            {userType === "provider" ? "JOIN OUR TEAM / ARTISAN NETWORK" : "HAVE ANY QUESTIONS? SO PLEASE"}
          </p>

          <h2 className="contactformux-title">
            {userType === "provider" ? "Join As A Provider!" : "Feel Free To Contact!"}
          </h2>

          <p className="contactformux-subtitle">
            {userType === "provider" 
              ? "Are you an artisan, skilled worker, or looking to join our growing network? Fill out the form below to apply."
              : "We would love to hear from you. Send us your questions, feedback, or creative ideas and our team will get back to you as soon as possible."}
          </p>

          {/* SWITCH BAR SECTION */}
          <div className="contactformux-switch-bar">
            <label className={`contactformux-switch-label ${userType === "provider" ? "active" : ""}`}>
              <input
                type="radio"
                name="userType"
                value="provider"
                checked={userType === "provider"}
                onChange={() => setUserType("provider")}
                className="contactformux-radio"
              />
              <span className="radio-custom"></span>
              Provider
            </label>

            <label className={`contactformux-switch-label ${userType === "customer" ? "active" : ""}`}>
              <input
                type="radio"
                name="userType"
                value="customer"
                checked={userType === "customer"}
                onChange={() => setUserType("customer")}
                className="contactformux-radio"
              />
              <span className="radio-custom"></span>
              Customer
            </label>
          </div>

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
              {userType === "provider" ? "Why do you want to join us / Experience details" : "Message"}
              <textarea
                name="message"
                placeholder={userType === "provider" ? "Share your background, skills, or experience..." : "Write your message here..."}
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
              {loading ? "Sending..." : userType === "provider" ? "Submit Application" : "Send Message"}
            </button>

          </form>

        </div>

        {/* ====================================
                RIGHT SECTION (IMAGE)
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