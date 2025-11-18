import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./TrendingProducts.css";

/* ------------------ PRODUCT ARRAYS ------------------ */
const popular = [
  { id: 1, title: "Silver plated Kamdhenu Cow with Calf Idol", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 5, reviews: 67, price: 1299, was: 1999, badge: "-35%" },
  { id: 2, title: "Kamdhenu Cow with Calf Idol - Gold & Silver Plated", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 5, reviews: 358, price: 1449, was: 1999, badge: "-27%" },
  { id: 3, title: "Lord Krishna's Divine Hands - Gold Plated", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 5, reviews: 16, price: 1499, was: 1899, badge: "-21%" },
  { id: 4, title: "Dagdusheth Halwai Ganpati Murti - Gold Plated", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 5, reviews: 17, price: 2149, was: 2999, badge: "-28%" },
  
];

const onSale = [
  { id: 11, title: "Festive Silver Thali Set", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 4.8, reviews: 42, price: 899, was: 1299, badge: "-30%" },
  { id: 12, title: "Brass Diya Pair - Engraved", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 4.9, reviews: 88, price: 499, was: 799, badge: "-38%" },
  { id: 13, title: "Lucky Elephant - Gold Finish", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 5, reviews: 25, price: 1199, was: 1599, badge: "-25%" },
  { id: 14, title: "Mini Ganesha Idol - Rose Gold", thumb: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_640.jpg", rating: 4.9, reviews: 19, price: 1299, was: 1799, badge: "-28%" },
  
];

/* ------------------ STARS COMPONENT ------------------ */
function Stars({ value = 5 }) {
  const rounded = Math.round(value);
  return (
    <span className="stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`star ${i < rounded ? "on" : "off"}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rounded ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.872 1.402-8.172L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </span>
  );
}

/* ------------------ ENHANCED PRODUCT CARD ------------------ */
function ProductCard({ p }) {
  const discounted = p.was && p.was > p.price;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="product-card" tabIndex={0} aria-labelledby={`title-${p.id}`}>
      <div className="card-inner">
        <div className="thumb-wrap">
          {p.badge && <div className="badge">{p.badge}</div>}

          {/* Enhanced hover overlay */}
          <div className="thumb-overlay">
            <div className="overlay-actions">
              <button 
                className={`icon-btn ${isLiked ? 'liked' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
                aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.8 6.6c-1.7-2.2-4.6-2.6-6.3-1.2l-.5.4-.5-.4c-1.7-1.4-4.6-1-6.3 1.2-2.1 2.7-1.1 6.9 2.2 9.8L12 20.2l6.7-3.8c3.3-2.9 4.3-7.1 2.1-9.8z"/>
                </svg>
              </button>

              <button className="icon-btn" aria-label="Quick view">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="select-options">
              <button className="select-btn">
                <span>SELECT OPTIONS</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <img src={p.thumb} alt={p.title} className="thumb" />
        </div>

        {/* Enhanced product info */}
        <div className="product-info">
          <div className="category-tag">Religious Decor</div>
          
          <h3 id={`title-${p.id}`} className="title">{p.title}</h3>

          <div className="rating-row">
            <Stars value={p.rating} />
            <span className="rating-value">{Number(p.rating).toFixed(1)}</span>
            <span className="reviews">({p.reviews})</span>
          </div>

          <div className="price-section">
            <div className="price-row">
              <div className="price">₹{p.price.toLocaleString()}</div>
              {discounted && <div className="was">₹{p.was.toLocaleString()}</div>}
            </div>
            <div className="shipping-tag">Free Shipping</div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */
export default function TrendingProducts() {
  const [active, setActive] = useState("popular");
  const tabsRef = useRef({ popular: null, sale: null });
  const containerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const measureUnderline = () => {
    const activeTabEl = tabsRef.current[active];
    const rootRect = containerRef.current?.getBoundingClientRect();
    if (!activeTabEl || !rootRect) return;
    const rect = activeTabEl.getBoundingClientRect();
    const left = rect.left - rootRect.left + (rect.width * 0.06);
    const width = rect.width * 0.88;
    setUnderlineStyle({ left, width });
  };

  useLayoutEffect(() => {
    measureUnderline();
    const ro = new ResizeObserver(() => measureUnderline());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measureUnderline);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measureUnderline);
    };
  }, [active]);

  useEffect(() => {
    const t = setTimeout(measureUnderline, 120);
    return () => clearTimeout(t);
  }, []);

  const activeData = active === "popular" ? popular : onSale;

  return (
    <section className="trending-root">
     

      <div className="tabs">
        <div className="tab-list" ref={containerRef}>
          <button
            ref={(el) => (tabsRef.current.popular = el)}
            aria-selected={active === "popular"}
            className={`tab ${active === "popular" ? "active" : ""}`}
            onClick={() => setActive("popular")}
          >
            Popular Gifts
          </button>

          <button
            ref={(el) => (tabsRef.current.sale = el)}
            aria-selected={active === "sale"}
            className={`tab ${active === "sale" ? "active" : ""}`}
            onClick={() => setActive("sale")}
          >
            On Sale
          </button>

          <div
            className="tab-underline"
            style={{
              transform: `translateX(${underlineStyle.left}px)`,
              width: underlineStyle.width
            }}
          />
        </div>
      </div>

      <div className="products-row">
        {activeData.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}