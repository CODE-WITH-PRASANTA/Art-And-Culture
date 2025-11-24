import React, { useState, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaGift,
  FaInfoCircle,
} from "react-icons/fa";
import "./PoojaPremium.css";
import mandirImg from "../../assets/img-5.webp";

const PRODUCTS = [
  { id: 1, title: "Ganesh Brass Diya Set", price: "₹3,999", color: "#F7E6D6" },
  { id: 2, title: "Meenakari Pooja Thali", price: "₹4,399", color: "#F2E8DE" },
  { id: 3, title: "Kalpavriksha Diya Tree", price: "₹2,999", color: "#EFE3D8" },
  { id: 4, title: "White Gold Chowki - 9\"", price: "₹1,550", color: "#F9F1EA" },
  { id: 5, title: "Turtle Loban Burner", price: "₹3,499", color: "#F6EBDC" },
];

const faqs = [
  {
    q: "What are the must-have pooja products for a home mandir?",
    a: "Essentials include a brass diya, pooja chowki, pooja thali, incense holder, bell and idols of your deities.",
  },
  {
    q: "Can these products be used daily?",
    a: "Yes — handcrafted items are suitable for both daily worship and special ceremonies. Maintain by light cleaning and occasional polishing.",
  },
  {
    q: "Do you provide gifting packaging?",
    a: "Yes — premium gifting options are available at checkout with elegant packing.",
  },
];

const features = [
  "Handcrafted brass & meenakari finishes",
  "Eco-friendly packaging",
  "Fast delivery across India",
  "Authentic traditional designs",
];

const PoojaPremium = () => {
  const [activeTab, setActiveTab] = useState("prices");
  const [openFAQ, setOpenFAQ] = useState(null);
  const carouselRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const scrollCarousel = (dir = 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth =
      el.firstElementChild ? el.firstElementChild.offsetWidth + 16 : 260;
    const newIndex = Math.max(
      0,
      Math.min(PRODUCTS.length - 1, carouselIndex + dir)
    );
    setCarouselIndex(newIndex);
    el.style.transform = `translateX(-${newIndex * cardWidth}px)`;
  };

  return (
    <div className="pp-wrapper ivory-theme">
      <div className="sanskrit-border" aria-hidden="true">
        <div className="sanskrit-track">
          ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ ॐ
        </div>
      </div>

      <aside className="pp-left-panel">
        {mandirImg ? (
          <img src={mandirImg} alt="Mandir" className="mandir-img" />
        ) : (
          <div className="mandir-placeholder">Mandir</div>
        )}

        <div className="floating-diya diya-1">🪔</div>
        <div className="floating-diya diya-2">🪔</div>
      </aside>

      <main className="pp-container">
        <header className="pp-header">
          <h1 className="pp-title">
            <FaStar className="pp-gold-icon" /> Art and Culture — Pooja Essentials
          </h1>
          <p className="pp-sub">
            Premium handcrafted pooja items — timeless, devotional, and gift-ready.
          </p>

          <nav className="pp-tabs">
            <button
              className={`tab-btn ${activeTab === "prices" ? "active" : ""}`}
              onClick={() => setActiveTab("prices")}
            >
              <FaGift /> Prices
            </button>
            <button
              className={`tab-btn ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
            >
              <FaInfoCircle /> FAQ
            </button>
            <button
              className={`tab-btn ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              <FaStar /> Features
            </button>
          </nav>
        </header>

        <div className="pp-divider shimmer-gold"></div>

        {/* Prices Panel */}
        <section className={`pp-panel ${activeTab === "prices" ? "show" : "hide"}`}>
          <div className="pp-price-and-carousel">
            <div className="pp-price-list gold-animated-border">
              <div className="price-head">
                <span>Product</span>
                <span>Price</span>
              </div>

              {PRODUCTS.map((p) => (
                <div key={p.id} className="price-row">
                  <span className="prod-name">{p.title}</span>
                  <span className="prod-price">{p.price}</span>
                </div>
              ))}
            </div>

            <div className="pp-carousel-wrap">
              <div className="carousel-controls">
                <button
                  className="carousel-btn"
                  onClick={() => scrollCarousel(-1)}
                  aria-label="Prev"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="carousel-btn"
                  onClick={() => scrollCarousel(1)}
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="carousel-viewport">
                <div className="carousel-track" ref={carouselRef}>
                  {PRODUCTS.map((p) => (
                    <article
                      key={p.id}
                      className="product-card"
                      style={{ background: p.color }}
                    >
                      <div className="prod-image" aria-hidden="true">📿</div>
                      <h4 className="card-title">{p.title}</h4>
                      <div className="card-price">{p.price}</div>
                      <button className="btn-primary">View</button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Panel */}
        <section className={`pp-panel ${activeTab === "faq" ? "show" : "hide"}`}>
          <div className="pp-faq">
            {faqs.map((f, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-q"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={openFAQ === idx}
                >
                  <span>{f.q}</span>
                  <span className="faq-symbol">{openFAQ === idx ? "−" : "+"}</span>
                </button>
                <div className={`faq-a ${openFAQ === idx ? "open" : ""}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Panel */}
        <section className={`pp-panel ${activeTab === "features" ? "show" : "hide"}`}>
          <ul className="features-list">
            {features.map((it, i) => (
              <li key={i} className="feature-item">
                <FaStar className="feat-icon" /> {it}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PoojaPremium;
