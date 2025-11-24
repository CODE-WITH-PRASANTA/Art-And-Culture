import React, { useEffect, useState } from "react";
import "./FloatingButtons.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FloatingButtons = () => {
  const location = useLocation();
  const whatsappNumber = "7000000000";
  const phoneNumber = "7000000000";

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1500); // 👈 Matching your loader duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className="floating-container"
      key={location.pathname}
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
      >
        <FaWhatsapp size={26} />
      </a>

      <a href={`tel:${phoneNumber}`} className="floating-btn call-btn">
        <FaPhoneAlt size={26} />
      </a>
    </div>
  );
};

export default FloatingButtons;
