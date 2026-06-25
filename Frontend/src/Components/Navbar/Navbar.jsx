import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// Import ShopCart drawer component
import ShopCart from "../ShopCart/ShopCart";
// Icons
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaBlog } from "react-icons/fa";
import { MdCategory, MdOutlineLocalFlorist } from "react-icons/md";
import logo from "../../assets/Art and Culture Logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openQuotePanel, setOpenQuotePanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock background scrolling cleanly when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const portalNode = typeof document !== "undefined" ? document.body : null;

  const panel = (
    <>
      <div
        className={`quote-info-overlay ${openQuotePanel ? "show" : ""}`}
        onClick={() => setOpenQuotePanel(false)}
        aria-hidden={!openQuotePanel}
      />
    </>
  );

  return (
    <>
      {/* Background overlay for mobile drawer menu close trigger */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`} 
        onClick={closeMobileMenu}
      />

      <header className="navbar-header">
        <div className="navbar-container">

          {/* LEFT: Main Brand Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" />
          </Link>

          {/* CENTER: Slide-out Navigation Drawer */}
          <nav className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
            
            {/* Header section visible only on mobile viewports */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button
                type="button"
                className="mobile-menu-close-btn"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation Anchor List Container */}
            <div className="nav-links-container">
              <Link to="/" onClick={closeMobileMenu}><FaHome /> Home</Link>
              <Link to="/shop" onClick={closeMobileMenu}><MdCategory /> Shop</Link>
              <Link to="/blog" onClick={closeMobileMenu}><FaBlog /> Blog</Link>
              <Link to="/Pooja-essentials" onClick={closeMobileMenu}><MdOutlineLocalFlorist /> Pooja Essentials</Link>
              <Link to="/about" onClick={closeMobileMenu}><FaUserCircle /> About</Link>
              <Link to="/contact" onClick={closeMobileMenu}><AiFillHeart /> Contact</Link>
            </div>

            {/* Decorative base divider for the mobile navigation footer */}
            <div className="mobile-menu-footer">
              <div className="ganesha-decorative-dots">
                <span>✦</span><span>✦</span><span>✦</span><span>✦</span>
              </div>
            </div>
          </nav>

          {/* RIGHT: Utility Action Containers */}
          <div className="navbar-actions">

            <Link to="/wishlist" className="icon-link" onClick={closeMobileMenu}>
              <AiFillHeart />
            </Link>

            <button
              type="button"
              className="icon-link navbarAccountBtn"
              onClick={() => setShowLogin(true)}
            >
              <FaUserCircle />
            </button>

            {showLogin && (
              <div className="accountLoginOverlay" onClick={() => setShowLogin(false)}>
                <div className="accountLoginModal" onClick={(e) => e.stopPropagation()} />
              </div>
            )}

            <button
              type="button"
              className="icon-link cartnav__btn"
              onClick={() => setOpenCart(true)}
            >
              <FaShoppingCart />
            </button>

            {openCart && <ShopCart onClose={() => setOpenCart(false)} />}

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="quote-box-icon-btn mobile-hamburger-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>

            <Link to="/get-quote" className="navbar-quote-btn" onClick={closeMobileMenu}>
              Get Free Quotes
            </Link>

          </div>
        </div>
      </header>
      {portalNode ? ReactDOM.createPortal(panel, portalNode) : null}
    </>
  );
};

export default Navbar;