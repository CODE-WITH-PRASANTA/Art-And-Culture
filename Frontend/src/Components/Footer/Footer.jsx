import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import logo from '../../assets/Art and Culture Logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Middle Section - 4 Columns */}
      <div className="footer-middle">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Column 1 - Contact Information */}
            <div className="footer-column">
              <div className="footer-logo-section">
                <div className="footer-brand-compact">
                  <h3 className="footer-brand-name">Art & Culture</h3>
                  <p className="footer-tagline">Traditional Handicrafts & Spiritual Artifacts</p>
                </div>
                
                {/* Contact info in first column */}
                <div className="footer-contact-first-col">
                  <div className="contact-item-first">
                    <div className="contact-icon">📍</div>
                    <div className="contact-content">
                      <strong>Address</strong>
                      <p>638 #OU, Esplanade, Bhubaneswar</p>
                    </div>
                  </div>
                  
                  <div className="contact-item-first">
                    <div className="contact-icon">📧</div>
                    <div className="contact-content">
                      <strong>Email</strong>
                      <p>msarojkumar@zoho.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item-first">
                    <div className="contact-icon">📞</div>
                    <div className="contact-content">
                      <strong>Phone</strong>
                      <p>+91 8117048317</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="footer-column">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/best-sellers">Best Sellers</Link></li>
                <li><Link to="/sale">Sale</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3 - Categories */}
            <div className="footer-column">
              <h3 className="footer-column-title">Our Categories</h3>
              <ul className="footer-categories">
                <li><Link to="/category/god-murtis">God Murtis</Link></li>
                <li><Link to="/category/pooja-items">Pooja Items</Link></li>
                <li><Link to="/category/brass-idols">Brass Idols</Link></li>
                <li><Link to="/category/handicraft">Handicraft</Link></li>
                <li><Link to="/category/temple-decor">Temple Decor</Link></li>
                <li><Link to="/category/spiritual-jewelry">Spiritual Jewelry</Link></li>
              </ul>
            </div>

            {/* Column 4 - Google Maps & Social Media */}
            <div className="footer-column">
              <h3 className="footer-column-title">Visit Our Store</h3>
              <div className="map-container">
                <div className="map-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.3848734419503!2d85.85360327428496!3d20.29138101269792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b2f08a9dae5%3A0x41660e7497e76469!2sEsplanade%20Mall%20Bhubaneswar!5e1!3m2!1sen!2sin!4v1763200892521!5m2!1sen!2sin" 
                    className="google-map"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Art and Culture Store Location"
                  ></iframe>
                </div>
                <div className="map-overlay">
                  <div className="store-info">
                    <h4>📍 Our Store</h4>
                    <p>Visit us at Esplanade Mall, Bhubaneswar</p>
                    <div className="store-hours">
                      <strong>Store Hours:</strong>
                      <p>Mon-Sun: 10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media with Logo */}
              <div className="footer-social">
                <div className="social-logo-section">
                  <img 
                    src={logo} 
                    alt="Art and Culture Logo" 
                    className="social-logo"
                  />
                  <div className="social-text">
                    <h4>Follow Us</h4>
                    <p>Stay connected with Art & Culture</p>
                  </div>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook" aria-label="Facebook">
                    <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon instagram" aria-label="Instagram">
  <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5zm0 7.2A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zm4.8-8.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"/>
  </svg>
</a>

<a href="#" className="social-icon twitter" aria-label="X (Twitter)">
  <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22L14.3 10.2 23 22h-7.3l-5.7-7.6L3.8 22H2l8.3-8.8L2 2h7.4l5.2 7.1L18.9 2zM17.7 20.4h2.1L8.1 3.5H5.9l11.8 16.9z"/>
  </svg>
</a>

                  <a href="#" className="social-icon youtube" aria-label="YouTube">
                    <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2025 <strong>Art & Culture</strong>. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <Link to="/privacypolicy">Privacy Policy</Link>
              <Link to="/termandcondition">Terms of Service</Link>
              <Link to="/shipping">Shipping Info</Link>
              <Link to="/returns">Returns</Link>
            </div>
          </div>
          
          {/* Design and Development Credit */}
          <div className="footer-credit">
            <p>Design and developed by <a href="https://prwebstock.com/" target="_blank" rel="noopener noreferrer">prwebstock.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;