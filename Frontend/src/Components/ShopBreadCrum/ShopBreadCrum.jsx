import React from 'react';
import './ShopBreadCrum.css';

const ShopBreadCrum = () => {
  return (
    <div className="shop-breadcrumb-container">
      {/* Golden Top Banner */}
      <div className="top-announcement-bar">
        <span>✦ FREE SHIPPING & COD ACROSS INDIA ✦</span>
      </div>

      {/* Main Dark Breadcrumb Content Area */}
      <div className="breadcrumb-main-content">
        {/* Subtitle with lines */}
        <div className="brand-subtitle-wrapper">
          <span className="subtitle-line"></span>
          <span className="brand-subtitle">THE ART AND CULTURE'S</span>
          <span className="subtitle-line"></span>
        </div>

        {/* Main Title */}
        <h1 className="breadcrumb-main-title">Tirupati Balaji</h1>

        {/* Description Paragraph */}
        <p className="breadcrumb-description">
          The deity most kept in South Indian homes, made as a standing
          murti, a crowned face, a pair of feet that fit anywhere, and a
          face large enough for a wall.
        </p>

        {/* Bottom Highlights / Features */}
        <div className="breadcrumb-badges">
          <span>Authentic & True</span>
          <span className="badge-separator">•</span>
          <span>7 Days Easy Return</span>
        </div>
      </div>
    </div>
  );
};

export default ShopBreadCrum;