import React, { useState } from "react";
import "./Contactformsection.css";
import kidImg from "../../assets/k-5.webp";
import bgPattern from "../../assets/Artall background.webp";
import API from "../../api/axios";

export default function ContactFormSection() {
  /* =========================
     STATES
  ========================= */
  const [userType, setUserType] = useState("provider"); // "provider", "customer", or "wholesaler"

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

      // Endpoint switches depending on whether they are applying as an Artiste, Customer, or Wholesaler
      let endpoint = "/contact";
      if (userType === "provider") {
        endpoint = "/provider-apply";
      } else if (userType === "wholesaler") {
        endpoint = "/wholesaler-apply";
      }

      const payload = {
        ...formData,
        role: userType, // passing role info
      };

      /* SEND DATA */
      const response = await API.post(endpoint, payload);

      console.log(response.data);

      /* SUCCESS MESSAGE */
      let successMsg = "Message Sent Successfully ✅";
      if (userType === "provider") {
        successMsg = "Artiste Application Sent Successfully ✅ Our team will review and connect with you.";
      } else if (userType === "wholesaler") {
        successMsg = "Wholesaler Inquiry Sent Successfully ✅ Our business team will reach out soon.";
      }
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

  /* =========================
     DYNAMIC CONTENT HELPERS
  ========================= */
  const getToplineText = () => {
    if (userType === "provider") return "JOIN OUR ARTISTE NETWORK";
    if (userType === "wholesaler") return "PARTNER WITH US / WHOLESALE";
    return "HAVE ANY QUESTIONS? SO PLEASE";
  };

  const getTitleText = () => {
    if (userType === "provider") return "Join As An Artiste!";
    if (userType === "wholesaler") return "Join As A Wholesaler!";
    return "Feel Free To Contact!";
  };

  const getSubtitleText = () => {
    if (userType === "provider") {
      return "Are you a creative artiste, skilled creator, or looking to showcase your craft in our growing network? Fill out the form below.";
    }
    if (userType === "wholesaler") {
      return "Looking to buy in bulk or establish a business partnership? Provide your business details below to get special wholesale access.";
    }
    return "We would love to hear from you. Send us your questions, feedback, or creative ideas and our team will get back to you as soon as possible.";
  };

  const getMessageLabel = () => {
    if (userType === "provider") return "Why do you want to join us / Artiste Experience details";
    if (userType === "wholesaler") return "Business Name / Bulk Requirement Details";
    return "Message";
  };

  const getMessagePlaceholder = () => {
    if (userType === "provider") return "Share your creative background, skills, or portfolio details...";
    if (userType === "wholesaler") return "Tell us about your store, expected volume, or requirements...";
    return "Write your message here...";
  };

  const getSubmitButtonText = () => {
    if (loading) return "Sending...";
    if (userType === "provider") return "Submit Artiste Application";
    if (userType === "wholesaler") return "Submit Wholesale Inquiry";
    return "Send Message";
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

          <p className="contactformux-topline">{getToplineText()}</p>

          <h2 className="contactformux-title">{getTitleText()}</h2>

          <p className="contactformux-subtitle">{getSubtitleText()}</p>

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
              Artiste
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

            <label className={`contactformux-switch-label ${userType === "wholesaler" ? "active" : ""}`}>
              <input
                type="radio"
                name="userType"
                value="wholesaler"
                checked={userType === "wholesaler"}
                onChange={() => setUserType("wholesaler")}
                className="contactformux-radio"
              />
              <span className="radio-custom"></span>
              Wholesaler
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
              {getMessageLabel()}
              <textarea
                name="message"
                placeholder={getMessagePlaceholder()}
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
              {getSubmitButtonText()}
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