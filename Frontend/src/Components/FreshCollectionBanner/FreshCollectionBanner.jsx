import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import fresh_banner from "../../assets/Fresh Collection Baanner.webp"; // replace with your image
import "./FreshCollectionBanner.css";

const FreshCollectionBanner = () => {
  return (
    <div className="freshcollectionbanner">
      
      {/* LEFT SECTION */}
      <div className="freshcollectionbanner-left">
        <nav className="freshcollectionbanner-breadcrumbs">
          <span>Home</span>
          <AiOutlineRight className="freshcollectionbanner-breadcrumb-icon" />
          <span>Fresh Collections</span>
        </nav>

        <h1 className="freshcollectionbanner-title">Fresh Collections</h1>
      </div>

      {/* RIGHT SECTION */}
      <div
        className="freshcollectionbanner-right"
        style={{ backgroundImage: `url(${fresh_banner})` }}
      ></div>
    </div>
  );
};

export default FreshCollectionBanner;
