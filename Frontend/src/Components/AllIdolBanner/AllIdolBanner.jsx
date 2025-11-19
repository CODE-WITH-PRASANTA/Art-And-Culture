import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import festive_banner from "../../assets/All Idol Shop Page Banner.webp";
import "./AllIdolBanner.css";

const AllIdolBanner = () => {
  return (
    <div className="allidolBanner">
      
      {/* LEFT SECTION */}
      <div className="allidolBanner-left">
        <nav className="allidolBanner-breadcrumbs">
          <span>Home</span>
          <AiOutlineRight className="allidolBanner-breadcrumb-icon" />
          <span>Ganesh Chaturthi Gifts</span>
        </nav>

        <h1 className="allidolBanner-title">Ganesh Chaturthi Gifts</h1>
      </div>

      {/* RIGHT SECTION */}
      <div
        className="allidolBanner-right"
        style={{ backgroundImage: `url(${festive_banner})` }}
      ></div>
    </div>
  );
};

export default AllIdolBanner;


























