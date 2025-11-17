import React, { useEffect, useMemo, useRef, useState } from "react";
import "./FestiveGrid.css";

/* ---------- image imports (keep your paths) ---------- */
import Jagannath from "../../assets/Lord-jagannath.webp";
import Ganesha from "../../assets/Lord-Ganesha.webp";
import Krishna from "../../assets/Lord-Krishna.webp";
import Hanuman from "../../assets/Lord-Hanuman.webp";
import Balaji from "../../assets/Lord-Balaji.webp";
import MaaDurga from "../../assets/Maa_Durga.webp";
import Vishnu from "../../assets/Lord-Vishnu.webp";
import Shiva from "../../assets/Lord-Shiva.webp";
import Saibaba from "../../assets/Saibaba.webp";
import Lakshmi from "../../assets/Maa_Lakshmi.webp";
import Buddha from "../../assets/Lord-Buddha.webp";

/* ---------------------------
   Inline SVG icon component (dependency-free)
   --------------------------- */
const Icon = ({ name, size = 18, className = "" }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className };
  if (name === "heart")
    return (
      <svg {...props} aria-hidden="true"><path d="M20.8 7.6a4.2 4.2 0 00-6 0L12 10.4l-2.8-2.8a4.2 4.2 0 10-6 6L12 22l8.8-8.8a4.2 4.2 0 000-6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
    );
  if (name === "cart")
    return (
      <svg {...props} aria-hidden="true"><path d="M6 6h15l-1.5 9H8.5L6 6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1" fill="currentColor"/><circle cx="18" cy="20" r="1" fill="currentColor"/></svg>
    );
  if (name === "star")
    return (
      <svg {...props} aria-hidden="true"><path d="M12 2.5l2.6 5.7 6.4.9-4.6 3.7L18.4 20 12 17.3 5.6 20l1.1-6.3L1 9.1l6.4-.9L12 2.5z" stroke="currentColor" strokeWidth="0.8" fill="currentColor"/></svg>
    );
  if (name === "grid")
    return (
      <svg {...props} aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6"/></svg>
    );
  if (name === "list")
    return (
      <svg {...props} aria-hidden="true"><rect x="4" y="5" width="4" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6"/><rect x="4" y="11" width="4" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6"/><rect x="4" y="17" width="4" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7h8M12 13h8M12 19h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
    );
  if (name === "eye")
    return (
      <svg {...props} aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>
    );
  return null;
};

/* ---------------------------
   SAMPLE_PRODUCTS (11 items)
   content preserved
   --------------------------- */
const SAMPLE_PRODUCTS = [
  { id: 1, title: "Shivji Divine Hands Car Dashboard Idol - Gold Plated (5 Inch)", rating: 5, reviews: 25, price: 2249, old: 2399, discount: "-6%", img: Jagannath, size: "1-5", purpose: "Gifting", material: "Premium Resin", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 2, title: "Lord Shiva Dhyana Mudra Antique Murti", rating: 4, reviews: 3, price: 2449, old: 3499, discount: "-30%", img: Ganesha, size: "6-10", purpose: "Home Decor", material: "Pure Brass", inStock: false, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 3, title: "Trishul & OM for Car Dashboard - Gold Plated (2.5 Inch)", rating: 5, reviews: 9, price: 1699, old: 2299, discount: "-26%", img: Krishna, size: "1-5", purpose: "Table Decor", material: "Marble Dust", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 4, title: "Trishul & Damroo for Car Dashboard - Gold Plated (2.5 Inch)", rating: 4, reviews: 3, price: 2099, old: 2650, discount: "-20%", img: Hanuman, size: "6-10", purpose: "Pooja Room", material: "Premium Resin", inStock: false, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 5, title: "Shiva Idol Antique - Marble Base", rating: 5, reviews: 18, price: 1899, old: 2499, discount: "-25%", img: Balaji, size: "1-5", purpose: "Car Dashboard", material: "Marble Dust", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 6, title: "Shiva Nameplate Dashboard - Gold", rating: 4, reviews: 7, price: 1999, old: 2199, discount: "-15%", img: MaaDurga, size: "6-10", purpose: "Vastu", material: "Pure Brass", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 7, title: "Shiva Head Rest Car Dashboard - Resin", rating: 5, reviews: 4, price: 1799, old: 2099, discount: "-16%", img: Vishnu, size: "1-5", purpose: "Gifting", material: "Premium Resin", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 8, title: "Shiva Sitting Idol - White with Gold", rating: 4, reviews: 12, price: 1599, old: 2699, discount: "-41%", img: Shiva, size: "6-10", purpose: "Home Decor", material: "Marble Dust", inStock: false, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 9, title: "Sai Baba Mini Idol - Spiritual Blessing", rating: 5, reviews: 11, price: 1499, old: 1899, discount: "-21%", img: Saibaba, size: "1-5", purpose: "Pooja Room", material: "Premium Resin", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 10, title: "Maa Lakshmi Idol - Prosperity Decor (Medium)", rating: 4, reviews: 14, price: 2599, old: 2899, discount: "-10%", img: Lakshmi, size: "6-10", purpose: "Vastu", material: "Pure Brass", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
  { id: 11, title: "Lord Buddha Calm Statue - Meditative Piece", rating: 5, reviews: 20, price: 1999, old: 2399, discount: "-17%", img: Buddha, size: "1-5", purpose: "Home Decor", material: "Marble Dust", inStock: true, description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars." },
];

/* ---------------------------
   FestiveGrid component (arrow fn)
   --------------------------- */
const FestiveGrid = () => {
  // font fallback
  useEffect(() => {
    document.documentElement.style.fontFamily =
      "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
  }, []);

  // state
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("list"); // default as screenshot
  const unique = (arr) => Array.from(new Set(arr));
  const allPurposes = useMemo(() => unique(SAMPLE_PRODUCTS.map((p) => p.purpose)), []);
  const allMaterials = useMemo(() => unique(SAMPLE_PRODUCTS.map((p) => p.material)), []);
  const allSizes = useMemo(() => unique(SAMPLE_PRODUCTS.map((p) => p.size)), []);

  // filters
  const [selectedPurposes, setSelectedPurposes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAvail, setSelectedAvail] = useState([]);

  // price dual-range
  const PRICE_MIN = useMemo(() => Math.min(...SAMPLE_PRODUCTS.map((p) => p.price)), []);
  const PRICE_MAX = useMemo(() => Math.max(...SAMPLE_PRODUCTS.map((p) => p.price)), []);
  const [minVal, setMinVal] = useState(PRICE_MIN);
  const [maxVal, setMaxVal] = useState(PRICE_MAX);
  const MIN_GAP = 50;

  // flip state (used only in grid mode)
  const [flipped, setFlipped] = useState({});
  const containerRef = useRef(null);

  // helpers
  const toggle = (v, list, setList) => setList((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  const handleMin = (v) => {
    const val = Number(v);
    const safe = Math.min(val, maxVal - MIN_GAP);
    setMinVal(Math.max(PRICE_MIN, safe));
  };
  const handleMax = (v) => {
    const val = Number(v);
    const safe = Math.max(val, minVal + MIN_GAP);
    setMaxVal(Math.min(PRICE_MAX, safe));
  };

  const span = PRICE_MAX - PRICE_MIN || 1;
  const minPct = ((minVal - PRICE_MIN) / span) * 100;
  const maxPct = ((maxVal - PRICE_MIN) / span) * 100;
  useEffect(() => {
    const el = containerRef.current || document.documentElement;
    el.style.setProperty("--min-pct", String(minPct));
    el.style.setProperty("--max-pct", String(maxPct));
  }, [minPct, maxPct]);

  // filtered + sorted
  const filtered = useMemo(() => {
    let out = SAMPLE_PRODUCTS.filter((p) => p.price >= minVal && p.price <= maxVal);
    if (selectedPurposes.length) out = out.filter((p) => selectedPurposes.includes(p.purpose));
    if (selectedMaterials.length) out = out.filter((p) => selectedMaterials.includes(p.material));
    if (selectedSizes.length) out = out.filter((p) => selectedSizes.includes(p.size));
    if (selectedAvail.length) {
      if (selectedAvail.includes("in")) out = out.filter((p) => p.inStock);
      if (selectedAvail.includes("out")) out = out.filter((p) => !p.inStock);
    }
    if (sort === "low") out = out.slice().sort((a, b) => a.price - b.price);
    if (sort === "high") out = out.slice().sort((a, b) => b.price - a.price);
    return out;
  }, [minVal, maxVal, selectedPurposes, selectedMaterials, selectedSizes, selectedAvail, sort]);

  const toggleFlip = (id) => setFlipped((s) => ({ ...s, [id]: !s[id] }));
  const resetAll = () => {
    setSelectedPurposes([]); setSelectedMaterials([]); setSelectedSizes([]); setSelectedAvail([]); setMinVal(PRICE_MIN); setMaxVal(PRICE_MAX);
  };

  return (
    <div className="festivegrid-container" ref={containerRef}>
      {/* Sidebar (unchanged content) */}
      <aside className="festivegrid-filters" aria-label="Filters">
        <h2>Filters</h2>

        <div className="festivegrid-filter-group">
          <h4>Purpose / Usecase</h4>
          {allPurposes.map((p) => (
            <label key={p} className="festivegrid-checkbox">
              <input type="checkbox" checked={selectedPurposes.includes(p)} onChange={() => toggle(p, selectedPurposes, setSelectedPurposes)} />
              <span>{p} <small className="festivegrid-count">(62)</small></span>
            </label>
          ))}
        </div>

        <div className="festivegrid-filter-group">
          <h4>Material</h4>
          {allMaterials.map((m) => (
            <label key={m} className="festivegrid-checkbox">
              <input type="checkbox" checked={selectedMaterials.includes(m)} onChange={() => toggle(m, selectedMaterials, setSelectedMaterials)} />
              <span>{m}</span>
            </label>
          ))}
        </div>

        <div className="festivegrid-filter-group">
          <h4>Size</h4>
          {allSizes.map((s) => (
            <label key={s} className="festivegrid-checkbox">
              <input type="checkbox" checked={selectedSizes.includes(s)} onChange={() => toggle(s, selectedSizes, setSelectedSizes)} />
              <span>{s} inches</span>
            </label>
          ))}
        </div>

        <div className="festivegrid-filter-group">
          <h4>Availability</h4>
          <label className="festivegrid-checkbox"><input type="checkbox" checked={selectedAvail.includes("in")} onChange={() => toggle("in", selectedAvail, setSelectedAvail)} /> <span>In stock</span></label>
          <label className="festivegrid-checkbox"><input type="checkbox" checked={selectedAvail.includes("out")} onChange={() => toggle("out", selectedAvail, setSelectedAvail)} /> <span>Out of stock</span></label>
        </div>

        <div className="festivegrid-filter-group festivegrid-price-area">
          <div className="festivegrid-price-header">
            <h4>Price</h4>
            <button className="festivegrid-reset-btn" onClick={resetAll}>Reset</button>
          </div>

          <div className="festivegrid-range-wrap" style={{ position: "relative", height: 36 }}>
            <input aria-label="Minimum price" className="festivegrid-range-input" type="range" min={PRICE_MIN} max={PRICE_MAX} value={minVal} onChange={(e) => handleMin(e.target.value)} />
            <input aria-label="Maximum price" className="festivegrid-range-input" type="range" min={PRICE_MIN} max={PRICE_MAX} value={maxVal} onChange={(e) => handleMax(e.target.value)} />
            <div className="festivegrid-range-track" aria-hidden />
          </div>

          <div className="festivegrid-price-inputs">
            <div className="festivegrid-price-box">₹{minVal}</div>
            <span className="festivegrid-dash">—</span>
            <div className="festivegrid-price-box">₹{maxVal}</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="festivegrid-main">
        <div className="festivegrid-topbar">
          <div className="festivegrid-sort-area">
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="festivegrid-view-area" role="tablist" aria-label="View toggle">
            <button className={`festivegrid-view-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")} aria-pressed={view === "list"} title="List view">
              <Icon name="list" />
            </button>
            <button className={`festivegrid-view-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")} aria-pressed={view === "grid"} title="Grid view">
              <Icon name="grid" />
            </button>
          </div>
        </div>

        {/* Products container — class toggles modes for styling */}
        <div className={`festivegrid-products ${view === "grid" ? "festivegrid-mode-grid" : "festivegrid-mode-list"}`}>
          {/* GRID MODE: show flipped cards with Details */}
          {view === "grid" && (
            <div className="festivegrid-grid">
              {filtered.map((p) => (
                <article key={p.id} className="festivegrid-card" tabIndex={0} aria-labelledby={`p-${p.id}-title`}>
                  <div className={`festivegrid-card-inner ${flipped[p.id] ? "flipped" : ""}`}>
                    {/* FRONT */}
                    <div className="festivegrid-face festivegrid-front" aria-hidden={!!flipped[p.id]}>
                      <div className="festivegrid-media">
                        <div className="festivegrid-imgwrap">
                          <img src={p.img} alt={p.title} className="festivegrid-prod-img" loading="lazy" />
                          <span className="festivegrid-discount-pill">{p.discount}</span>
                          <div className="festivegrid-hover-actions">
                            <button className="festivegrid-icon-btn" title="Wishlist"><Icon name="heart" /></button>
                            <button className="festivegrid-icon-btn" title="Add to cart"><Icon name="cart" /></button>
                          </div>
                        </div>
                      </div>

                      <div className="festivegrid-info">
                        <h3 id={`p-${p.id}-title`}>{p.title}</h3>
                        <div className="festivegrid-meta">
                          <div className="festivegrid-rating">
                            <Icon name="star" />
                            <span className="festivegrid-rating-num">{p.rating.toFixed(1)}</span>
                            <span className="festivegrid-reviews">({p.reviews})</span>
                          </div>

                          <div className="festivegrid-price">
                            <span className="festivegrid-current">₹{p.price.toLocaleString()}</span>
                            <span className="festivegrid-old">₹{p.old.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="festivegrid-actions">
                          <button className="festivegrid-ghost-btn" onClick={() => toggleFlip(p.id)}>Details</button>
                          <button className="festivegrid-primary-btn" onClick={() => alert(`Quick added "${p.title}" to cart.`)}>
                            <Icon name="cart" /> <span>Quick Add</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* BACK (flipped) */}
                    <div className="festivegrid-face festivegrid-back" aria-hidden={!flipped[p.id]}>
                      <div className="festivegrid-back-content">
                        <h3>{p.title}</h3>
                        <p className="festivegrid-desc">{p.description}</p>
                        <ul className="festivegrid-specs">
                          <li><strong>Material:</strong> {p.material}</li>
                          <li><strong>Size:</strong> {p.size} in</li>
                          <li><strong>Purpose:</strong> {p.purpose}</li>
                        </ul>
                        <div className="festivegrid-back-actions">
                          <button className="festivegrid-ghost-btn" onClick={() => toggleFlip(p.id)}>Back</button>
                          <button className="festivegrid-primary-btn" onClick={() => alert(`Added "${p.title}" to cart.`)}>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* LIST MODE: compact rows — no flip/details (as requested) */}
          {view === "list" && (
            <div className="festivegrid-list">
              {filtered.map((p) => (
                <article key={p.id} className="festivegrid-product-row" tabIndex={0} aria-labelledby={`p-${p.id}-title`}>
                  <div className="festivegrid-product-media">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <span className="festivegrid-discount-pill">{p.discount}</span>
                  </div>

                  <div className="festivegrid-product-body">
                    <h3 className="festivegrid-product-title" id={`p-${p.id}-title`}>{p.title}</h3>

                    <div className="festivegrid-product-meta">
                      <div className="festivegrid-rating">
                        <Icon name="star" />
                        <span className="festivegrid-rating-num">{p.rating.toFixed(1)}</span>
                        <span className="festivegrid-reviews">{p.reviews} reviews</span>
                      </div>

                      <div className="festivegrid-price-line">
                        <span className="festivegrid-current">₹{p.price.toLocaleString()}</span>
                        <span className="festivegrid-old">₹{p.old.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Short description (kept but brief to match screenshot feel) */}
                    <p className="festivegrid-desc" aria-hidden="false">{p.description}</p>

                    <div className="festivegrid-product-ctas">
                      {p.inStock ? (
                        <button className="festivegrid-btn-quick" onClick={() => alert(`Quick added "${p.title}" to cart.`)}>QUICK ADD</button>
                      ) : (
                        <button className="festivegrid-btn-select" onClick={() => alert(`Select options for "${p.title}".`)}>SELECT OPTIONS</button>
                      )}

                      <div className="festivegrid-icon-actions">
                        <button title="Wishlist" onClick={() => alert("Added to wishlist")}><Icon name="heart" /></button>
                        <button title="View product" onClick={() => alert("Open quick view")}><Icon name="eye" /></button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FestiveGrid;
