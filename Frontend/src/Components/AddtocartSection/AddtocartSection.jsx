import React, { useState } from 'react';
import './PoojaDetails.css'; // CSS फ़ाइल को इम्पोर्ट करें

const PoojaDetails = () => {
  // स्टेट्स (States)
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // आपकी इमेज गैलरी के लिए मॉक लिंक्स (इन्हें अपनी असली इमेजेस से बदलें)
  const images = [
    "https://images.unsplash.com/photo-1609137144813-2d201990da95?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  ];

  const handleQuantity = (type) => {
    if (type === 'inc') setQuantity(prev => prev + 1);
    if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="pooja-container">
      
      {/* हेडर ब्रेडक्रंब */}
      <header className="breadcrumb">
        <span>🏠</span>
        <span className="separator">&gt;</span>
        <span className="link">Pooja Essentials</span>
        <span className="separator">&gt;</span>
        <span className="current">Pooja Thali</span>
      </header>

      {/* मुख्य लेआउट */}
      <main className="main-content">
        
        {/* बायां भाग: मुख्य इमेज और स्लाइडर थंबनेल्स */}
        <div className="left-column">
          <div className="main-image-wrapper">
            <img src={images[activeImageIdx]} alt="Pooja Thali" className="main-product-image" />
            
            <button 
              className="slide-arrow prev" 
              onClick={() => setActiveImageIdx(prev => prev === 0 ? images.length - 1 : prev - 1)}
            >
              &#10094;
            </button>
            <button 
              className="slide-arrow next" 
              onClick={() => setActiveImageIdx(prev => prev === images.length - 1 ? 0 : prev + 1)}
            >
              &#10095;
            </button>
          </div>

          {/* थंबनेल नीचे की पट्टी */}
          <div className="thumbnail-slider">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`thumb-box ${activeImageIdx === idx ? 'active-thumb' : ''}`}
                onClick={() => setActiveImageIdx(idx)}
              >
                <img src={img} alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        {/* दायां भाग: प्रोडक्ट डिटेल्स और कूपन */}
        <div className="right-column">
          <div className="product-header">
            <div className="title-row">
              <h1>Brass Floral Meenakari Pooja Thali (10 Inch)</h1>
              <button 
                className={`wishlist-btn ${isWishlist ? 'fav' : ''}`} 
                onClick={() => setIsWishlist(!isWishlist)}
              >
                ♥
              </button>
            </div>
            
            <div className="rating-row">
              <span className="rating-num">5.0</span>
              <span className="stars">★★★★★</span>
              <span className="reviews-count">(6)</span>
            </div>

            <div className="price-tag">₹ 5,899.00</div>
          </div>

          <hr className="divider" />

          {/* क्वांटिटी और कार्ट बटन्स */}
          <div className="action-section">
            <label className="section-label">Quantity</label>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button onClick={() => handleQuantity('dec')}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantity('inc')}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={() => alert('Added to cart!')}>
                ADD TO CART
              </button>
            </div>
          </div>

          {/* बाय नाऊ बटन */}
          <button className="buy-now-btn" onClick={() => alert('Proceeding to Buy Now')}>
            BUY NOW 
            <span className="payment-icons">
              <span>GPay</span><span>paytm</span><span>UPI</span>
            </span>
            <span className="arrow-icon">&gt;</span>
          </button>

          {/* एस्टिमेटेड डिलीवरी टाइम */}
          <div className="delivery-box">
            <div className="delivery-col">
              <span className="del-title">📍 Estimated Delivery Time</span>
              <span className="loc">Mumbai <strong className="express-tag">⚡ Express</strong></span>
              <span className="dates">Jul 09 - Jul 10</span>
            </div>
            <div className="delivery-col border-left">
              <span className="del-title">&nbsp;</span>
              <span className="loc">All Over India</span>
              <span className="dates">Jul 11 - Jul 14</span>
            </div>
          </div>

          {/* व्यू कूपन्स सेक्शन */}
          <div className="coupon-container">
            <div className="coupon-top-bar">
              <div className="offer-info">
                <span className="percent-badge">%</span>
                <span>Get this for <strong className="bold-price">₹5,324</strong></span>
                <span className="save-badge">Save ₹575</span>
              </div>
              <button className="view-coupons-btn" onClick={() => setShowCoupons(!showCoupons)}>
                {showCoupons ? 'Hide Coupons' : 'View Coupons'} 
                <span className="coupon-count">2</span>
                <span className="chevron">{showCoupons ? '▲' : '▼'}</span>
              </button>
            </div>

            {/* इमेज 2 के अनुसार ड्रॉपडाउन होने वाला हिस्सा */}
            {showCoupons && (
              <div className="coupons-dropdown">
                <div className="coupon-card green-card">
                  <div className="card-headline">
                    <span className="green-text">Get 5% Off</span>
                    <span className="check-mark">✓</span>
                  </div>
                  <p className="card-sub">Extra 5% OFF on all Online Payments</p>
                  <div className="card-footer-icons">
                    <span>GPay</span><span>paytm</span><span>PhonePe</span>
                  </div>
                </div>

                <div className="coupon-card orange-card">
                  <span className="new-cust-badge">New Customers</span>
                  <div className="card-headline">
                    <span className="orange-text">Get 5% Off</span>
                  </div>
                  <p className="card-sub">5% OFF on Your First Order Only</p>
                  <div className="copy-code-box">
                    <span className="code-text">WELCOME5</span>
                    <button className="copy-btn" onClick={() => alert('Code Copied!')}>Copy</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* बल्क डिस्काउंट्स तालिका */}
          <div className="bulk-discount-box">
            <h3>BULK DISCOUNTS (MIN. QUANTITY)</h3>
            <div className="discount-row active-row">
              <div className="row-left">
                <span className="popular-tag">Most popular</span>
                <span>Buy 2 get 5% off on each product</span>
              </div>
              <span className="added-text">✓ ADDED</span>
            </div>
            <div className="discount-row">
              <span>Buy 3 get 8% off on each product</span>
              <button className="grab-btn">GRAB THIS DEAL</button>
            </div>
            <div className="discount-row">
              <span>Buy 10 get 10% off on each product</span>
              <button className="grab-btn">GRAB THIS DEAL</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PoojaDetails;