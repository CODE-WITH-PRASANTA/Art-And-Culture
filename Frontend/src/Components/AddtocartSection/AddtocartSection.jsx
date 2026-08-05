import React, { useState } from "react";
import "./AddtocartSection.css"; // CSS फाइल को इम्पोर्ट करें

const AddtocartSection = () => {
  // States for interactive elements
  const [quantity, setQuantity] = useState(1);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);

  // Handlers
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-page-container">

  <div className="page-top-space"></div>

  <div className="product-breadcrumb">
    <span className="crumb-home">🏠 Home</span>
    <span className="crumb-arrow">/</span>
    <span>Pooja Essentials</span>
    <span className="crumb-arrow">/</span>
    <span>Brass Diyas</span>
    <span className="crumb-arrow">/</span>
    <span className="active-crumb">
      Brass Mushak Diya for Pooja
    </span>
  </div>

  <div className="product-main-grid"></div>
      {/* Main Grid Layout */}
      <div className="product-main-grid">
        
        {/* LEFT: Photo Section */}
        <div className="photo-section">
          <div className="main-image-box">
            <img
              src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=600&auto=format&fit=crop" 
              alt="Brass Mushak Diya"
              className="main-product-img"
            />
          </div>

          {/* Thumbnails */}
          <div className="thumbnails-grid">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className={`thumbnail-item ${index === 0 ? "active-thumbnail" : ""}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=150&auto=format&fit=crop"
                  alt={`thumbnail ${item}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Content Section */}
        <div className="details-section">
          {/* Breadcrumb */}
<div className="product-breadcrumb">
  <span className="crumb-home">🏠 Home</span>
  <span className="crumb-arrow">/</span>
  <span>Pooja Essentials</span>
  <span className="crumb-arrow">/</span>
  <span>Brass Diyas</span>
  <span className="crumb-arrow">/</span>
  <span className="active-crumb">
    Brass Mushak Diya for Pooja
  </span>
