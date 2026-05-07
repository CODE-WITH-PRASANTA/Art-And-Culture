import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// Icons
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart,FaEnvelope,FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCategory, MdLocalOffer , MdOutlineLocalFlorist } from "react-icons/md";
import { FaHome, FaBlog, FaFire } from "react-icons/fa";


import logo from "../../assets/Art and Culture Logo.webp";
import image from "../../assets/01.webp";
import "./Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [openCat, setOpenCat] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("main"); // "main" or "categories"
  const [openQuotePanel, setOpenQuotePanel] = useState(false);

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

  // Lock body scroll when mobile menu OR quote panel open
  useEffect(() => {
    if (mobileMenuOpen || openQuotePanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, openQuotePanel]);

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

  // Close quote panel on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && openQuotePanel) setOpenQuotePanel(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openQuotePanel]);

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveTab("main");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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

      <aside
        className={`quote-info-panel ${openQuotePanel ? "open" : ""}`}
        aria-hidden={!openQuotePanel}
      >
        <div className="quote-info-inner">
          <button
            className="quote-info-close"
            onClick={() => setOpenQuotePanel(false)}
            aria-label="Close info panel"
          >
            <FaTimes />
          </button>

          <div className="quote-info-logo">
            <img src={logo} alt="Logo" />
          </div>

          <p className="quote-info-desc">
            We provide fast & reliable quotes for temple decor, brass idols, handicrafts and more.
            Reach out anytime — we’re happy to help.
          </p>

          <h3 className="quote-info-title">Get In Touch</h3>

          <ul className="quote-info-list">
            <li>
              <span className="quote-info-icon"><FaEnvelope /></span>
              <div>
                <p className="muted">Email</p>
                <p>support@yourdomain.com</p>
              </div>
            </li>
            <li>
              <span className="quote-info-icon"><FaPhone /></span>
              <div>
                <p className="muted">Phone</p>
                <p>+91 98765 43210</p>
              </div>
            </li>
          </ul>

          <h3 className="quote-info-title">Latest News</h3>

          <div className="quote-news-list">
            <div className="quote-news-item">
              <img src={image} alt="news 1" />
              <div>
                <span className="quote-news-date">December 3, 2023</span>
                <p className="quote-news-text">A very warm welcome to our new Treasurer</p>
              </div>
            </div>

            <div className="quote-news-item">
              <img src={image} alt="news 2" />
              <div>
                <span className="quote-news-date">February 15, 2023</span>
                <p className="quote-news-text">German kinder and garten mean child</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
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

    {/* CATEGORY */}
    <button
      ref={catBtnRef}
      className={`navbar-category-btn ${openCat ? "open" : ""}`}
      onClick={() => setOpenCat(!openCat)}
    >
      <FaBars /> Categories
    </button>
    {/* CATEGORY DROPDOWN */}
<div
  ref={dropdownRef}
  className={`navbar-category-dropdown ${openCat ? "show" : ""}`}
>
  <ul>
    <li><Link to="/category/idols">🪔 Brass Idols</Link></li>
    <li><Link to="/category/pooja">🌸 Pooja Items</Link></li>
    <li><Link to="/category/decor">🏺 Temple Decor</Link></li>
    <li><Link to="/category/handicraft">🎨 Handicrafts</Link></li>
    <li><Link to="/category/offers">🔥 Special Offers</Link></li>
  </ul>
</div>

    {/* CENTER: NAV LINKS */}
    <nav className="navbar-links">
      <Link to="/"><FaHome /> Home</Link>
      <Link to="/shop"><MdCategory /> Shop</Link>
      <Link to="/blog"><FaBlog /> Blog</Link>
      <Link to="/best-sellers"><FaFire /> Best Sellers</Link>
      <Link to="/Pooja-essentials"><MdOutlineLocalFlorist /> Pooja Essentials</Link>
      <Link to="/about"><FaUserCircle /> About</Link>
      <Link to="/contact"><AiFillHeart /> Contact</Link>
    </nav>

    {/* SEARCH */}
    <form className="navbar-search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </form>

    {/* RIGHT ICONS */}
    <div className="navbar-actions">

      <Link to="/wishlist" className="icon-link">
        <AiFillHeart />
      </Link>

      <Link to="/account" className="icon-link">
        <FaUserCircle />
      </Link>

      <Link to="/cart" className="icon-link">
        <FaShoppingCart />
      </Link>

      {/* TOGGLE PANEL */}
      <button
        className="quote-box-icon-btn"
        onClick={() => setOpenQuotePanel(true)}
      >
        <FaBars />
      </button>

      {/* QUOTE BUTTON */}
      <Link to="/get-quote" className="navbar-quote-btn">
        Get Free Quotes
      </Link>

    </div>
  </div>
</header>

      {/* render the overlay + panel into document.body via portal for bulletproof stacking */}
      {portalNode ? ReactDOM.createPortal(panel, portalNode) : null}
    </>
  );
};

export default Navbar;
