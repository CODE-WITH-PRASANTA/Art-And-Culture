import React, { useState } from "react";
import "./ContactFormsection.css";
import kidImg from "../../assets/k-5.webp";
import API from "../../api/axios"; // ✅ your axios instance

export default function ContactFormSection() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* HANDLE SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all fields ❗");
      return;
    }

    try {
      setLoading(true);

      // 🔥 SEND DATA TO BACKEND
      await API.post("/contact", formData);

      alert("Message sent successfully ✅");

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contactformux-root">
      <div className="contactformux-inner">

        {/* LEFT FORM */}
        <div className="contactformux-left">
          <p className="contactformux-topline">
            HAVE ANY QUESTIONS? SO PLEASE
          </p>

          <h2 className="contactformux-title">
            Feel Free To Contact!
          </h2>

          <form className="contactformux-form" onSubmit={handleSubmit}>

            <div className="contactformux-row">
              <label className="contactformux-label">
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contactformux-input"
                />
              </label>

              <label className="contactformux-label">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contactformux-input"
                />
              </label>
            </div>

            <div className="contactformux-row">
              <label className="contactformux-label">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contactformux-input"
                />
              </label>

              <label className="contactformux-label">
                Phone
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contactformux-input"
                />
              </label>
            </div>

            <label className="contactformux-label">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contactformux-textarea"
              ></textarea>
            </label>

            <button type="submit" className="contactformux-btn">
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="contactformux-right">
          <div className="contactformux-yellowblob" />
          <div className="contactformux-kid-wrap">
            <div className="contactformux-kid-frame">
              <img src={kidImg} alt="Kid painting" className="contactformux-kidimg" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}