import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ProductGrid.css";

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
   SAMPLE_PRODUCTS (11 items) - uses all images you provided
   (content preserved where present; added three more entries to use all images)
   --------------------------- */
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Shivji Divine Hands Car Dashboard Idol - Gold Plated (5 Inch)",
    rating: 5,
    reviews: 25,
    price: 2249,
    old: 2399,
    discount: "-6%",
    img: Jagannath,
    size: "1-5",
    purpose: "Gifting",
    material: "Premium Resin",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 2,
    title: "Lord Shiva Dhyana Mudra Antique Murti",
    rating: 4,
    reviews: 3,
    price: 2449,
    old: 3499,
    discount: "-30%",
    img: Ganesha,
    size: "6-10",
    purpose: "Home Decor",
    material: "Pure Brass",
    inStock: false,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 3,
    title: "Trishul & OM for Car Dashboard - Gold Plated (2.5 Inch)",
    rating: 5,
    reviews: 9,
    price: 1699,
    old: 2299,
    discount: "-26%",
    img: Krishna,
    size: "1-5",
    purpose: "Table Decor",
    material: "Marble Dust",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 4,
    title: "Trishul & Damroo for Car Dashboard - Gold Plated (2.5 Inch)",
    rating: 4,
    reviews: 3,
    price: 2099,
    old: 2650,
    discount: "-20%",
    img: Hanuman,
    size: "6-10",
    purpose: "Pooja Room",
    material: "Premium Resin",
    inStock: false,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 5,
    title: "Shiva Idol Antique - Marble Base",
    rating: 5,
    reviews: 18,
    price: 1899,
    old: 2499,
    discount: "-25%",
    img: Balaji,
    size: "1-5",
    purpose: "Car Dashboard",
    material: "Marble Dust",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 6,
    title: "Shiva Nameplate Dashboard - Gold",
    rating: 4,
    reviews: 7,
    price: 1999,
    old: 2199,
    discount: "-15%",
    img: MaaDurga,
    size: "6-10",
    purpose: "Vastu",
    material: "Pure Brass",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 7,
    title: "Shiva Head Rest Car Dashboard - Resin",
    rating: 5,
    reviews: 4,
    price: 1799,
    old: 2099,
    discount: "-16%",
    img: Vishnu,
    size: "1-5",
    purpose: "Gifting",
    material: "Premium Resin",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 8,
    title: "Shiva Sitting Idol - White with Gold",
    rating: 4,
    reviews: 12,
    price: 1599,
    old: 2699,
    discount: "-41%",
    img: Shiva,
    size: "6-10",
    purpose: "Home Decor",
    material: "Marble Dust",
    inStock: false,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  // New items added to use all images
  {
    id: 9,
    title: "Sai Baba Mini Idol - Spiritual Blessing",
    rating: 5,
    reviews: 11,
    price: 1499,
    old: 1899,
    discount: "-21%",
    img: Saibaba,
    size: "1-5",
    purpose: "Pooja Room",
    material: "Premium Resin",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 10,
    title: "Maa Lakshmi Idol - Prosperity Decor (Medium)",
    rating: 4,
    reviews: 14,
    price: 2599,
    old: 2899,
    discount: "-10%",
    img: Lakshmi,
    size: "6-10",
    purpose: "Vastu",
    material: "Pure Brass",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
  {
    id: 11,
    title: "Lord Buddha Calm Statue - Meditative Piece",
    rating: 5,
    reviews: 20,
    price: 1999,
    old: 2399,
    discount: "-17%",
    img: Buddha,
    size: "1-5",
    purpose: "Home Decor",
    material: "Marble Dust",
    inStock: true,
    description: "Hand-finished decorative idol with premium detailing. Perfect for gifting and home altars.",
  },
];

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
  return null;
};

/* ---------------------------
   ProductGrid component (arrow fn)
   --------------------------- */
