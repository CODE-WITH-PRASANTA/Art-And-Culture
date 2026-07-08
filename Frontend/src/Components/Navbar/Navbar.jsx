import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ShopCart from "../ShopCart/ShopCart";
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

  // ✅ KEY FIX: close menu first, then let Link handle navigation
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

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
      {/* ✅ FIX: pointer-events must not block nav links — handle via CSS z-index */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />

      <header className="navbar-header">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" />
          </Link>

          <nav className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>

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

            {/* ✅ FIX: Each link uses onClick={closeMobileMenu} and has z-index above overlay */}
            <div className="nav-links-container">
              <Link to="/" onClick={closeMobileMenu}>
                <FaHome /> Home
              </Link>
              <Link to="/shop" onClick={closeMobileMenu}>
                <MdCategory /> Shop
              </Link>
              <Link to="/blog" onClick={closeMobileMenu}>
                <FaBlog /> Blog
              </Link>
              <Link to="/Pooja-essentials" onClick={closeMobileMenu}>
                <MdOutlineLocalFlorist /> Pooja Essentials
              </Link>
              <Link to="/about" onClick={closeMobileMenu}>
                <FaUserCircle /> About
              </Link>
              <Link to="/contact" onClick={closeMobileMenu}>
                <AiFillHeart /> Contact
              </Link>
            </div>

            <div className="mobile-menu-footer">
              <div className="ganesha-decorative-dots">
                <span>✦</span><span>✦</span><span>✦</span><span>✦</span>
              </div>
            </div>
          </nav>

          <div className="navbar-actions">

            <Link to="/wishlist" className="icon-link" onClick={closeMobileMenu}>
              <AiFillHeart />
            </Link>

           <Link to="/account" className="navbarActionBox" onClick={closeMobileMenu}>
    <FaUserCircle className="navbarActionIcon" />
  </Link>

            {showLogin && (
              <div className="accountLoginOverlay" onClick={() => setShowLogin(false)}>
                <div className="accountLoginModal" onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h3 style={{ margin: 0, color: "var(--primary-color)" }}>Account Login</h3>
                    <button
                      onClick={() => setShowLogin(false)}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-dark)" }}>Please sign in to access your account.</p>
                </div>
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