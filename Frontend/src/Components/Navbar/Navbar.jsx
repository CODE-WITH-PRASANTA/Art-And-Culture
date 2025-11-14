import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart, FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdCategory, MdLocalOffer } from "react-icons/md";
import { FaHome, FaBlog, FaFire } from "react-icons/fa";

import logo from "../../assets/Art and Culture Logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [openCat, setOpenCat] = useState(false);

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

  return (
    <header className="navbar-header">

      {/* TOP NAV */}
      <div className="navbar-top navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Brand Logo" />
        </Link>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
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

        {/* Icons */}
        <div className="navbar-icons">
          <Link to="/wishlist"><AiFillHeart /></Link>
          <Link to="/account"><FaUserCircle /></Link>
          <Link to="/cart"><FaShoppingCart /></Link>
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
        >
          <FaBars /> &nbsp; Categories
        </button>

        {/* Links */}
        <nav className="navbar-links">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/shop"><MdCategory /> Shop</Link>
          <Link to="/blog"><FaBlog /> Blog</Link>
          <Link to="/best-sellers"><FaFire /> Best Sellers</Link>
          <Link to="/sale"><MdLocalOffer /> Sale</Link>
          <Link to="/about"><FaUserCircle /> About</Link>
          <Link to="/contact"><AiFillHeart /> Contact</Link>
        </nav>

        {/* Button */}
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

    </header>
  );
};

export default Navbar;