const ProductGrid = () => {
  // font fallback
  useEffect(() => {
    document.documentElement.style.fontFamily = "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
  }, []);

  // Sort & View
  const [sort, setSort] = useState("featured"); // featured | low | high
  const [view, setView] = useState("grid"); // grid | list

  // Unique filter options
  const unique = (arr) => Array.from(new Set(arr));
  const allPurposes = useMemo(() => unique(SAMPLE_PRODUCTS.map((p) => p.purpose)), []);
  const allMaterials = useMemo(() => unique(SAMPLE_PRODUCTS.map((p) => p.material)), []);
  const allSizes = useMemo(() => unique(SAMPLE_PRODUCTS.map((p) => p.size)), []);

  // Filter state
  const [selectedPurposes, setSelectedPurposes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAvail, setSelectedAvail] = useState([]); // 'in' | 'out'

  // Price dual-range derived constants
  const PRICE_MIN = useMemo(() => Math.min(...SAMPLE_PRODUCTS.map((p) => p.price)), []);
  const PRICE_MAX = useMemo(() => Math.max(...SAMPLE_PRODUCTS.map((p) => p.price)), []);
  const [minVal, setMinVal] = useState(PRICE_MIN);
  const [maxVal, setMaxVal] = useState(PRICE_MAX);
  const MIN_GAP = 50; // prevents crossing

  // Card flip state
  const [flipped, setFlipped] = useState({}); // {id: true}

  // container ref for writing CSS vars (animated track)
  const containerRef = useRef(null);

  // toggle helpers
  const toggle = (v, list, setList) => {
    setList((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  };

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

  // compute percents for CSS variables
  const span = PRICE_MAX - PRICE_MIN || 1;
  const minPct = ((minVal - PRICE_MIN) / span) * 100;
  const maxPct = ((maxVal - PRICE_MIN) / span) * 100;

  // update CSS variables for smooth animated track
  useEffect(() => {
    const el = containerRef.current || document.documentElement;
    el.style.setProperty("--min-pct", String(minPct));
    el.style.setProperty("--max-pct", String(maxPct));
  }, [minPct, maxPct]);

  // filtering + sorting (auto-apply)
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
    setSelectedPurposes([]);
    setSelectedMaterials([]);
    setSelectedSizes([]);
    setSelectedAvail([]);
    setMinVal(PRICE_MIN);
    setMaxVal(PRICE_MAX);
  };

  return (
    <div className="pg-container" ref={containerRef} aria-live="polite">
      {/* Sidebar */}
      <aside className="pg-filters" aria-label="Filters">
        <h2>Filters</h2>

        <div className="filter-group">
          <h4>Purpose</h4>
          {allPurposes.map((p) => (
            <label key={p} className="checkbox">
              <input type="checkbox" checked={selectedPurposes.includes(p)} onChange={() => toggle(p, selectedPurposes, setSelectedPurposes)} />
              <span>{p}</span>
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h4>Material</h4>
          {allMaterials.map((m) => (
            <label key={m} className="checkbox">
              <input type="checkbox" checked={selectedMaterials.includes(m)} onChange={() => toggle(m, selectedMaterials, setSelectedMaterials)} />
              <span>{m}</span>
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h4>Size</h4>
          {allSizes.map((s) => (
            <label key={s} className="checkbox">
              <input type="checkbox" checked={selectedSizes.includes(s)} onChange={() => toggle(s, selectedSizes, setSelectedSizes)} />
              <span>{s} inches</span>
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h4>Availability</h4>
          <label className="checkbox">
            <input type="checkbox" checked={selectedAvail.includes("in")} onChange={() => toggle("in", selectedAvail, setSelectedAvail)} />
            <span>In stock</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" checked={selectedAvail.includes("out")} onChange={() => toggle("out", selectedAvail, setSelectedAvail)} />
            <span>Out of stock</span>
          </label>
        </div>

        <div className="filter-group">
          <div className="price-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4>Price</h4>
            <button className="bg-btn small" onClick={resetAll} aria-label="Reset filters">Reset</button>
          </div>

          <div className="price-slider">
            <div className="range-wrap" style={{ position: "relative", height: 36 }}>
              <input
                aria-label="Minimum price"
                className="range-input"
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                value={minVal}
                onChange={(e) => handleMin(e.target.value)}
              />
              <input
                aria-label="Maximum price"
                className="range-input"
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                value={maxVal}
                onChange={(e) => handleMax(e.target.value)}
              />
              <div className="range-track" aria-hidden />
            </div>

            <div className="price-inputs" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              <div className="price-box2"><span className="currency">₹</span><span className="value">{minVal}</span></div>
              <span className="to">—</span>
              <div className="price-box2"><span className="currency">₹</span><span className="value">{maxVal}</span></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="pg-main">
        <div className="pg-topbar">
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

          <div className="view-icons" role="tablist" aria-label="View toggle">
            <button className={`icon-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")} aria-pressed={view === "list"} aria-label="List view">
              <Icon name="list" />
            </button>
            <button className={`icon-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")} aria-pressed={view === "grid"} aria-label="Grid view">
              <Icon name="grid" />
            </button>
          </div>
        </div>

        <section className="pg-grid" aria-label="Products" style={{
          display: "grid",
          gridTemplateColumns: view === "grid" ? "repeat(auto-fill, minmax(240px, 1fr))" : "1fr",
          gap: 28
        }}>
          {filtered.length === 0 && <div className="empty">No products match the selected filters.</div>}

          {filtered.map((p) => (
            view === "grid"
              ? (
                <article key={p.id} className="pg-card modern-card" tabIndex={0} aria-labelledby={`p-${p.id}-title`}>
                  <div className={`card-inner ${flipped[p.id] ? "flipped" : ""}`}>
                    {/* FRONT */}
                    <div className="card-face front" aria-hidden={!!flipped[p.id]}>
                      <div className="media">
                        <div className="img-wrap">
                          <img src={p.img} alt={p.title} loading="lazy" className="prod-img" />
                          <span className="badge">{p.discount}</span>
                          <div className="hover-actions">
                            <button className="icon-btn-circle" title="Wishlist" aria-label="Wishlist"><Icon name="heart" /></button>
                            <button className="icon-btn-circle" title="Add to cart" aria-label="Add to cart"><Icon name="cart" /></button>
                          </div>
                        </div>
                      </div>

                      <div className="info">
                        <h3 id={`p-${p.id}-title`}>{p.title}</h3>

                        <div className="meta">
                          <div className="rating">
                            <Icon name="star" />
                            <span className="rate-num">{p.rating.toFixed(1)}</span>
                            <span className="reviews">({p.reviews})</span>
                          </div>

                          <div className="price">₹{p.price.toLocaleString()} <span className="old">₹{p.old.toLocaleString()}</span></div>
                        </div>

                        <div className="actions">
                          {/* Details button stays in grid view */}
                          <button className="ghost-btn" onClick={() => toggleFlip(p.id)}>Details</button>
                          {/* Quick Add */}
                          <button className="primary-btn" onClick={() => alert(`Quick added "${p.title}" to cart.`)}>
                            <Icon name="cart" /> <span>Quick Add</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="card-face back" aria-hidden={!flipped[p.id]}>
                      <div className="back-content">
                        <h3>{p.title}</h3>
                        <p className="muted small">{p.description}</p>
                        <ul className="specs">
                          <li><strong>Material:</strong> {p.material}</li>
                          <li><strong>Size:</strong> {p.size} in</li>
                          <li><strong>Purpose:</strong> {p.purpose}</li>
                        </ul>

                        <div className="back-actions">
                          <button className="ghost-btn" onClick={() => toggleFlip(p.id)}>Back</button>
                          <button className="primary-btn" onClick={() => alert(`Added "${p.title}" to cart.`)}>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
              : (
                <article key={p.id} className="list-card" tabIndex={0} aria-labelledby={`p-${p.id}-title`}>
                  <div className="list-card-img">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <span className="badge">{p.discount}</span>
                  </div>

                  <div className="list-card-content">
                    <div>
                      <h3 className="list-card-title" id={`p-${p.id}-title`}>{p.title}</h3>
                      <div className="list-card-rating"><Icon name="star" /> <span>{p.rating.toFixed(1)}</span> <span className="muted">({p.reviews})</span></div>
                      <div className="list-card-price">₹{p.price.toLocaleString()} <span className="old">₹{p.old.toLocaleString()}</span></div>
                      <p className="muted small" style={{ marginTop: 8 }}>{p.description}</p>
                    </div>

                    {/* LIST VIEW: per your request, Details (flip) is NOT shown here — only add/quick actions */}
                    <div className="list-card-actions">
                      <button className="btn ghost" onClick={() => alert(`Viewed "${p.title}"`)}>View</button>
                      <button className="btn add" onClick={() => alert(`Added "${p.title}" to cart.`)}><Icon name="cart" /> Add to cart</button>
                    </div>
                  </div>
                </article>
              )
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductGrid;