</div>
          

          {/* Title & Wishlist */}
          <div className="title-row">
            <h1 className="product-title">
              Brass Mushak Diya for Pooja | Antique Aarti Diya (3 Inch)
            </h1>
            <button className="wishlist-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>
          </div>

          {/* Ratings */}
          <div className="ratings-row">
            <span className="rating-num">5.0</span>
            <div className="stars">★★★★★</div>
            <span className="review-count">(1 review)</span>
          </div>

          {/* Pricing */}
          <div className="pricing-row">
            <span className="current-price">₹ 3,049.00</span>
            <span className="old-price">₹ 3,949.00</span>
            <span className="save-badge">SAVE ₹ 900.00</span>
          </div>

          {/* Quantity Selector Row */}
          <div className="quantity-container">
            <label className="section-label">Quantity</label>
            <div className="quantity-actions-row">
              <div className="quantity-selector">
                <button onClick={handleDecrement} className="qty-btn">-</button>
                <span className="qty-value">{quantity}</span>
                <button onClick={handleIncrement} className="qty-btn">+</button>
              </div>
              <button 
                onClick={() => alert(`Added ${quantity} item(s) to cart!`)}
                className="add-to-cart-btn"
              >
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Buy Now Button */}
          <button 
            onClick={() => alert("Proceeding to Quick Checkout...")}
            className="buy-now-btn"
          >
            BUY NOW <span className="divider">|</span> <span className="quick-pay-text">⚡ Quick Pay</span>
          </button>

          {/* Estimated Delivery */}
          <div className="delivery-box">
            <div className="delivery-col border-right">
              <p className="delivery-loc">📍 Mumbai <span className="express-tag">● Express</span></p>
              <p className="delivery-date">Jul 10 - Jul 11</p>
            </div>
            <div className="delivery-col">
              <p className="delivery-loc">🚚 All Over India</p>
              <p className="delivery-date">Jul 12 - Jul 15</p>
            </div>
          </div>

          {/* IMAGE 2: Coupons Dropdown Component */}
          <div className="coupons-dropdown-wrapper">
            <div 
              onClick={() => setShowCoupons(!showCoupons)}
              className="coupons-trigger-header"
            >
              <div className="coupons-info-left">
                <span className="percent-icon">%</span>
                <span className="promo-text">Get this for <strong className="highlight-price">₹ 2,752</strong></span>
                <span className="save-more-badge">Save ₹297</span>
              </div>
              <button className="view-coupons-toggle-btn">
                {showCoupons ? "Hide Coupons" : "View Coupons"}{" "}
                <span className="coupon-count-badge">2</span>
                <span className="arrow-indicator">{showCoupons ? "▲" : "▼"}</span>
              </button>
            </div>

            {/* Coupons Box (Accordion Content) */}
            {showCoupons && (
              <div className="coupons-content-panel">
                <div className="coupon-card coupon-online">
                  <div className="coupon-header-text">Get 5% Off <span className="check-mark">✓</span></div>
                  <p className="coupon-desc">Extra 5% OFF on all Online Payments</p>
                  <p className="coupon-footer">💳 GPay / Paytm</p>
                </div>

                <div className="coupon-card coupon-new-user">
                  <span className="new-customer-tag">New Customers</span>
                  <div className="coupon-header-text orange-text">Get 5% Off</div>
                  <p className="coupon-desc">5% OFF on Your First Order Only</p>
                  <div className="coupon-code-box">
                    <span className="code-text">WELCOME5</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); alert("Code 'WELCOME5' copied!"); }}
                      className="copy-btn"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bulk Discounts Section */}
          <div className="bulk-discounts-wrapper">
            <p className="section-label-gray">Bulk Discounts (Min. Quantity)</p>
            <div className="bulk-list-table">
              <div className="bulk-row highlighted-row">
                <div>
                  <span className="popular-tag">Most popular</span>
                  <span className="bulk-deal-text">Buy 2 get 5% off <span className="light-text">on each product</span></span>
                </div>
                <button className="grab-deal-btn">GRAB THIS DEAL</button>
              </div>
              <div className="bulk-row">
                <span className="bulk-deal-text">Buy 3 get 8% off <span className="light-text">on each product</span></span>
                <button className="grab-deal-btn">GRAB THIS DEAL</button>
              </div>
              <div className="bulk-row">
                <span className="bulk-deal-text">Buy 10 get 10% off <span className="light-text">on each product</span></span>
                <button className="grab-deal-btn">GRAB THIS DEAL</button>
              </div>
            </div>
          </div>

          {/* IMAGE 3: Bulk Pricing & Need Help Container */}
          <div className="extra-info-container">
            {/* Bulk Box */}
            <div className="bulk-enquiry-box">
              <div className="enquiry-title">
                <span>📦</span>
                <span>Looking for Bulk Pricing (30+ Qty)?</span>
              </div>
              <button onClick={() => setShowHelpPopup(true)} className="enquire-now-btn">
                Enquire Now →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges-row">
              <div className="badge-item border-right">
                <span>🚚</span>
                <span className="badge-txt">Free Shipping</span>
              </div>
              <div className="badge-item border-right">
                <span>🔄</span>
                <span className="badge-txt">7 Days Easy Returns</span>
              </div>
              <div className="badge-item">
                <span>🛡️</span>
                <span className="badge-txt">Trusted by 3,0,000+</span>
              </div>
            </div>

            {/* Need Help Action Row */}
            <div onClick={() => setShowHelpPopup(true)} className="need-help-trigger-bar">
              <div className="help-left-side">
                <span className="help-icon">🎧</span>
                <div>
                  <h4 className="help-title">Need Help?</h4>
                  <p className="help-sub">Get assistance or bulk order discounts</p>
                </div>
              </div>
              <span className="chevron-arrow">❯</span>
            </div>
          </div>

          {/* SKU */}
          <div className="sku-footer">
            Base SKU: <span className="sku-code">SVS-PE-DY-13</span>
          </div>

        </div>
      </div>

      {/* IMAGE 4: Help & Inquiry Modal Popup */}
      {showHelpPopup && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>How can we help you?</h3>
              <button onClick={() => setShowHelpPopup(false)} className="close-modal-btn">×</button>
            </div>
            <div className="modal-body">
              <div 
                onClick={() => { alert("Opening Bulk Order Form..."); setShowHelpPopup(false); }} 
                className="modal-option-card border-brown"
              >
                <div className="option-icon brown-text">📦</div>
                <div>
                  <h4 className="option-title hover-brown">Bulk Order Inquiry</h4>
                  <p className="option-desc">Get special discounts for orders above 30 pieces</p>
                </div>
              </div>

              <div 
                onClick={() => { alert("Opening General Support..."); setShowHelpPopup(false); }} 
                className="modal-option-card"
              >
                <div className="option-icon">❓</div>
                <div>
                  <h4 className="option-title hover-brown">General Help</h4>
                  <p className="option-desc">Questions about size, delivery, or other details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddtocartSection;