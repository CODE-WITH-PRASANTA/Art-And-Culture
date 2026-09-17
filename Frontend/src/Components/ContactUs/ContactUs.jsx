import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="contactUsCard">
        {/* Card Header Title */}
        <h2 className="contactUsHeaderTitle">Contact Us</h2>

        <div className="contactUsContent">
          {/* Phone Support Section */}
          <div className="contactUsSection">
            <div className="contactUsSectionHeading">
              <FiPhoneCall className="contactUsIcon" />
              <h3>Phone Support</h3>
            </div>
            <div className="contactUsSectionBody">
              <p className="contactUsTimeText">9am - 6pm (Mon-Sat)</p>
              <p>
                Call: <a href="tel:+917302577395" className="contactUsHighlightText">+91 7302577395</a>
              </p>
              <p>
                WhatsApp: <a href="https://wa.me/7302577395" target="_blank" rel="noreferrer" className="contactUsGoldLink">Chat on WhatsApp</a>
              </p>
            </div>
          </div>

          {/* Email Support Section */}
          <div className="contactUsSection">
            <div className="contactUsSectionHeading">
              <FiMail className="contactUsIcon" />
              <h3>Email Support</h3>
            </div>
            <div className="contactUsSectionBody">
              <p>
                <a href="mailto:artandculturehub@gmail.com" className="contactUsGoldLink contactUsEmailText">artandculturehub@gmail.com</a>
              </p>
              <p className="contactUsMutedText">Response within 4-6 working hours</p>
            </div>
          </div>

          {/* Office Address Section */}
          <div className="contactUsSection">
            <div className="contactUsSectionHeading">
              <FiMapPin className="contactUsIcon" />
              <h3>Office Address</h3>
            </div>
            <div className="contactUsSectionBody contactUsAddressDetails">
              <strong className="contactUsCompanyTitle">Wildship Enterprises Private Limited (Svastika)</strong>
              <p>92, Mansi Vihar, Sanjay Nagar
Sector 23, </p>
              <p>Ghaziabad 201002,</p>
              <p>UttarPradesh 201002</p>
            </div>
          </div>
        </div>

        {/* Action Button Section with Divider Line */}
        <div className="contactUsActionArea">
          <Link to="/contact" className="contactUsBtnPage">
            Visit Our Contact Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;