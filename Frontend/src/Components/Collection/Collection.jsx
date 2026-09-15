import React, { useRef, useState } from 'react';
import './Collection.css';
import { FaChevronLeft, FaChevronRight, FaTimes, FaMinus, FaPlus, FaLock } from 'react-icons/fa';

// --- लोकल इमेजेस इंपोर्ट करें ---
import vishnuImg from '../../assets/Lord-Vishnu.webp';
import lakshmiNarayanImg from '../../assets/Vishnu_Lakshmi.avif';
import pocketTempleImg from '../../assets/Balaji_Pocket_Temple_01.avif';
import cowImg from '../../assets/kamdhenu.avif';
import ganeshaImg from '../../assets/Ganesh_Chaturthi.webp';
import poojaImg from '../../assets/poojaph2.webp';
import godIdolsImg from '../../assets/Tirupati_Balaji_Venkateswara.avif';
import recImg1 from '../../assets/pic1.jpg';
import recImg2 from '../../assets/pic2.jpg';

const Collection = () => {
  const sliderRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Recommendations data
  const recommendations = [
    { id: 1, name: '10 inch silver coated Dh...', price: 8949, image: recImg1 },
    { id: 2, name: '12 inch Original Gold & ...', price: 19999, image: recImg2 },
  ];

  // स्लाइडर को बाएं या दाएं स्क्रॉल करने का फ़ंक्शन
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.6;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const collections = [
    {
      id: 1,
      image: vishnuImg,
      title: 'Lord Vishnu Murti',
      subtitle: 'ओम् नमो नारायणाय',
      price: 1499,
      oldPrice: 3000
    },
    {
      id: 2,
      image: lakshmiNarayanImg,
      title: 'Lakshmi Narayan',
      subtitle: 'लक्ष्मी नारायण',
      price: 2499,
      oldPrice: 4500
    },
    {
      id: 3,
      image: pocketTempleImg,
      title: 'Pocket Temple',
      subtitle: 'Compact Shrine',
      price: 999,
      oldPrice: 1800
    },
    {
      id: 4,
      image: cowImg,
      title: 'Gold & Silver Plated Idols',
      subtitle: 'Divine Series',
      price: 3499,
      oldPrice: 5999
    },
    {
      id: 5,
      image: ganeshaImg,
      title: 'Car Dashboard Idols',
      subtitle: 'शुभ यात्रा',
      price: 799,
      oldPrice: 1499
    },
    {
      id: 6,
      image: poojaImg,
      title: 'Pooja Essentials',
      subtitle: 'दीप ज्योति',
      price: 649,
      oldPrice: 1200
    },
    {
      id: 7,
      image: godIdolsImg,
      title: 'God Idols',
      subtitle: 'श्री देव',
      price: 1999,
      oldPrice: 3500
    }
  ];

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    setCartItem(item);
    setQuantity(1);
    setIsCartOpen(true);
  };

  const totalPrice = cartItem ? cartItem.price * quantity : 0;

  return (
    <>
      <section className="collection">
        <div className="collection__container">
          {/* Header Section */}
          <div className="collection__header">
            <div className="collection__header-text">
              <span className="collection__section-subtitle">RELEVANT COLLECTIONS</span>
              <h2 className="collection__section-title">
                Explore <span className="collection__highlight-text">More</span>
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="collection__slider-arrows">
              <button className="collection__nav-btn" onClick={() => scroll('left')} aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="collection__nav-btn" onClick={() => scroll('right')} aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Scrollable Cards Track */}
          <div className="collection__slider" ref={sliderRef}>
            {collections.map((item) => (
              <div key={item.id} className="collection__arch-card">
                <img src={item.image} alt={item.title} className="collection__arch-card-img" />
                <div className="collection__arch-card-overlay">
                  <h3 className="collection__card-title">{item.title}</h3>
                  {item.subtitle && <p className="collection__card-subtitle">{item.subtitle}</p>}
                  <button 
                    className="collection__add-cart-btn"
                    onClick={(e) => handleAddToCart(item, e)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIDE CART DRAWER ================= */}
      {isCartOpen && (
        <div className="collection__cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="collection__cart-drawer" onClick={(e) => e.stopPropagation()}>
            
            {/* Cart Header */}
            <div className="collection__cart-header">
              <h3>🛒 {quantity} item{quantity > 1 ? 's' : ''}</h3>
              <button className="collection__cart-close" onClick={() => setIsCartOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Cart Body */}
            {cartItem && (
              <div className="collection__cart-body">
                <div className="collection__cart-item">
                  <img src={cartItem.image} alt={cartItem.title} className="collection__cart-item-img" />
                  <div className="collection__cart-item-details">
                    <h4>{cartItem.title} | {cartItem.subtitle}</h4>
                    <div className="collection__cart-item-pricing">
                      <span className="collection__current-price">Rs. {(cartItem.price * quantity).toLocaleString()}.00</span>
                      {cartItem.oldPrice && (
                        <span className="collection__old-price">Rs. {(cartItem.oldPrice * quantity).toLocaleString()}.00</span>
                      )}
                    </div>
                    
                    {/* Quantity controls */}
                    <div className="collection__qty-box">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FaMinus /></button>
                      <span>{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                      <button className="collection__remove-text" onClick={() => setCartItem(null)}>Remove</button>
                    </div>
                  </div>
                </div>

                {/* You May Also Like Section */}
                <div className="collection__recommendations">
                  <h5>YOU MAY ALSO LIKE</h5>
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="collection__rec-item">
                      <img src={rec.image} alt={rec.name} />
                      <div className="collection__rec-info">
                        <p>{rec.name}</p>
                        <button className="collection__rec-add">+ Add to cart</button>
                      </div>
                      <span className="collection__rec-price">Rs. {rec.price.toLocaleString()}.00</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cart Footer */}
            {cartItem && (
              <div className="collection__cart-footer">
                <p className="collection__order-note">Add order note</p>
                <p className="collection__tax-note">Shipping & taxes calculated at checkout</p>
                <button className="collection__checkout-btn">
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

export default Collection;