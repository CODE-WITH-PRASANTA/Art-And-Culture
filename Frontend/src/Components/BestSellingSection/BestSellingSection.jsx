import React, { useEffect, useMemo, useState } from "react";
import {
  FiSliders,
  FiGrid,
  FiList,
  FiX,
  FiEye,
  FiStar,
  FiShoppingCart,
  FiChevronDown,
} from "react-icons/fi";
import "./BestSellingSection.css";

// images (swap with your real assets)
import img1 from "../../assets/img-1.webp";
import img2 from "../../assets/img-2.webp";
import img3 from "../../assets/img-3.webp";
import img4 from "../../assets/img-4.webp";
import img5 from "../../assets/img-5.webp";
import img6 from "../../assets/img-6.webp";
import img7 from "../../assets/img-7.webp";
import img8 from "../../assets/img-8.webp";
import img9 from "../../assets/img-9.webp";
import img10 from "../../assets/img-10.webp";
import img11 from "../../assets/img-11.webp";
import img12 from "../../assets/img-12.webp";

const DATA = [
  { id: 1, img: img1, title: "Ganesh Idol On Leaf, Lord Ganesha With Diya", price: 399, old: 499, off: "20%", stock: 12, sales: 250 },
  { id: 2, img: img2, title: "Ganesh Brass Idol Diya Oil Lamp", price: 399, old: 699, off: "43%", stock: 0, sales: 190 },
  { id: 3, img: img3, title: "Brass Lotus Pillar Diya Oil Lamp", price: 799, old: 1599, off: "50%", stock: 8, sales: 320 },
  { id: 4, img: img4, title: "Crystal Akhand Diya Brass Oil Puja Lamp", price: 699, old: 999, off: "30%", stock: 5, sales: 140 },
  { id: 5, img: img5, title: "Premium Brass Dhup Holder", price: 299, old: 499, off: "40%", stock: 22, sales: 410 },
  { id: 6, img: img6, title: "Metal Peacock Pooja Candle", price: 349, old: 699, off: "50%", stock: 3, sales: 95 },
  { id: 7, img: img7, title: "Handcrafted Brass Swastik Stand", price: 499, old: 799, off: "38%", stock: 6, sales: 160 },
  { id: 8, img: img8, title: "Lotus Crystal Brass Diya", price: 899, old: 1299, off: "31%", stock: 2, sales: 78 },
  { id: 9, img: img9, title: "Premium Stone Studded Akhand Diya", price: 1299, old: 1999, off: "35%", stock: 1, sales: 50 },
  { id: 10, img: img10, title: "Traditional Golden Brass Diya", price: 899, old: 1499, off: "40%", stock: 0, sales: 22 },
  { id: 11, img: img11, title: "Classic Temple Diya Big Size", price: 999, old: 1899, off: "47%", stock: 7, sales: 210 },
  { id: 12, img: img12, title: "Handcrafted Floral Brass Stand", price: 699, old: 1299, off: "46%", stock: 10, sales: 270 },
];

const SORT_OPTIONS = [
  { key: "best", label: "Best selling" },
  { key: "price-low", label: "Price: Low → High" },
  { key: "price-high", label: "Price: High → Low" },
  { key: "popularity", label: "Popularity" },
];

