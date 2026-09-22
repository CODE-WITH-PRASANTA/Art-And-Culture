import React, { useState } from 'react';
import './BrassDiyasMain.css';
import { FaHeart, FaShoppingBag, FaStar, FaWhatsapp, FaTimes, FaMinus, FaPlus, FaLock } from 'react-icons/fa';
import bgPattern from '../../assets/Artall background.webp'; 

// --- इमेज इंपोर्ट्स ---
import img1 from '../../assets/Balaji_Face_Idol.webp';
import img2 from '../../assets/Lord-Balaji.webp';
import img3 from '../../assets/Balaji_Pocket.webp';
import img4 from '../../assets/svastika-lord-balaji-srinivas.webp';
import img5 from '../../assets/Lakshmi.webp';
import img6 from '../../assets/Charan01.webp';
import img7 from '../../assets/Newkrishnaframe01_1.jpg';
import img8 from '../../assets/Tirupati_Balaji_01_.webp';
import img9 from '../../assets/Brass_Lord_Balaji.webp';
import img10 from '../../assets/BalajiFaceIdolwithBalajiPocketTemple01.webp';
import img11 from '../../assets/Shanku_Chakra_with_Tirupati_Balaji.webp';
import img12 from '../../assets/LordBalajiandSinduriHanumanMurti01.webp';
import recImg1 from '../../assets/pic1.jpg';
import recImg2 from '../../assets/pic2.jpg';

