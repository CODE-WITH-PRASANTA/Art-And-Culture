import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


// Icons
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart,FaEnvelope,FaPhone, FaBars, FaTimes, FaMinus, FaPlus } from "react-icons/fa";
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
    const [openCart, setOpenCart] = useState(false);
  const [qty, setQty] = useState(1);
  {/* =========================
ADD THIS STATE ON TOP
INSIDE NAVBAR COMPONENT
========================= */}

const [showLogin, setShowLogin] = useState(false);

  const dropdownRef = useRef(null);
  const catBtnRef = useRef(null);
  {/* =========================
ADD THIS STATE ON TOP
INSIDE NAVBAR COMPONENT
========================= */}


  {/* =========================
ADD THIS STATE ON TOP
INSIDE NAVBAR COMPONENT
========================= */}



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

     <button
  className="icon-link navbarAccountBtn"
  onClick={() => setShowLogin(true)}
>
  <FaUserCircle />
</button>

{/* =========================
LOGIN MODAL
========================= */}

{showLogin && (
  <div
    className="accountLoginOverlay"
    onClick={() => setShowLogin(false)}
  >
    <div
      className="accountLoginModal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BTN */}

      <button
        className="accountLoginClose"
        onClick={() => setShowLogin(false)}
      >
        <FaTimes />
      </button>

      {/* =========================
      LEFT SIDE
      ========================= */}

      <div className="accountLoginLeft">

        <div className="accountLoginBrand">

          <h1>svastika</h1>

          <span>Powered by Premium Access</span>

          <p>
            Unlock coupons, profile access,
            wishlist and premium shopping
            experience with secure login.
          </p>

        </div>

        <div className="accountLoginCards">

          <div className="accountLoginCard">

            <div className="accountLoginIcon">
              ✨
            </div>

            <h3>Easy Returns</h3>

            <p>
              Enjoy 7 days easy return with
              trusted customer support.
            </p>

          </div>

          <div className="accountLoginCard">

            <div className="accountLoginIcon">
              🚚
            </div>

            <h3>Free Delivery</h3>

            <p>
              Fast and secure delivery all
              across India with COD.
            </p>

          </div>

          <div className="accountLoginCard">

            <div className="accountLoginIcon">
              💛
            </div>

            <h3>Happy Users</h3>

            <p>
              Trusted by thousands of happy
              premium customers.
            </p>

          </div>

        </div>

      </div>

      {/* =========================
      RIGHT SIDE
      ========================= */}

      <div className="accountLoginRight">

        <div className="accountLoginForm">

          <h2>Login</h2>

          <p className="accountLoginText">
            Enter Mobile Number
          </p>

          {/* INPUT */}

          <div className="accountLoginInputBox">

            <div className="accountLoginCountry">
              🇮🇳 +91
            </div>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
            />

          </div>

          {/* CHECKBOX */}

          <label className="accountLoginCheck">

            <input type="checkbox" />

            <span>
              Notify me for updates &
              exclusive offers
            </span>

          </label>

          {/* BUTTON */}

          <button className="accountLoginBtn">
            Continue
          </button>

          <p className="accountLoginTerms">
            By continuing you agree to
            Terms & Privacy Policy
          </p>

          <button className="accountLoginHelp">
            Trouble logging in?
          </button>

        </div>

      </div>

    </div>
  </div>
)}

{/* =========================
   CART BUTTON
=========================  */}

<button
  className="icon-link cartnav__btn"
  onClick={() => setOpenCart(true)}
>
  <FaShoppingCart />
</button>


{/* =========================
   CART DRAWER
=========================  */}

{/* OVERLAY */}

<div
  className={`cartdrawer__overlay ${
    openCart ? "cartdrawer__overlayActive" : ""
  }`}
  onClick={() => setOpenCart(false)}
></div>

{/* DRAWER */}

<div
  className={`cartdrawer ${
    openCart ? "cartdrawerActive" : ""
  }`}
>

  {/* TOP */}

  <div className="cartdrawer__top">

    <h2>Shopping Cart</h2>

    <button
      className="cartdrawer__close"
      onClick={() => setOpenCart(false)}
    >
      <FaTimes />
    </button>

  </div>

  {/* BODY */}

  <div className="cartdrawer__body">

    <div className="cartdrawer__item">

      <img
        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
        alt=""
      />

      <div className="cartdrawer__content">

        <h3>
          Brass Floral Meenakari Pooja Thali
          (10 Inch)
        </h3>

        <h4>₹ 5,899.00</h4>

        <div className="cartdrawer__bottomRow">

          {/* QTY */}

          <div className="cartdrawer__qtyBox">

            <button
              onClick={() =>
                setQty(qty > 1 ? qty - 1 : 1)
              }
            >
              <FaMinus />
            </button>

            <span>{qty}</span>

            <button onClick={() => setQty(qty + 1)}>
              <FaPlus />
            </button>

          </div>

          <button className="cartdrawer__remove">
            Remove
          </button>

        </div>

      </div>

    </div>

  </div>

  {/* FOOTER */}

  <div className="cartdrawer__footer">

    <div className="cartdrawer__gift">

      <input type="checkbox" />

      <p>
        Add Gift wrap for <span>₹ 64.00</span>
      </p>

    </div>

    <div className="cartdrawer__subtotal">

      <span>Subtotal</span>

      <h3>₹ 5,899.00</h3>

    </div>

    <button className="cartdrawer__buyBtn">
      BUY NOW
    </button>

    <Link
      to="/cart"
      className="cartdrawer__viewcart"
      onClick={() => setOpenCart(false)}
    >
      VIEW CART
    </Link>

    {/* FEATURES */}

    <div className="cartdrawer__features">

      <div className="cartdrawer__feature">
        <div className="cartdrawer__featureIcon">
          📦
        </div>
        <p>7 Days Easy Returns</p>
      </div>

      <div className="cartdrawer__feature">
        <div className="cartdrawer__featureIcon">
          ❤️
        </div>
        <p>24/7 Support</p>
      </div>

      <div className="cartdrawer__feature">
        <div className="cartdrawer__featureIcon">
          💳
        </div>
        <p>Secure Payments</p>
      </div>

    </div>

  </div>

</div>

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
