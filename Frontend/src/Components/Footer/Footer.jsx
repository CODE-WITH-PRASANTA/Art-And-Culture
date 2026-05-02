import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/Art and Culture Logo.webp";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* TOP STRIP */}
      <div className="footer-top-line">
        <p>✨ Think positive. Feel positive. Live positive ✨</p>
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
                  <Link to="/sale" onClick={scrollTop}>
                    <span>›</span> Sale
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

              <ul>

                <li>
                  <Link to="/category/god-murtis" onClick={scrollTop}>
                    <span>›</span> God Murtis
                  </Link>
                </li>

                <li>
                  <Link to="/category/pooja-items" onClick={scrollTop}>
                    <span>›</span> Pooja Items
                  </Link>
                </li>

                <li>
                  <Link to="/category/brass-idols" onClick={scrollTop}>
                    <span>›</span> Brass Idols
                  </Link>
                </li>

                <li>
                  <Link to="/category/handicraft" onClick={scrollTop}>
                    <span>›</span> Handicraft
                  </Link>
                </li>

                <li>
                  <Link to="/category/temple-decor" onClick={scrollTop}>
                    <span>›</span> Temple Decor
                  </Link>
                </li>

                <li>
                  <Link to="/category/spiritual-jewelry" onClick={scrollTop}>
                    <span>›</span> Spiritual Jewelry
                  </Link>
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

                  <a href="#">
                    FB
                  </a>

                  <a href="#">
                    IG
                  </a>

                  <a href="#">
                    X
                  </a>

                  <a href="#">
                    YT
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