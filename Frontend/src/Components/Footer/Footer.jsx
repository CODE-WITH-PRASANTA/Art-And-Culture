import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/Art and Culture Logo.webp";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP PREMIUM STRIP */}
      <div className="footer-top-line">
        <p>✨ Think positive. Feel positive. Live positive ✨</p>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-middle">
        <div className="footer-container">
          <div className="footer-columns">

            {/* COLUMN 1 */}
            <div className="footer-column">
              <div className="footer-brand">
                <img src={logo} alt="logo" />
                <h3>Art & Culture</h3>
                <p>Traditional Handicrafts & Spiritual Artifacts</p>
              </div>

              <div className="footer-contact">
                <p>📍 Esplanade, Bhubaneswar</p>
                <p>📧 msarojkumar@zoho.com</p>
                <p>📞 +91 8117048317</p>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/best-sellers">Best Sellers</Link></li>
                <li><Link to="/sale">Sale</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-column">
              <h3>Categories</h3>
              <ul>
                <li><Link to="/category/god-murtis">God Murtis</Link></li>
                <li><Link to="/category/pooja-items">Pooja Items</Link></li>
                <li><Link to="/category/brass-idols">Brass Idols</Link></li>
                <li><Link to="/category/handicraft">Handicraft</Link></li>
                <li><Link to="/category/temple-decor">Temple Decor</Link></li>
                <li><Link to="/category/spiritual-jewelry">Spiritual Jewelry</Link></li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="footer-column">
              <h3>Visit Store</h3>

              <div className="map-box">
                <iframe
                  src="https://www.google.com/maps?q=Esplanade%20Mall%20Bhubaneswar&output=embed"
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>

              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#">FB</a>
                  <a href="#">IG</a>
                  <a href="#">X</a>
                  <a href="#">YT</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Art & Culture. All rights reserved.</p>

        <div className="footer-links">
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/termandcondition">Terms</Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/returns">Returns</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;