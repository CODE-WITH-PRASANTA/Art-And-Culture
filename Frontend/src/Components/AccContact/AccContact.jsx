import React, { useState } from "react";
import "./AccContact.css";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";

const AccContact = () => {
  return (
    <section className="AccContact">
      <div className="AccContact-container">

        <h2 className="AccContact-title">AccContact Us</h2>

        {/* Phone */}
        <div className="AccContact-card">
          <div className="AccContact-icon">
            <FiPhone />
          </div>

          <div className="AccContact-content">
            <h4>Phone Support</h4>

            <p>9am - 6pm (Mon-Sat)</p>

            <p>
              Call:
              <a href="tel:+919429690080"> +91 94296 90080</a>
            </p>

            <p>
              WhatsApp:
              <a
                href="https://wa.me/919429690080"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="AccContact-card">
          <div className="AccContact-icon">
            <FiMail />
          </div>

          <div className="AccContact-content">
            <h4>Email Support</h4>

            <a href="mailto:contact@svastika.in" className="AccContact-email">
              contact@art&culture.in
            </a>

            <span className="AccContact-note">
              Response within 4-6 working hours
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="AccContact-card">
          <div className="AccContact-icon">
            <FiMapPin />
          </div>

          <div className="AccContact-content">
            <h4>Office Address</h4>

            <strong>
              Wildship Enterprises Private Limited (Svastika)
            </strong>

            <p>604-606, Kailas Corporate Lounge,</p>

            <p>Hiranandani Link Road,</p>

            <p>Vikhroli (W), Mumbai - 400079</p>
          </div>
        </div>

        <div className="AccContact-divider"></div>

        <div className="AccContact-buttonWrapper">
          <a
            href="#"
            className="AccContact-button"
          >
            Visit Our AccContact Page
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccContact;