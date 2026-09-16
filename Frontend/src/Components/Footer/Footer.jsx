import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/Artlogo.webp";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* DECORATIVE CORNER FLORALS */}
      <div className="footer-decor footer-decor-left" aria-hidden="true">
        <svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg">
          {/* back leaf mass */}
          <path d="M30,220 C10,150 15,90 30,60 C45,90 50,150 30,220 Z" fill="#333d21" transform="rotate(-32 30 220)" />
          <path d="M70,222 C50,150 55,85 70,50 C85,85 90,150 70,222 Z" fill="#4c5a34" transform="rotate(-12 70 222)" />
          <path d="M118,224 C98,155 103,90 118,55 C133,90 138,155 118,224 Z" fill="#3f4a2c" transform="rotate(4 118 224)" />
          <path d="M168,220 C148,152 153,90 168,58 C183,90 188,152 168,220 Z" fill="#4c5a34" transform="rotate(22 168 220)" />
          <path d="M215,214 C197,155 201,98 215,68 C229,98 233,155 215,214 Z" fill="#333d21" transform="rotate(38 215 214)" />

          {/* mid terracotta leaves */}
          <path d="M55,212 C42,168 45,128 55,102 C65,128 68,168 55,212 Z" fill="#7a3820" transform="rotate(-46 55 212)" />
          <path d="M95,214 C82,170 85,130 95,104 C105,130 108,170 95,214 Z" fill="#9c4a2c" transform="rotate(-14 95 214)" />
          <path d="M140,216 C127,172 130,132 140,106 C150,132 153,172 140,216 Z" fill="#b15c34" transform="rotate(12 140 216)" />
          <path d="M182,210 C170,168 173,130 182,106 C191,130 194,168 182,210 Z" fill="#8a4023" transform="rotate(34 182 210)" />

          {/* blush accent leaves */}
          <path d="M78,178 C69,150 71,122 78,102 C85,122 87,150 78,178 Z" fill="#c98a86" transform="rotate(-24 78 178)" />
          <path d="M132,182 C123,154 125,126 132,106 C139,126 141,154 132,182 Z" fill="#dba39d" transform="rotate(18 132 182)" />

          {/* dahlia blossom */}
          <g transform="translate(96,138)">
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(0)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(45)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(90)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(135)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(180)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(225)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(270)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(315)" />
            <circle r="8" fill="#f2dfb8" />
          </g>

          {/* small blossom */}
          <g transform="translate(158,152) scale(0.65)">
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(20)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(65)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(110)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(155)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(200)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(245)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(290)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(335)" />
            <circle r="7" fill="#caa46a" />
          </g>

          {/* berries */}
          <circle cx="55" cy="158" r="6" fill="#e6c68f" />
          <circle cx="188" cy="148" r="5" fill="#f2dfb8" />
          <circle cx="118" cy="188" r="4.5" fill="#b15c34" />
          <circle cx="70" cy="130" r="4" fill="#caa46a" />
          <circle cx="205" cy="172" r="5.5" fill="#dba39d" />
        </svg>
      </div>

      <div className="footer-decor footer-decor-right" aria-hidden="true">
        <svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg">
          {/* back leaf mass */}
          <path d="M30,220 C10,150 15,90 30,60 C45,90 50,150 30,220 Z" fill="#333d21" transform="rotate(-32 30 220)" />
          <path d="M70,222 C50,150 55,85 70,50 C85,85 90,150 70,222 Z" fill="#4c5a34" transform="rotate(-12 70 222)" />
          <path d="M118,224 C98,155 103,90 118,55 C133,90 138,155 118,224 Z" fill="#3f4a2c" transform="rotate(4 118 224)" />
          <path d="M168,220 C148,152 153,90 168,58 C183,90 188,152 168,220 Z" fill="#4c5a34" transform="rotate(22 168 220)" />
          <path d="M215,214 C197,155 201,98 215,68 C229,98 233,155 215,214 Z" fill="#333d21" transform="rotate(38 215 214)" />

          {/* mid terracotta leaves */}
          <path d="M55,212 C42,168 45,128 55,102 C65,128 68,168 55,212 Z" fill="#7a3820" transform="rotate(-46 55 212)" />
          <path d="M95,214 C82,170 85,130 95,104 C105,130 108,170 95,214 Z" fill="#9c4a2c" transform="rotate(-14 95 214)" />
          <path d="M140,216 C127,172 130,132 140,106 C150,132 153,172 140,216 Z" fill="#b15c34" transform="rotate(12 140 216)" />
          <path d="M182,210 C170,168 173,130 182,106 C191,130 194,168 182,210 Z" fill="#8a4023" transform="rotate(34 182 210)" />

          {/* blush accent leaves */}
          <path d="M78,178 C69,150 71,122 78,102 C85,122 87,150 78,178 Z" fill="#c98a86" transform="rotate(-24 78 178)" />
          <path d="M132,182 C123,154 125,126 132,106 C139,126 141,154 132,182 Z" fill="#dba39d" transform="rotate(18 132 182)" />

          {/* dahlia blossom */}
          <g transform="translate(96,138)">
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(0)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(45)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(90)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(135)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(180)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(225)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(270)" />
            <ellipse rx="8" ry="15" fill="#caa46a" transform="rotate(315)" />
            <circle r="8" fill="#f2dfb8" />
          </g>

          {/* small blossom */}
          <g transform="translate(158,152) scale(0.65)">
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(20)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(65)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(110)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(155)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(200)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(245)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(290)" />
            <ellipse rx="8" ry="15" fill="#dba39d" transform="rotate(335)" />
            <circle r="7" fill="#caa46a" />
          </g>

          {/* berries */}
          <circle cx="55" cy="158" r="6" fill="#e6c68f" />
          <circle cx="188" cy="148" r="5" fill="#f2dfb8" />
          <circle cx="118" cy="188" r="4.5" fill="#b15c34" />
          <circle cx="70" cy="130" r="4" fill="#caa46a" />
          <circle cx="205" cy="172" r="5.5" fill="#dba39d" />
        </svg>
      </div>

      {/* TOP STRIP */}
      <div className="footer-top-line">
        <p>✨  Don't hold it. Live it. Spread it. ✨</p>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-middle">

        <div className="footer-container">

          <div className="footer-columns">

            {/* COLUMN 1 */}
            <div className="footer-column footer-brand-column">

              <div className="footer-brand">

                <img src={logo} alt="logo" />

                <div className="footer-brand-text">
                  <h3>Art & Culture</h3>

                  <p>
                    Traditional Handicrafts & Spiritual Artifacts
                  </p>
                </div>

              </div>

              <div className="footer-about-content">

                <p>
                  Discover timeless Indian traditions through handcrafted spiritual decor,
                  brass idols, pooja essentials, and premium cultural collections.
                </p>

                <p>
                  Every piece blends heritage, devotion, and craftsmanship to bring
                  elegance and positivity to your home.
                </p>

              </div>

              <div className="footer-contact">

                <div className="footer-contact-item">
                  <span>📍</span>
                  <p>Esplanade, Bhubaneswar</p>
                </div>

                <div className="footer-contact-item">
                  <span>📧</span>
                  <p>msarojkumar@zoho.com</p>
                </div>

                <div className="footer-contact-item">
                  <span>📞</span>
                  <p>+91 8117048317</p>
                </div>

              </div>

            </div>

            {/* COLUMN 2 */}
            <div className="footer-column">

              <h3>Quick Links</h3>

              <ul>

                <li>
                  <Link to="/" onClick={scrollTop}>
                    <span>›</span> Home
                  </Link>
                </li>

                <li>
                  <Link to="/shop" onClick={scrollTop}>
                    <span>›</span> Shop
                  </Link>
                </li>

                <li>
                  <Link to="/blog" onClick={scrollTop}>
                    <span>›</span> Blog
                  </Link>
                </li>

                <li>
                  <Link to="/best-sellers" onClick={scrollTop}>
                    <span>›</span> Best Sellers
                  </Link>
                </li>

                <li>
                  <Link to="/Pooja-essentials" onClick={scrollTop}>
                    <span>›</span> Pooja Essentials
                  </Link>
                </li>

                <li>
                  <Link to="/about" onClick={scrollTop}>
                    <span>›</span> About
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={scrollTop}>
                    <span>›</span> Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* COLUMN 3 */}
            <div className="footer-column">

              <h3>Categories</h3>

              <ul className="footer-category-list">

                <li>
                  <span>›</span> God Murtis
                </li>

                <li>
                  <span>›</span> Pooja Items
                </li>

                <li>
                  <span>›</span> Brass Idols
                </li>

                <li>
                  <span>›</span> Handicraft
                </li>

                <li>
                  <span>›</span> Temple Decor
                </li>

                <li>
                  <span>›</span> Spiritual Jewelry
                </li>

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

                <div className="social-icons">

                  <a href="https://www.facebook.com/share/19fpzCPwLG/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>

                  <a href="https://www.instagram.com/theartandculturehub?stkn=bjRzemdzN3hmcnJu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>

                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>

                  <a href="https://youtube.com/@artandculturehub-v4o?si=bRHZ2R34QxWwc6KF" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2025 Art & Culture. Crafted with tradition & spirituality.
        </p>

        <div className="footer-links">

          <Link to="/privacypolicy" onClick={scrollTop}>
            Privacy Policy
          </Link>

          <Link to="/termandcondition" onClick={scrollTop}>
            Terms & Conditions
          </Link>

          <Link to="/shipping" onClick={scrollTop}>
            Shipping Policy
          </Link>

          <Link to="/returns" onClick={scrollTop}>
            Returns & Refund
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;