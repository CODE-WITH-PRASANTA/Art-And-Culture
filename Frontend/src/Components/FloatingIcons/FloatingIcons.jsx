import React, { useState, useEffect } from "react";
import "./FloatingIcons.css";

import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingIcons = () => {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="floating-icons">

      {/* CALL BUTTON */}
      <a
        href="tel:+917016201096"
        className="floating-icons__btn floating-icons__call"
      >
        <FaPhoneAlt />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917016201096"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icons__btn floating-icons__whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button
          className="floating-icons__btn floating-icons__top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
};

export default FloatingIcons;