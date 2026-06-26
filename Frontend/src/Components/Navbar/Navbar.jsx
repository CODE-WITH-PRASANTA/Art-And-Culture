import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// Import ShopCart drawer component
import ShopCart from "../ShopCart/ShopCart";
// Icons
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart, FaEnvelope, FaPhone, FaBars, FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { FaHome, FaBlog, FaFire } from "react-icons/fa";
import { MdCategory, MdOutlineLocalFlorist } from "react-icons/md";
import logo from "../../assets/Art and Culture Logo.webp";
import image from "../../assets/01.webp";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openQuotePanel, setOpenQuotePanel] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const catBtnRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
        // Note: Make sure to define setActiveTab if needed, or leave it omitted
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Portal content for overlay + panel
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
      <header className="navbar-header">
        <div className="navbar-single-row navbar-container">

          {/* LEFT: Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* CENTER: NAV LINKS */}
          <nav className="navbar-links">
            <Link to="/"><FaHome /> Home</Link>
            <Link to="/shop"><MdCategory /> Shop</Link>
            <Link to="/blog"><FaBlog /> Blog</Link>
            <Link to="/Pooja-essentials"><MdOutlineLocalFlorist /> Pooja Essentials</Link>
            <Link to="/about"><FaUserCircle /> About</Link>
            <Link to="/contact"><AiFillHeart /> Contact</Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="navbar-actions">

            <Link to="/wishlist" className="icon-link">
              <AiFillHeart />
            </Link>

            <button
              className="icon-link navbarAccountBtn"
              onClick={() => setShowLogin(true)}
            >
              <FaUserCircle />
            </button>

            {showLogin && (
              <div
                className="accountLoginOverlay"
                onClick={() => setShowLogin(false)}
              >
                <div
                  className="accountLoginModal"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            <button
              className="icon-link cartnav__btn"
              onClick={() => setOpenCart(true)}
            >
              <FaShoppingCart />
            </button>

            {openCart && (
              <ShopCart
                onClose={() => setOpenCart(false)}
              />
            )}

            <button
              className="quote-box-icon-btn"
              onClick={() => setOpenQuotePanel(true)}
            >
              <FaBars />
            </button>

            <Link
              to="/get-quote"
              className="navbar-quote-btn"
            >
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