import React, { useState } from 'react';
import "./Product.css";

const ProductHeader = () => {
  // Sample state to showcase dynamic numbers
  const [metrics] = useState({
    totalProducts: 156,
    activeProducts: 142,
    outOfStock: 14,
    totalCategories: 12,
  });

  // Export button action handler
  const handleExport = () => {
    alert('Exporting products summary...');
  };

  return (
    <div className="ph-container">
      {/* TOP HEADER & BREADCRUMB */}
      <header className="ph-header">
        <div className="ph-title-area">
          <h1 className="ph-title">Products</h1>
          <nav className="ph-breadcrumb" aria-label="Breadcrumb">
            <span className="ph-breadcrumb-link">Dashboard</span>
            <span className="ph-breadcrumb-separator">›</span>
            <span className="ph-breadcrumb-active">Products</span>
          </nav>
        </div>

        <div className="ph-actions">
          <button type="button" className="ph-export-btn" onClick={handleExport}>
            <svg
              className="ph-export-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Export</span>
          </button>
        </div>
      </header>

      {/* METRIC / STAT CARDS GRID */}
      <section className="ph-cards-grid" aria-label="Product Summary Metrics">
        {/* Card 1: Total Products */}
        <div className="ph-card">
          <div className="ph-card-content">
            <span className="ph-card-label">Total Products</span>
            <span className="ph-card-value">{metrics.totalProducts}</span>
            <span className="ph-card-subtext">All products in store</span>
          </div>
          <div className="ph-icon-circle ph-icon-circle--orange">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        </div>

        {/* Card 2: Active Products */}
        <div className="ph-card">
          <div className="ph-card-content">
            <span className="ph-card-label">Active Products</span>
            <span className="ph-card-value">{metrics.activeProducts}</span>
            <span className="ph-card-subtext">Currently live</span>
          </div>
          <div className="ph-icon-circle ph-icon-circle--green">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </div>

        {/* Card 3: Out of Stock */}
        <div className="ph-card">
          <div className="ph-card-content">
            <span className="ph-card-label">Out of Stock</span>
            <span className="ph-card-value">{metrics.outOfStock}</span>
            <span className="ph-card-subtext">Not available</span>
          </div>
          <div className="ph-icon-circle ph-icon-circle--pink">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
        </div>

        {/* Card 4: Total Categories */}
        <div className="ph-card">
          <div className="ph-card-content">
            <span className="ph-card-label">Total Categories</span>
            <span className="ph-card-value">{metrics.totalCategories}</span>
            <span className="ph-card-subtext">Product categories</span>
          </div>
          <div className="ph-icon-circle ph-icon-circle--purple">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHeader;