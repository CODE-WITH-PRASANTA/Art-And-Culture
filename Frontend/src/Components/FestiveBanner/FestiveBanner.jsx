import React from "react";
import { AiOutlineRight } from "react-icons/ai"; // React icon for breadcrumb
import festive_banner from "../../assets/festive_banner.webp";
import "./FestiveBanner.css";

const FestiveBanner = () => {
  return (
    <div className="festive-banner">
      {/* Left Section */}
      <div className="festive-banner-left">
        <nav className="festive-breadcrumbs">
          <span>Home</span>
          <AiOutlineRight className="breadcrumb-icon" />
          <span>Ganesh Chaturthi Gifts</span>
        </nav>
        <h1 className="festive-title">Ganesh Chaturthi Gifts</h1>
      </div>

      {/* Right Section */}
      <div
        className="festive-banner-right"
        style={{ backgroundImage: `url(${festive_banner})` }}
      >
        {/* Right section is just background now */}
      </div>
    </div>
  );
};

export default FestiveBanner;
