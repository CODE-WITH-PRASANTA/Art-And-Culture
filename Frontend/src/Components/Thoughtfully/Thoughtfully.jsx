import React from 'react';
import './Thoughtfully.css';

const Thoughtfully = () => {
  // Mock Data matching your reference images exactly
  const products = [
    {
      id: 1,
      discount: "-8%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Brass Kalpavriksha Tree Diya (6 Inch)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "2 reviews",
      currentPrice: "₹ 4,099.00",
      oldPrice: "₹ 4,499.00"
    },
    {
      id: 2,
      discount: "-8%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop", // Replace with Lakshmi Ganesh Diya Image
      title: "Brass Lakshmi Ganesh Diya Set (4.5 Inch)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "1 review",
      currentPrice: "₹ 5,049.00",
      oldPrice: "₹ 5,499.00"
    },
    {
      id: 3,
      discount: "-23%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop", // Replace with Swastika Diya Image
      title: "Brass Horizontal Swastika Symbol Diya (Set of 2)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "3 reviews",
      currentPrice: "₹ 1,149.00",
      oldPrice: "₹ 1,499.00"
    }
  ];

  return (
    <div className="thoughtfully-container">
      {/* Section Header Title */}
      <div className="thoughtfully-header">
        <span className="header-icon">🪔</span>
        <h2>Thoughtfully Paired</h2>
        <span className="header-icon">🪔</span>
      </div>

      {/* Products Grid Layout */}
      <div className="products-grid-layout">
        {products.map((product) => (
          <div key={product.id} className="product-item-card">
            
            {/* Image Container with Hover Actions */}
            <div className="product-img-wrapper">
              <span className="discount-badge-tag">{product.discount}</span>
              <img src={product.imgUrl} alt={product.title} className="card-main-img" />
              
              {/* Hover Buttons overlay */}
              <div className="hover-actions-overlay">
                <button className="action-circle-btn wishlist-icon-btn" title="Add to Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
                <button className="action-circle-btn view-icon-btn" title="Quick View">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
                <button className="quick-add-action-btn">QUICK ADD</button>
              </div>
            </div>

            {/* Product Meta Info Section */}
            <div className="product-info-details">
              <h3 className="card-product-title">{product.title}</h3>
              
              {/* Ratings Row */}
              <div className="card-ratings-row">
                <span className="rating-score">{product.rating}</span>
                <span className="rating-stars-gold">{product.stars}</span>
                <span className="rating-reviews-count">{product.reviews}</span>
              </div>

              {/* Price Details Row */}
              <div className="card-price-row">
                <span className="price-new">{product.currentPrice}</span>
                <span className="price-old">{product.oldPrice}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughtfully;