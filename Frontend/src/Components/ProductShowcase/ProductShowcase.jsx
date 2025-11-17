import React, { useState, useMemo, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

import prod1 from "../../assets/Silverantiquebalaji.webp";
import prod2 from "../../assets/Standing_Vishnu_Lakshmi.webp";
import prod3 from "../../assets/lakshmi_charan.webp";
import prod4 from "../../assets/Kamdhenu.webp";
import prod5 from "../../assets/Lakshmi.webp";

import "./ProductShowcase.css";

const products = [
  { id: 1, img: prod1, title: "Lord Balaji Face Idol - Silver Plated", rating: 5, reviews: 207, price: "1,250.00", oldPrice: "1,999.00", discount: 37 },
  { id: 2, img: prod2, title: "Lord Vishnu & Maa Lakshmi Standing Antique Murti Set", rating: 5, reviews: 35, price: "7,499.00", oldPrice: "8,899.00", discount: 15 },
  { id: 3, img: prod3, title: "Maa Lakshmi's Charan Paduka - Gold & Silver Plated (3 Inch)", rating: 5, reviews: 120, price: "1,699.00", oldPrice: "1,999.00", discount: 15 },
  { id: 4, img: prod4, title: "Kamdhenu Cow with Calf Idol - Gold & Silver Plated", rating: 5, reviews: 358, price: "1,449.00", oldPrice: "1,999.00", discount: 27 },
  { id: 5, img: prod5, title: "Goddess Lakshmi Antique Idol (7 Inch)", rating: 5, reviews: 70, price: "3,149.00", oldPrice: "3,499.00", discount: 10 },
];

const StarRow = ({ rating = 5 }) => {
  const full = Math.round(rating);
  return (
    <span className="ps-stars" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`ps-star ${i < full ? "filled" : ""}`}>{i < full ? "★" : "☆"}</span>
      ))}
    </span>
  );
};

const ProductShowcase = () => {
  const [tab, setTab] = useState("popular");
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [cartPulse, setCartPulse] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const list = useMemo(() => (tab === "onSale" ? products.filter(p => p.discount) : products), [tab]);

  const toggleWishlist = product => {
    setWishlist(prev => prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]);
  };

  const quickAdd = product => {
    setCartPulse(product.id);
    setTimeout(() => setCartPulse(null), 700);
  };

  return (
    <>
      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="ps-modal-backdrop" role="dialog" aria-modal="true" onClick={() => setQuickViewItem(null)}>
          <div className="ps-modal" onClick={e => e.stopPropagation()}>
            <img src={quickViewItem.img} alt={quickViewItem.title} />
            <h2>{quickViewItem.title}</h2>
            <p className="ps-modal-price">₹ {quickViewItem.price}</p>
            <p className="ps-modal-desc">Premium handcrafted metal idol — shipped with protective packaging.</p>
            <div className="ps-modal-actions">
              <button className="ps-modal-close" onClick={() => setQuickViewItem(null)}>✕ Close</button>
              <button className="ps-modal-add" onClick={() => { quickAdd(quickViewItem); setQuickViewItem(null); }}>
                <BsCartPlus size={16} style={{ marginRight: "6px" }} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="ps-root" aria-labelledby="ps-title">
        <div className="ps-inner">
          <h2 id="ps-title" className="ps-page-title">Explore</h2>

          <div className="ps-tabs" role="tablist" aria-label="product filters">
            <button role="tab" aria-selected={tab === "popular"} className={`ps-tab ${tab === "popular" ? "active" : ""}`} onClick={() => setTab("popular")}>Popular Now</button>
            <button role="tab" aria-selected={tab === "onSale"} className={`ps-tab ${tab === "onSale" ? "active" : ""}`} onClick={() => setTab("onSale")}>On Sale</button>
          </div>

          <div className="ps-row" role="list" aria-label="product list">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div className="ps-card skeleton" key={i} aria-hidden>
                    <div className="ps-image-wrap skeleton" />
                    <div className="ps-meta">
                      <div className="ps-line" />
                      <div className="ps-line short" />
                    </div>
                  </div>
                ))
              : list.map(p => (
                  <article key={p.id} className={`ps-card ${cartPulse === p.id ? "pulse" : ""}`} tabIndex={0} role="listitem" aria-label={`${p.title} priced at rupees ${p.price}`}>
                    <div className="ps-image-wrap">
                      {p.discount && <div className="ps-badge">-{p.discount}%</div>}

                      <div className="ps-hover-icons" aria-hidden>
                        <button
                          className={`ps-circle ${wishlist.includes(p.id) ? "active" : ""}`}
                          onClick={e => { e.stopPropagation(); toggleWishlist(p); }}
                          aria-pressed={wishlist.includes(p.id)}
                          aria-label={wishlist.includes(p.id) ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          {wishlist.includes(p.id) ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
                        </button>

                        <button
                          className="ps-circle"
                          onClick={e => { e.stopPropagation(); setQuickViewItem(p); }}
                          aria-label="Quick view"
                        >
                          <AiOutlineEye size={22} />
                        </button>
                      </div>

                      <div className="ps-image-quick">
                        <button className="ps-image-quick-btn" onClick={e => { e.stopPropagation(); quickAdd(p); }}>
                          <BsCartPlus size={18} /> Quick Add
                        </button>
                      </div>

                      <img src={p.img} alt={p.title} className="ps-image" />
                    </div>

                    <div className="ps-meta">
                      <h3 className="ps-title">{p.title}</h3>
                      <div className="ps-rating">
                        <span className="ps-rating-num">{p.rating.toFixed(1)}</span>
                        <StarRow rating={p.rating} />
                        <span className="ps-reviews">({p.reviews})</span>
                      </div>
                      <div className="ps-price-row">
                        <span className="ps-price">₹ {p.price}</span>
                        {p.oldPrice && <span className="ps-old">₹ {p.oldPrice}</span>}
                      </div>
                    </div>
                  </article>
                ))}
          </div>

          <div className="ps-cta-wrap">
            <button className="ps-cta">VIEW MORE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductShowcase;
