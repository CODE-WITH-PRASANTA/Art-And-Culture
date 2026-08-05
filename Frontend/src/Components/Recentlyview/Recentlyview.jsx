import React from 'react';
import './Recentlyview.css';

const Recentlyview = () => {
  // Mock data strictly matching the details in your reference image
  const products = [
    {
      id: 1,
      discount: "-35%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Silver plated Kamdhenu Cow with Calf Idol",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "154 reviews",
      priceText: "From ₹ 1,299.00",
      oldPrice: "₹ 1,999.00",
      hasPriceRange: true
    },
    {
      id: 2,
      discount: null, // No discount tag on the second product in reference image
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Brass Floral Meenakari Pooja Thali (10 Inch)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "6 reviews",
      priceText: "₹ 5,899.00",
      oldPrice: null,
      hasPriceRange: false
    },
    {
      id: 3,
      discount: "-25%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Svastika Vel Mayil Murugan Idol (999 Silver Plated)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "14 reviews",
      priceText: "From ₹ 1,499.00",
      oldPrice: "₹ 1,999.00",
      hasPriceRange: true
    }
  ];

  return (
    <div className="rv-section-container">
      {/* Left-Aligned Heading matching reference image */}
      <h2 className="rv-main-title">Recently Viewed Products</h2>

      {/* Grid Layout Container */}
      <div className="rv-products-grid">
        {products.map((product) => (
          <div key={product.id} className="rv-product-card">
            
            {/* Image Box with Hover Overlay Actions */}
            <div className="rv-img-frame">
              {product.discount && (
                <span className="rv-discount-badge">{product.discount}</span>
              )}
              <img src={product.imgUrl} alt={product.title} className="rv-card-img" />
              
              {/* Actions Overlay: Triggered strictly on Cursor Hover */}
              <div className="rv-hover-actions-overlay">
                <button className="rv-circle-btn rv-wishlist-pos" title="Add to Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
                <button className="rv-circle-btn rv-view-pos" title="Quick View">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
                <button className="rv-quick-add-btn">QUICK ADD</button>
              </div>
            </div>

            {/* Product Meta Details */}
            <div className="rv-info-frame">
              <h3 className="rv-product-title">{product.title}</h3>
              
              {/* Star Ratings Row */}
              <div className="rv-ratings-row">
                <span className="rv-rating-score">{product.rating}</span>
                <span className="rv-stars-gold">{product.stars}</span>
                <span className="rv-reviews-count">{product.reviews}</span>
              </div>

              {/* Price Row */}
              <div className="rv-price-row">
                <span className="rv-price-current">{product.priceText}</span>
                {product.oldPrice && (
                  <span className="rv-price-old">{product.oldPrice}</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Recentlyview;