import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./HomeDecorHeader.css";

const HomeDecorHeader = () => {
  return (
    <header className="homedecorheader-header">
      <div className="homedecorheader-container">

        {/* Breadcrumb */}
        <nav className="homedecorheader-breadcrumb" aria-label="breadcrumb">
          <button className="homedecorheader-link" type="button">Home</button>
          <FaChevronRight className="homedecorheader-chevron" aria-hidden="true" />
          <button className="homedecorheader-link" type="button">Home Decor</button>
        </nav>

        {/* Title */}
        <h1 className="homedecorheader-title">Home Decor</h1>

      </div>
    </header>
  );
};

export default HomeDecorHeader;
