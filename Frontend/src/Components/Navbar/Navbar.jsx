import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCategory, MdLocalOffer } from "react-icons/md";
import { FaHome, FaBlog, FaFire } from "react-icons/fa";

import logo from "../../assets/Art and Culture Logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [openCat, setOpenCat] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("main"); // "main" or "categories"

  const dropdownRef = useRef(null);
  const catBtnRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        openCat &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        catBtnRef.current &&
        !catBtnRef.current.contains(e.target)
      ) {
        setOpenCat(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openCat]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  // Close mobile menu on resize > breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
        setActiveTab("main");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle handler reused by both hamburger buttons (desktop/mobile duplicates)
  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveTab("main");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="navbar-header" role="banner">
      {/* TOP NAV */}
      <div className="navbar-top navbar-container">
        {/* --- TOP ROW: logo (left) + mobile icons (right) --- */}
        <div className="navbar-top-row">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Brand Logo" />
          </Link>

          {/* mobile-only right bar (visible on smaller screens) */}
          <div className="navbar-right-bar navbar-right-bar--mobile">
            <button
              className="topbar-hamburger"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <Link to="/wishlist" className="icon-link" aria-label="Wishlist">
              <AiFillHeart />
            </Link>
            <Link to="/account" className="icon-link" aria-label="Account">
              <FaUserCircle />
            </Link>
            <Link to="/cart" className="icon-link" aria-label="Cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>

        {/* --- SEARCH (center on desktop, below top-row on mobile) --- */}
        <form
          className="navbar-search"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("search:", query);
          }}
          role="search"
          aria-label="Site search"
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" aria-label="Search button">
            <FiSearch />
          </button>
        </form>

        {/* --- Desktop-only right bar (placed in its own column on desktop) --- */}
        <div className="navbar-right-bar navbar-right-bar--desktop">
          <button
            className="topbar-hamburger"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/wishlist" className="icon-link" aria-label="Wishlist">
            <AiFillHeart />
          </Link>
          <Link to="/account" className="icon-link" aria-label="Account">
            <FaUserCircle />
          </Link>
          <Link to="/cart" className="icon-link" aria-label="Cart">
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      <hr className="navbar-divider" />

      {/* BOTTOM NAV */}
      <div className="navbar-bottom navbar-container">
        {/* Category Button */}
        <button
          ref={catBtnRef}
          className={`navbar-category-btn ${openCat ? "open" : ""}`}
          onClick={() => setOpenCat(!openCat)}
          aria-haspopup="true"
          aria-expanded={openCat}
        >
          <FaBars /> &nbsp; Categories
        </button>

        {/* Links */}
        <nav className="navbar-links" aria-label="Primary">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/shop"><MdCategory /> Shop</Link>
          <Link to="/blog"><FaBlog /> Blog</Link>
          <Link to="/best-sellers"><FaFire /> Best Sellers</Link>
          <Link to="/sale"><MdLocalOffer /> Sale</Link>
          <Link to="/about"><FaUserCircle /> About</Link>
          <Link to="/contact"><AiFillHeart /> Contact</Link>
        </nav>

        {/* Quote Button */}
        <Link to="/get-quote" className="navbar-quote-btn">
          Get Free Quotes
        </Link>
      </div>

      {/* CATEGORY DROPDOWN */}
      <div
        ref={dropdownRef}
        className={`navbar-category-dropdown ${openCat ? "show" : ""}`}
      >
        <ul>
          <li><a href="/category/statues">God Murtis</a></li>
          <li><a href="/category/pooja">Pooja Items</a></li>
          <li><a href="/category/brass">Brass Idols</a></li>
          <li><a href="/category/handicraft">Handicraft</a></li>
          <li><a href="/category/temple">Temple Decor</a></li>
          <li><a href="/category/jewelry">Spiritual Jewelry</a></li>
        </ul>
      </div>

      {/* MOBILE SIDEDRAWER */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="drawer-inner">
          <div className="drawer-top">
            <Link to="/" onClick={closeMobileMenu} className="drawer-logo">
              <img src={logo} alt="Logo" />
            </Link>
            <button className="drawer-close" onClick={closeMobileMenu} aria-label="Close menu"><FaTimes /></button>
          </div>

          <div className="drawer-search">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button aria-label="Search"><FiSearch /></button>
            </form>
          </div>

          {/* Tab Navigation */}
          <div className="drawer-tabs">
            <button 
              className={`drawer-tab ${activeTab === "main" ? "active" : ""}`}
              onClick={() => handleTabClick("main")}
            >
              Main Menu
            </button>
            <button 
              className={`drawer-tab ${activeTab === "categories" ? "active" : ""}`}
              onClick={() => handleTabClick("categories")}
            >
              Categories
            </button>
          </div>

          {/* Tab Content */}
          <div className="drawer-content">
            {/* Main Menu Content */}
            <div className={`drawer-tab-pane ${activeTab === "main" ? "active" : ""}`}>
              <nav className="drawer-links">
                <Link to="/" onClick={closeMobileMenu}><FaHome /> Home</Link>
                <Link to="/shop" onClick={closeMobileMenu}><MdCategory /> Shop</Link>
                <Link to="/blog" onClick={closeMobileMenu}><FaBlog /> Blog</Link>
                <Link to="/best-sellers" onClick={closeMobileMenu}><FaFire /> Best Sellers</Link>
                <Link to="/sale" onClick={closeMobileMenu}><MdLocalOffer /> Sale</Link>
                <Link to="/about" onClick={closeMobileMenu}><FaUserCircle /> About</Link>
                <Link to="/contact" onClick={closeMobileMenu}><AiFillHeart /> Contact</Link>
                
                <Link to="/get-quote" className="drawer-quote" onClick={closeMobileMenu}>Get Free Quotes</Link>
              </nav>
            </div>

            {/* Categories Content */}
            <div className={`drawer-tab-pane ${activeTab === "categories" ? "active" : ""}`}>
              <nav className="drawer-links">
                <Link to="/category/statues" onClick={closeMobileMenu}>God Murtis</Link>
                <Link to="/category/pooja" onClick={closeMobileMenu}>Pooja Items</Link>
                <Link to="/category/brass" onClick={closeMobileMenu}>Brass Idols</Link>
                <Link to="/category/handicraft" onClick={closeMobileMenu}>Handicraft</Link>
                <Link to="/category/temple" onClick={closeMobileMenu}>Temple Decor</Link>
                <Link to="/category/jewelry" onClick={closeMobileMenu}>Spiritual Jewelry</Link>
                
                <Link to="/get-quote" className="drawer-quote" onClick={closeMobileMenu}>Get Free Quotes</Link>
              </nav>
            </div>
          </div>

          <div className="drawer-footer">
            <Link to="/wishlist" aria-label="Wishlist" onClick={closeMobileMenu}><AiFillHeart /></Link>
            <Link to="/account" aria-label="Account" onClick={closeMobileMenu}><FaUserCircle /></Link>
            <Link to="/cart" aria-label="Cart" onClick={closeMobileMenu}><FaShoppingCart /></Link>
          </div>
        </div>

        {/* scrim to close drawer when clicking outside (mobile) */}
        <button
          className="drawer-scrim"
          onClick={closeMobileMenu}
          aria-hidden={!mobileMenuOpen}
        />
      </aside>
    </header>
  );
};

export default Navbar;