const BrassDiyasMain = () => {
  // Checkbox State Management
  const [selectedFilters, setSelectedFilters] = useState({
    Gifting: false,
    'Home Decor': false,
    'Table Decor': false,
    'Pooja Room': false,
    Vastu: false,
    'Wall Hanging': false,
    'Premium Resin': false,
    'Pure Brass': false,
    '1-5 inches': false,
    '6-10 inches': false,
    '11-15 inches': false,
    'In stock': false,
    'Out of stock': false,
  });

  // Price Slider State
  const [maxPrice, setMaxPrice] = useState(19900);

  // Dropdown State
  const [sortOption, setSortOption] = useState('Best selling');

  // Side Cart Drawer States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Recommendations data for drawer
  const recommendations = [
    { id: 1, name: '10 inch silver coated Dh...', price: 8949, image: recImg1 },
    { id: 2, name: '12 inch Original Gold & ...', price: 19999, image: recImg2 },
  ];

  // Checkbox Toggle Handler
  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  // Clear All Filters
  const handleClearAll = () => {
    const cleared = {};
    Object.keys(selectedFilters).forEach((key) => {
      cleared[key] = false;
    });
    setSelectedFilters(cleared);
    setMaxPrice(19900);
  };

  // WhatsApp Handler
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hello! I need help choosing a product.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Add to Cart Handler
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setCartItem(product);
    setQuantity(1);
    setIsCartOpen(true);
  };

  const products = [
    {
      id: 1,
      name: 'Lord Balaji Face Idol | Pure Silver Plated',
      rating: 4.9,
      reviews: 277,
      price: 1249,
      oldPrice: 1999,
      image: img1,
      badge: 'Perfect Decor',
      purpose: ['Gifting', 'Table Decor', 'Home Decor'],
      material: 'Pure Brass',
      size: '1-5 inches',
      isSoldOut: false,
    },
    {
      id: 2,
      name: 'Balaji Charan with Shanku Chakra Namam - Gold Plated (2 Inch)',
      rating: 4.9,
      reviews: 266,
      price: 1249,
      oldPrice: 1999,
      image: img2,
      badge: 'Best for Car',
      purpose: ['Gifting', 'Table Decor', 'Vastu'],
      material: 'Premium Resin',
      size: '1-5 inches',
      isSoldOut: false,
    },
    {
      id: 3,
      name: 'Svastika Balaji Pocket Temple - Gold Plated',
      rating: 4.9,
      reviews: 285,
      price: 1249,
      oldPrice: 1499,
      image: img3,
      purpose: ['Gifting', 'Pooja Room'],
      material: 'Premium Resin',
      size: '1-5 inches',
      isSoldOut: false,
    },
    {
      id: 4,
      name: 'Lord Balaji (Srinivasa Mangapuram) Idol - Gold & Silver Plated (8 Inch)',
      rating: 5.0,
      reviews: 37,
      price: 6249,
      oldPrice: 6999,
      image: img4,
      purpose: ['Pooja Room', 'Home Decor'],
      material: 'Pure Brass',
      size: '6-10 inches',
      isSoldOut: false,
    },
    {
      id: 5,
      name: 'Lord Balaji (Srinivasa Mangapuram) Idol - Antique Finish (8 Inch)',
      rating: 5.0,
      reviews: 37,
      price: 2949,
      oldPrice: 3999,
      image: img5,
      purpose: ['Pooja Room', 'Vastu'],
      material: 'Pure Brass',
      size: '6-10 inches',
      isSoldOut: false,
    },
    {
      id: 6,
      name: 'Gajalakshmi Tirupati Balaji Murti - Gold & Silver Plated',
      rating: 5.0,
      reviews: 2,
      price: 5199,
      oldPrice: null,
      image: img6,
      purpose: ['Pooja Room', 'Home Decor', 'Gifting'],
      material: 'Pure Brass',
      size: '6-10 inches',
      isSoldOut: false,
    },
    {
      id: 7,
      name: 'Brass Tirupati Balaji Lakshmi Divine Diya (5.5 Inch)',
      rating: 5.0,
      reviews: 10,
      price: 3849,
      oldPrice: 4999,
      image: img7,
      purpose: ['Pooja Room', 'Gifting'],
      material: 'Pure Brass',
      size: '1-5 inches',
      isSoldOut: false,
    },
    {
      id: 8,
      name: 'Lord Balaji Face Idol - Silver Plated (4 Inch) with Balaji Charan...',
      rating: 5.0,
      reviews: 2,
      price: 1949,
      oldPrice: 2699,
      image: img8,
      purpose: ['Table Decor', 'Vastu'],
      material: 'Premium Resin',
      size: '1-5 inches',
      isSoldOut: false,
    },
    {
      id: 9,
      name: 'Tirupati Balaji - Wall Hanging Face Art Decor (12 inch)',
      rating: 4.7,
      reviews: 3,
      price: 2149,
      oldPrice: 3999,
      image: img9,
      purpose: ['Wall Hanging', 'Home Decor'],
      material: 'Pure Brass',
      size: '11-15 inches',
      isSoldOut: true,
    },
    {
      id: 10,
      name: 'Brass Tirupati Balaji Idol (Venkateshwara) with Garuda Base (6 Inch)',
      rating: 4.9,
      reviews: 15,
      price: 6199,
      oldPrice: 6299,
      image: img10,
      purpose: ['Pooja Room', 'Table Decor'],
      material: 'Pure Brass',
      size: '6-10 inches',
      isSoldOut: false,
    },
    {
      id: 11,
      name: 'Brass Lord Balaji and Mata Lakshmi For Pooja Room - 6 Inch',
      rating: 4.8,
      reviews: 16,
      price: 4899,
      oldPrice: 9999,
      image: img11,
      purpose: ['Pooja Room'],
      material: 'Pure Brass',
      size: '6-10 inches',
      isSoldOut: false,
    },
    {
      id: 12,
      name: 'Lord Balaji Face Idol - Silver Plated (4 Inch) with Pocket Temple',
      rating: 5.0,
      reviews: 5,
      price: 2149,
      oldPrice: 2850,
      image: img12,
      purpose: ['Gifting', 'Vastu'],
      material: 'Premium Resin',
      size: '1-5 inches',
      isSoldOut: false,
    },
  ];

  // फ़िल्टरिंग लॉजिक
  const activeFilters = Object.keys(selectedFilters).filter((key) => selectedFilters[key]);

  const filteredProducts = products.filter((product) => {
    if (product.price > maxPrice) return false;
    if (activeFilters.length === 0) return true;

    return activeFilters.every((filter) => {
      if (['Gifting', 'Home Decor', 'Table Decor', 'Pooja Room', 'Vastu', 'Wall Hanging'].includes(filter)) {
        return product.purpose.includes(filter);
      }
      if (['Premium Resin', 'Pure Brass'].includes(filter)) {
        return product.material === filter;
      }
      if (['1-5 inches', '6-10 inches', '11-15 inches'].includes(filter)) {
        return product.size === filter;
      }
      if (filter === 'In stock') return !product.isSoldOut;
      if (filter === 'Out of stock') return product.isSoldOut;

      return true;
    });
  });

  // सॉर्टिंग लॉजिक
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price, low to high') return a.price - b.price;
    if (sortOption === 'Price, high to low') return b.price - a.price;
    if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
    if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
    return 0;
  });

  const totalPrice = cartItem ? cartItem.price * quantity : 0;

  return (
    <>
      <div 
        className="brass-diyas-main"
        style={{ backgroundImage: `url(${bgPattern})` }}
      >
        <div className="brass-diyas-main__container">
          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="brass-diyas-main__sidebar">
            <div className="brass-diyas-main__sidebar-header">
              <h3 className="brass-diyas-main__refine-title">
                Refine <span className="brass-diyas-main__refine-count">{activeFilters.length}</span>
              </h3>
              <button className="brass-diyas-main__clear-btn" onClick={handleClearAll}>
                Clear all
              </button>
            </div>

            {/* Filter 1: Purpose / Usecase */}
            <div className="brass-diyas-main__filter-group">
              <h4 className="brass-diyas-main__filter-title">PURPOSE / USECASE</h4>
              {['Gifting', 'Home Decor', 'Table Decor', 'Pooja Room', 'Vastu', 'Wall Hanging'].map((item) => (
                <label key={item} className="brass-diyas-main__checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters[item]}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* Filter 2: Material */}
            <div className="brass-diyas-main__filter-group">
              <h4 className="brass-diyas-main__filter-title">MATERIAL</h4>
              {['Premium Resin', 'Pure Brass'].map((item) => (
                <label key={item} className="brass-diyas-main__checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters[item]}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* Dynamic Price Filter */}
            <div className="brass-diyas-main__filter-group">
              <h4 className="brass-diyas-main__filter-title">PRICE</h4>
              <input
                type="range"
                min="0"
                max="19900"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="brass-diyas-main__price-slider"
              />
              <div className="brass-diyas-main__price-display">
                <span>₹0</span>
                <span>₹{Number(maxPrice).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Filter 3: Size Range */}
            <div className="brass-diyas-main__filter-group">
              <h4 className="brass-diyas-main__filter-title">SIZE RANGE</h4>
              {['1-5 inches', '6-10 inches', '11-15 inches'].map((item) => (
                <label key={item} className="brass-diyas-main__checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters[item]}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* Filter 4: Availability */}
            <div className="brass-diyas-main__filter-group">
              <h4 className="brass-diyas-main__filter-title">AVAILABILITY</h4>
              {['In stock', 'Out of stock'].map((item) => (
                <label key={item} className="brass-diyas-main__checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters[item]}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* WhatsApp Support Box */}
            <div className="brass-diyas-main__whatsapp-box">
              <div className="brass-diyas-main__whatsapp-header">
                <span className="brass-diyas-main__whatsapp-icon">💬</span>
                <span className="brass-diyas-main__whatsapp-tag">NOT SURE WHICH?</span>
              </div>
              <p className="brass-diyas-main__whatsapp-desc">
                Tell us the occasion and our team will help you choose.
              </p>
              <button className="brass-diyas-main__whatsapp-btn" onClick={handleWhatsAppClick}>
                Ask on WhatsApp <FaWhatsapp className="brass-diyas-main__wa-icon" />
              </button>
            </div>
          </aside>

          {/* ================= RIGHT PRODUCTS AREA ================= */}
          <main className="brass-diyas-main__products-area">
            {/* Top Bar Header */}
            <div className="brass-diyas-main__products-header">
              <span className="brass-diyas-main__products-count">{sortedProducts.length} products</span>

              <div className="brass-diyas-main__sort-wrapper">
                <span className="brass-diyas-main__sort-label">SORT</span>
                <select
                  className="brass-diyas-main__sort-dropdown"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="Featured">Featured</option>
                  <option value="Most relevant">Most relevant</option>
                  <option value="Best selling">Best selling</option>
                  <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                  <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                  <option value="Price, low to high">Price, low to high</option>
                  <option value="Price, high to low">Price, high to low</option>
                </select>
              </div>
            </div>

            {/* Selected Active Tags */}
            <div className="brass-diyas-main__active-tags">
              {activeFilters.map((filterName) => (
                <span key={filterName} className="brass-diyas-main__active-tag">
                  {filterName}{' '}
                  <button onClick={() => handleCheckboxChange(filterName)}>×</button>
                </span>
              ))}
            </div>

            {/* Product Grid */}
            <div className="brass-diyas-main__products-grid">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <div key={product.id} className="brass-diyas-main__product-card">
                    {/* Image Area */}
                    <div className="brass-diyas-main__image-container">
                      <img src={product.image} alt={product.name} className="brass-diyas-main__product-img" />

                      {product.badge && <span className="brass-diyas-main__card-badge">{product.badge}</span>}
                      {product.isSoldOut && <span className="brass-diyas-main__sold-out-badge">SOLD OUT</span>}

                      {/* Hover Overlay Buttons */}
                      <div className="brass-diyas-main__hover-overlay">
                        <button className="brass-diyas-main__wishlist-btn" title="Add to Wishlist">
                          <FaHeart />
                        </button>
                        {!product.isSoldOut && (
                          <button 
                            className="brass-diyas-main__cart-btn"
                            onClick={(e) => handleAddToCart(product, e)}
                          >
                            <FaShoppingBag /> ADD TO CART
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="brass-diyas-main__product-info">
                      <h3 className="brass-diyas-main__product-name">{product.name}</h3>

                      {/* Rating */}
                      <div className="brass-diyas-main__product-rating">
                        <span className="brass-diyas-main__stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="brass-diyas-main__star-icon" />
                          ))}
                        </span>
                        <span className="brass-diyas-main__rating-num">{product.rating}</span>
                        <span className="brass-diyas-main__review-num">({product.reviews})</span>
                      </div>

                      {/* Pricing */}
                      <div className="brass-diyas-main__product-price">
                        <span className="brass-diyas-main__current-price">
                          ₹{product.price.toLocaleString('en-IN')}.00
                        </span>
                        {product.oldPrice && (
                          <span className="brass-diyas-main__old-price">
                            ₹{product.oldPrice.toLocaleString('en-IN')}.00
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="brass-diyas-main__no-products">
                  <p>कोई प्रोडक्ट नहीं मिला। कृपया फ़िल्टर बदलें।</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* ================= SIDE CART DRAWER ================= */}
      {isCartOpen && (
        <div className="brass-diyas-main__cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="brass-diyas-main__cart-drawer" onClick={(e) => e.stopPropagation()}>
            
            {/* Cart Header */}
            <div className="brass-diyas-main__cart-header">
              <h3>👜 {quantity} item{quantity > 1 ? 's' : ''}</h3>
              <button className="brass-diyas-main__cart-close" onClick={() => setIsCartOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Cart Body */}
            {cartItem && (
              <div className="brass-diyas-main__cart-body">
                <div className="brass-diyas-main__cart-item">
                  <img src={cartItem.image} alt={cartItem.name} className="brass-diyas-main__cart-item-img" />
                  <div className="brass-diyas-main__cart-item-details">
                    <h4>{cartItem.name}</h4>
                    <div className="brass-diyas-main__cart-item-pricing">
                      <span className="brass-diyas-main__cart-current-price">Rs. {(cartItem.price * quantity).toLocaleString()}.00</span>
                      {cartItem.oldPrice && (
                        <span className="brass-diyas-main__cart-old-price">Rs. {(cartItem.oldPrice * quantity).toLocaleString()}.00</span>
                      )}
                    </div>
                    
                    {/* Quantity Selector */}
                    <div className="brass-diyas-main__qty-box">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FaMinus /></button>
                      <span>{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                      <button className="brass-diyas-main__remove-text" onClick={() => setCartItem(null)}>Remove</button>
                    </div>
                  </div>
                </div>

                {/* You May Also Like Section */}
                <div className="brass-diyas-main__recommendations">
                  <h5>YOU MAY ALSO LIKE</h5>
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="brass-diyas-main__rec-item">
                      <img src={rec.image} alt={rec.name} />
                      <div className="brass-diyas-main__rec-info">
                        <p>{rec.name}</p>
                        <button className="brass-diyas-main__rec-add">+ Add to cart</button>
                      </div>
                      <span className="brass-diyas-main__rec-price">Rs. {rec.price.toLocaleString()}.00</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cart Footer */}
            {cartItem && (
              <div className="brass-diyas-main__cart-footer">
                <p className="brass-diyas-main__order-note">Add order note</p>
                <p className="brass-diyas-main__tax-note">Shipping & taxes calculated at checkout</p>
                <button className="brass-diyas-main__checkout-btn">
                  <FaLock /> CHECKOUT • RS. {totalPrice.toLocaleString()}.00
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BrassDiyasMain;