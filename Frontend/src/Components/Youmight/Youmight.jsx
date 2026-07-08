import React from 'react';
import './Youmight.css';

const Youmight = () => {
  // Mock data matching the 4 products in your reference image exactly
  const products = [
    {
      id: 1,
      discount: "-21%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Divine Brass Ganesha Diya (4.5 Inch)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "1 review",
      currentPrice: "₹ 2,749.00",
      oldPrice: "₹ 3,499.00"
    },
    {
      id: 2,
      discount: "-26%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Brass Vertical Swastika Symbol Diyas (Set of 2)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "22 reviews",
      currentPrice: "₹ 1,249.00",
      oldPrice: "₹ 1,699.00"
    },
    {
      id: 3,
      discount: "-19%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "OM ॐ Brass Oil Lamp Diya with Handle - Set of 2 (3 Inch)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "3 reviews",
      currentPrice: "₹ 1,049.00",
      oldPrice: "₹ 1,299.00"
    },
    {
      id: 4,
      discount: "-8%",
      imgUrl: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=400&auto=format&fit=crop",
      title: "Brass Lakshmi Ganesh Diya Set (4.5 Inch)",
      rating: "5.0",
      stars: "★★★★★",
      reviews: "1 review",
      currentPrice: "₹ 5,049.00",
      oldPrice: "₹ 5,499.00"
    }
  ];

  return (
    <div className="youmight-section-container">
      {/* Centered Heading */}
      <h2 className="youmight-main-title">You Might Also Like</h2>

      {/* Main Grid Slider Wrapper */}
      <div className="youmight-carousel-wrapper">
        
        {/* Left Navigation Arrow */}
        <button className="carousel-nav-arrow arrow-left" aria-label="Previous">
          ❮
        </button>

        {/* Products Grid */}
        <div className="youmight-products-grid">
          {products.map((product) => (
            <div key={product.id} className="youmight-product-card">
              
              {/* Image Box with Hover Overlay */}
              <div className="youmight-img-box">
                <span className="youmight-discount-tag">{product.discount}</span>
                <img src={product.imgUrl} alt={product.title} className="youmight-card-img" />
                
                {/* Hover UI Actions (Appears only on cursor hover) */}
                <div className="youmight-hover-overlay">
                  <button className="youmight-circle-btn wishlist-icon" title="Add to Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                  <button className="youmight-circle-btn view-icon" title="Quick View">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <button className="youmight-quickadd-btn">QUICK ADD</button>
                </div>
              </div>

              {/* Product Meta Data */}
              <div className="youmight-info-box">
                <h3 className="youmight-product-name">{product.title}</h3>
                
                {/* Star Ratings Row */}
                <div className="youmight-rating-row">
                  <span className="youmight-rating-score">{product.rating}</span>
                  <span className="youmight-stars-gold">{product.stars}</span>
                  <span className="youmight-reviews-count">{product.reviews}</span>
                </div>

                {/* Pricing info */}
                <div className="youmight-price-row">
                  <span className="youmight-price-current">{product.currentPrice}</span>
                  <span className="youmight-price-old">{product.oldPrice}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button className="carousel-nav-arrow arrow-right" aria-label="Next">
          ❯
        </button>

      </div>
    </div>
  );
};

export default Youmight;