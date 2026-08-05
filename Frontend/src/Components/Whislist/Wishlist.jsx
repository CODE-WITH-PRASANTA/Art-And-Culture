import React, { useState } from 'react';
import { Heart, Eye, Star, ChevronRight } from 'lucide-react';
import './Wishlist.css';

// डमी डेटा (इसे आप अपने ग्लोबल स्टेट या API से बदल सकते हैं)
const INITIAL_WISHLIST = [
  {
    id: 1,
    title: "Dagdusheth Halwai Ganpati Murti - Gold Plated",
    image: "https://images.unsplash.com/photo-1609511853151-e5227490f899?q=80&w=500&auto=format&fit=crop", // डमी इमेज (अपनी ओरिजिनल इमेज पाथ से बदलें)
    discount: "-26%",
    rating: 5.0,
    price: "2,199.00",
    oldPrice: "2,999.00"
  },
  {
    id: 2,
    title: "Silver plated Kamdhenu Cow with Calf Idol",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500&auto=format&fit=crop", // डमी इमेज
    discount: "-35%",
    rating: 5.0,
    price: "1,299.00",
    oldPrice: "1,999.00"
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);

  // प्रोडक्ट को विशलिस्ट से हटाने के लिए (Unwish function)
  const handleRemoveWish = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const handleHomeClick = () => {
    // यहाँ अपनी होम नेविगेशन लॉजिक जोड़ें, जैसे: navigate('/')
    alert("Redirecting to Home...");
  };

  const handleBackToShopping = () => {
    // यहाँ अपनी शॉप नेविगेशन लॉजिक जोड़ें
    alert("Redirecting to Shop...");
  };

  return (
    <div className="wishlist-container">
      {/* टॉप ब्रेडक्रंब सेक्शन (दोनों इमेजेस में सेम है) */}
      <div className="wishlist-header">
        <h1 className="wishlist-title">Wishlist</h1>
        <div className="wishlist-breadcrumb">
          <span onClick={handleHomeClick} className="breadcrumb-link">Home</span>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">Wishlist</span>
        </div>
      </div>
      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty-state">
          <p>
            No products were added to the wishlist page.{" "}
            <span onClick={handleBackToShopping} className="back-shopping-link">
              Back to shopping
            </span>
          </p>
        </div>
      ) : (
        /* कंडीशन 2: जब विशलिस्ट में प्रोडक्ट्स हों (Image 2 के अनुसार) */
        <div className="wishlist-grid-wrapper">
          <div className="wishlist-grid">
            {wishlistItems.map((product) => (
              <div key={product.id} className="product-card">
                
                {/* इमेज और होवर इफेक्ट्स */}
                <div className="product-image-container">
                  <span className="discount-badge">{product.discount}</span>
                  <img src={product.image} alt={product.title} className="product-image" />
                  
                  {/* साइड आइकॉन जो होवर पर दिखेंगे */}
                  <div className="hover-action-icons">
                    <button 
                      className="action-icon-btn active-heart" 
                      onClick={() => handleRemoveWish(product.id)}
                      title="Remove from Wishlist"
                    >
                      <Heart size={18} fill="#f5ebe6" color="#333" />
                    </button>
                    <button className="action-icon-btn" title="Quick View">
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* बॉटम 'Select Options' बटन जो होवर पर ऊपर आएगा */}
                  <div className="select-options-overlay">
                    <button className="select-options-btn">SELECT OPTIONS</button>
                  </div>
                </div>

                {/* प्रोडक्ट की डिटेल्स */}
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  
                  {/* रेटिंग स्टार्स */}
                  <div className="product-rating">
                    <span className="rating-num">{product.rating.toFixed(1)}</span>
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#d4a373" color="#d4a373" />
                      ))}
                    </div>
                  </div>

                  {/* कीमतें */}
                  <div className="product-price-row">
                    <span className="price-from">From</span>
                    <span className="current-price">₹ {product.price}</span>
                    <span className="old-price">₹ {product.oldPrice}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;