const BestSellingSection = () => {
  // view & UI
  const [view, setView] = useState("grid"); // 'grid' | 'list'
  const [filterOpen, setFilterOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // sorting inside filter panel (main button toggles dropdown)
  const [sortBy, setSortBy] = useState("best");
  const [sortDropOpen, setSortDropOpen] = useState(false);

  // simple filters
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  // quick-add state demo / cart
  const [inCart, setInCart] = useState(() => new Set());

  // selected product to view details
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // memoized filtered list
  const filtered = useMemo(() => {
    let arr = DATA.slice();

    const min = Number(priceMin) || 0;
    const max = Number(priceMax) || Infinity;
    arr = arr.filter((p) => p.price >= min && p.price <= max);

    if (inStockOnly) arr = arr.filter((p) => p.stock && p.stock > 0);

    if (sortBy === "price-low") arr.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") arr.sort((a, b) => b.price - a.price);
    else if (sortBy === "popularity") arr.sort((a, b) => b.sales - a.sales);
    else arr.sort((a, b) => b.sales - a.sales); // default best = popularity

    return arr;
  }, [sortBy, inStockOnly, priceMin, priceMax]);

  // add/remove cart
  const toggleCart = (id) => {
    setInCart((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });
  };

  // choose sort
  const chooseSort = (key) => {
    setSortBy(key);
    setSortDropOpen(false);
  };

  // open details modal
  const openDetails = (product) => setSelected(product);
  const closeDetails = () => setSelected(null);

  return (
    <>
      {/* ------------------------ FILTER PANEL ------------------------ */}
      <aside className={`filter-panel ${filterOpen ? "open" : ""}`} aria-hidden={!filterOpen}>
        <div className="filter-header">
          <div className="filter-left">
            <span className="filter-title">Filters</span>
            <span className="filter-sub">Narrow down your choices</span>
          </div>

          <button className="close-btn" onClick={() => setFilterOpen(false)} aria-label="Close filters">
            <FiX size={20} />
          </button>
        </div>

        <div className="filter-body">
          {/* Sort Block */}
          <div className="filter-block">
            <label className="filter-label">Sort By</label>
            <div className="filter-select">
              {/* Main visible button (Best selling) */}
              <button
                className="select-option main"
                type="button"
                onClick={() => setSortDropOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={sortDropOpen}
              >
                {SORT_OPTIONS.find((s) => s.key === sortBy)?.label || "Sort"}
                <FiChevronDown className={`chev ${sortDropOpen ? "open" : ""}`} />
              </button>

              {/* Dropdown options revealed when main is clicked */}
              {sortDropOpen && (
                <div className="sort-dropdown" role="menu">
                  <button className={`sort-opt ${sortBy === "price-low" ? "active" : ""}`} onClick={() => chooseSort("price-low")}>
                    Price: Low → High
                  </button>
                  <button className={`sort-opt ${sortBy === "price-high" ? "active" : ""}`} onClick={() => chooseSort("price-high")}>
                    Price: High → Low
                  </button>
                  <button className={`sort-opt ${sortBy === "popularity" ? "active" : ""}`} onClick={() => chooseSort("popularity")}>
                    Popularity
                  </button>
                </div>
              )}

              {/* Legacy / featured option (kept) */}
              <div className="legacy-options" aria-hidden={sortDropOpen}>
                <button className={`select-option ${sortBy === "best" ? "sel" : ""}`} onClick={() => setSortBy("best")}>
                  Featured
                </button>
              </div>
            </div>
          </div>

          {/* Availability toggle */}
          <div className="filter-block">
            <label className="filter-label">Availability</label>
            <div
              className="toggle-row"
              onClick={() => setInStockOnly((s) => !s)}
              role="switch"
              aria-checked={inStockOnly}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setInStockOnly((s) => !s)}
            >
              <div className={`toggle ${inStockOnly ? "on" : ""}`}><span /></div>
              <span>{inStockOnly ? "In Stock Only" : "All Products"}</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="filter-block">
            <label className="filter-label">Price Range</label>

            <div className="price-slider-ui">
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min (e.g. 0)"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  aria-label="Minimum price"
                />
                <span className="to">to</span>
                <input
                  type="number"
                  placeholder="Max (e.g. 2000)"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  aria-label="Maximum price"
                />
              </div>

              <div className="range-visual" aria-hidden>
                <div className="track" />
                <div className="thumb" style={{ left: `${Math.min(100, (Number(priceMin) || 0) / 20)}%` }} />
                <div className="thumb" style={{ left: `${Math.min(100, (Number(priceMax) || 2000) / 20)}%` }} />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="filter-actions">
            <button
              className="apply-btn"
              onClick={() => {
                setFilterOpen(false);
              }}
            >
              <FiSliders size={18} /> Apply
            </button>
            <button
              className="reset-btn"
              onClick={() => {
                setInStockOnly(false);
                setPriceMin("");
                setPriceMax("");
                setSortBy("best");
                setSortDropOpen(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for filter */}
      {filterOpen && <div className="overlay" onClick={() => setFilterOpen(false)} />}

      {/* ------------------------ MAIN SECTION ------------------------ */}
      <section className={`bestselling-section ${mounted ? "mounted" : ""}`}>
        {/* Topbar */}
        <div className="bestselling-topbar">
          <div className="left-controls">
            <button className="filter-btn" onClick={() => setFilterOpen(true)} aria-expanded={filterOpen}>
              <FiSliders className="icon" />
              Show Filter
            </button>

            <div className="summary">
              <span className="count">{filtered.length}</span>
              <span>Products</span>
            </div>
          </div>

          <div className="view-toggle" role="tablist" aria-label="View">
            <button
              className={`view-btn ${view === "grid" ? "active" : ""}`}
              onClick={() => setView("grid")}
              aria-label="Grid View"
            >
              <FiGrid size={20} />
            </button>

            <button
              className={`view-btn ${view === "list" ? "active" : ""}`}
              onClick={() => setView("list")}
              aria-label="List View"
            >
              <FiList size={20} />
            </button>
          </div>
        </div>

        {/* Product Grid / List */}
        <div className={`bestselling-grid ${view === "grid" ? "grid" : "list"}`}>
          {filtered.map((p, idx) => (
            <article
              key={p.id}
              className="product-card"
              style={{ animationDelay: `${idx * 0.07}s` }}
              tabIndex={0}
            >
              {/* PRODUCT IMAGE AREA */}
              <div className="product-media">
                <img src={p.img} alt={p.title} loading="lazy" />

                {/* top row (badge + actions area) */}
                <div className="media-top">
                  <span className="badge">Hot</span>

                  {/* We replaced FiHeart with FiEye (view). It is hidden by default and appears on hover */}
                  <div className="media-actions">
                    <button
                      className="view-btn-media"
                      aria-label={`View details for ${p.title}`}
                      onClick={() => openDetails(p)}
                    >
                      <FiEye size={18} />
                    </button>
                  </div>
                </div>

                {/* floating Quick Add — on hover the view icon is visible as well */}
                <div className={`quick-add ${inCart.has(p.id) ? "added" : ""}`}>
                  <button onClick={() => toggleCart(p.id)} aria-pressed={inCart.has(p.id)}>
                    <FiShoppingCart size={16} />
                    {inCart.has(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>

              {/* PRODUCT BODY */}
              <div className="product-body">
                <div className="meta-row">
                  <span className="brand">EXCLUSIVE</span>

                  <span className="rating" aria-label={`Rating ${p.sales}`}>
                    <FiStar size={15} /> 4.8
                  </span>
                </div>

                <h3 className="product-title">{p.title}</h3>

                <div className="price-row">
                  <div className="prices">
                    <span className="new-price">₹{p.price}</span>
                    <span className="old-price">₹{p.old}</span>
                  </div>

                  <span className={`stock ${p.stock === 0 || p.stock === "Out of Stock" ? "oos" : ""}`}>
                    {p.stock === 0 ? "Out of Stock" : p.stock}
                  </span>
                </div>

                {/* List view description */}
                {view === "list" && (
                  <p className="desc">
                    Elegant handcrafted product for pooja — premium finish, ideal for gifting and decorations.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------ DETAILS MODAL ------------------------ */}
      {selected && (
        <div className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
          <div className="detail-panel">
            <header className="detail-header">
              <h2 id="detail-title">{selected.title}</h2>
              <button className="detail-close" onClick={closeDetails} aria-label="Close details">
                <FiX size={18} />
              </button>
            </header>

            <div className="detail-body">
              <div className="detail-media">
                <img src={selected.img} alt={selected.title} />
              </div>

              <div className="detail-info">
                <div className="detail-prices">
                  <div className="detail-new">₹{selected.price}.00</div>
                  <div className="detail-old">₹{selected.old}.00</div>
                  <div className="detail-off">{selected.off} OFF</div>
                </div>

                <div className="detail-meta">
                  <div>Stock: {selected.stock > 0 ? `${selected.stock} available` : "Out of stock"}</div>
                  <div>Sales: {selected.sales}</div>
                </div>

                <p className="detail-desc">
                  This is an extended product description for <strong>{selected.title}</strong>. It provides more context,
                  materials, care instructions, and gifting suggestions. Keep the copy here brief but useful.
                </p>

                <div className="detail-actions">
                  <button className="apply-btn" onClick={() => { toggleCart(selected.id); }}>
                    <FiShoppingCart /> {inCart.has(selected.id) ? "Remove from Cart" : "Add to Cart"}
                  </button>
                  <button className="reset-btn" onClick={closeDetails}>Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* click outside to close */}
          <div className="detail-backdrop" onClick={closeDetails} />
        </div>
      )}
    </>
  );
};

export default BestSellingSection;
