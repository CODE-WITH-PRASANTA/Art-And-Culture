import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./FestiveGrid.css";

import API, { IMG_URL } from "../../api/axios";

/* =====================================================
   ICONS
===================================================== */

const Icon = ({ name, size = 18, className = "" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
  };

  if (name === "heart")
    return (
      <svg {...props}>
        <path
          d="M20.8 7.6a4.2 4.2 0 00-6 0L12 10.4l-2.8-2.8a4.2 4.2 0 10-6 6L12 22l8.8-8.8a4.2 4.2 0 000-6z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );

  if (name === "cart")
    return (
      <svg {...props}>
        <path
          d="M6 6h15l-1.5 9H8.5L6 6z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );

  if (name === "star")
    return (
      <svg {...props}>
        <path
          d="M12 2.5l2.6 5.7 6.4.9-4.6 3.7L18.4 20 12 17.3 5.6 20l1.1-6.3L1 9.1l6.4-.9L12 2.5z"
          fill="currentColor"
        />
      </svg>
    );

  if (name === "grid")
    return (
      <svg {...props}>
        <rect x="3" y="3" width="8" height="8" stroke="currentColor" />
      </svg>
    );

  if (name === "list")
    return (
      <svg {...props}>
        <path d="M12 7h8" stroke="currentColor" />
      </svg>
    );

  if (name === "eye")
    return (
      <svg {...props}>
        <path
          d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
          stroke="currentColor"
        />
      </svg>
    );

  return null;
};

/* =====================================================
   COMPONENT
===================================================== */

const FestiveGrid = () => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [sort, setSort] = useState("featured");

  const [view, setView] = useState("list");

  const [flipped, setFlipped] = useState({});

  const [activeImages, setActiveImages] = useState({});

  const changeImage = (id, index) => {
    setActiveImages((prev) => ({
      ...prev,
      [id]: index,
    }));
  };

  const containerRef = useRef(null);

  /* =====================================================
     FETCH PRODUCTS
  ===================================================== */

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/pooja");

      if (res.data.success) {
        const mapped = res.data.data.map((item) => ({
          ...item,

          /* MULTIPLE IMAGES */
          images: item.images?.map((img) => `${IMG_URL}${img}`) || [],

          old: item.oldPrice || 0,

          reviews: Math.floor(Math.random() * 50) + 1,

          discount:
            item.oldPrice > item.price
              ? `-${Math.round(
                  ((item.oldPrice - item.price) / item.oldPrice) * 100,
                )}%`
              : "",

          size: item.size || "N/A",

          weight: item.weight || "N/A",

          purpose: item.category || "Pooja",

          material: item.material || "Premium Material",

          inStock: item.stock > 0,

          /* REMOVE HTML */
          cleanDescription:
            item.description
              ?.replace(/<[^>]+>/g, " ")
              .replace(/&nbsp;/g, " ")
              .replace(/\s+/g, " ")
              .trim() || "",
        }));

        setProducts(mapped);
      }
    } catch (error) {
      console.log("FETCH ERROR :", error);
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     FILTERS
  ===================================================== */

  const unique = (arr) => Array.from(new Set(arr));

  const allPurposes = useMemo(
    () => unique(products.map((p) => p.purpose)),
    [products],
  );

  const allMaterials = useMemo(
    () => unique(products.map((p) => p.material)),
    [products],
  );

  const allSizes = useMemo(
    () => unique(products.map((p) => p.size)),
    [products],
  );

  const [selectedPurposes, setSelectedPurposes] = useState([]);

  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const [selectedSizes, setSelectedSizes] = useState([]);

  const [selectedAvail, setSelectedAvail] = useState([]);

  /* =====================================================
     PRICE
  ===================================================== */

  const PRICE_MIN = useMemo(
    () => (products.length ? Math.min(...products.map((p) => p.price)) : 0),
    [products],
  );

  const PRICE_MAX = useMemo(
    () => (products.length ? Math.max(...products.map((p) => p.price)) : 5000),
    [products],
  );

  const [minVal, setMinVal] = useState(0);

  const [maxVal, setMaxVal] = useState(5000);

  useEffect(() => {
    setMinVal(PRICE_MIN);
    setMaxVal(PRICE_MAX);
  }, [PRICE_MIN, PRICE_MAX]);

  /* =====================================================
     FILTER LOGIC
  ===================================================== */

  const filtered = useMemo(() => {
    let out = products.filter((p) => p.price >= minVal && p.price <= maxVal);

    if (selectedPurposes.length)
      out = out.filter((p) => selectedPurposes.includes(p.purpose));

    if (selectedMaterials.length)
      out = out.filter((p) => selectedMaterials.includes(p.material));

    if (selectedSizes.length)
      out = out.filter((p) => selectedSizes.includes(p.size));

    if (selectedAvail.length) {
      if (selectedAvail.includes("in")) out = out.filter((p) => p.inStock);

      if (selectedAvail.includes("out")) out = out.filter((p) => !p.inStock);
    }

    if (sort === "low") {
      out = out.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      out = out.sort((a, b) => b.price - a.price);
    }

    return out;
  }, [
    products,
    minVal,
    maxVal,
    selectedPurposes,
    selectedMaterials,
    selectedSizes,
    selectedAvail,
    sort,
  ]);

  /* =====================================================
     HELPERS
  ===================================================== */

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
  };

  const toggleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return <div className="festivegrid-loading">Loading...</div>;
  }

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <div className="festivegrid-layout" ref={containerRef}>
      {/* SIDEBAR */}

      <aside className="festivegrid-sidebar">
        <div className="festivegrid-sidebar-header">
          <h2>Filters</h2>
        </div>

        {/* PURPOSE */}

        <div className="festivegrid-filter-group">
          <h4>Purpose</h4>

          {allPurposes.map((p) => (
            <label key={p} className="festivegrid-checkbox">
              <input
                type="checkbox"
                checked={selectedPurposes.includes(p)}
                onChange={() =>
                  toggle(p, selectedPurposes, setSelectedPurposes)
                }
              />

              <span>{p}</span>
            </label>
          ))}
        </div>

        {/* MATERIAL */}

        <div className="festivegrid-filter-group">
          <h4>Material</h4>

          {allMaterials.map((m) => (
            <label key={m} className="festivegrid-checkbox">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(m)}
                onChange={() =>
                  toggle(m, selectedMaterials, setSelectedMaterials)
                }
              />

              <span>{m}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* CONTENT */}

      <main className="festivegrid-content">
        {/* TOPBAR */}

        <div className="festivegrid-topbar">
          <div className="festivegrid-heading-wrap">
            <h2>Featured Collection</h2>

            <p>Explore divine handcrafted idols & decor</p>
          </div>

          <div className="festivegrid-top-right">
            <div className="festivegrid-sort-area">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Featured</option>

                <option value="low">Price Low To High</option>

                <option value="high">Price High To Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}

        <div className="festivegrid-list">
          {filtered.map((p) => (
           <article
  key={p._id}
  className="festivegrid-product-row"
  onClick={() =>
    navigate(`/poojadetails/${p._id}`)
  }
>
              {/* IMAGE */}

              <div className="festivegrid-product-media">
                <img
                  src={p.images?.[activeImages[p._id] || 0] || "/no-image.png"}
                  alt={p.title}
                />

                {p.discount && (
                  <span className="festivegrid-discount-pill">
                    {p.discount}
                  </span>
                )}

                {/* DOTS */}

                {p.images?.length > 1 && (
                  <div className="festivegrid-imageDots">
                    {p.images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`festivegrid-imageDot ${
                          (activeImages[p._id] || 0) === index ? "active" : ""
                        }`}
                        onClick={() => changeImage(p._id, index)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* CONTENT */}

              <div className="festivegrid-product-body">
                <h3 className="festivegrid-product-title">{p.title}</h3>

                {/* META */}

                <div className="festivegrid-product-meta">
                  <div className="festivegrid-rating">
                    <Icon name="star" />

                    <span>{p.rating}</span>

                    <small>{p.reviews} reviews</small>

                    {/* STOCK */}

                    <div
                      className={`festivegrid-stock ${
                        p.inStock ? "in-stock" : "out-stock"
                      }`}
                    >
                      {p.inStock ? `In Stock (${p.stock})` : "Out Of Stock"}
                    </div>
                  </div>

                  {/* PRICE */}

                  <div className="festivegrid-price-line">
                    <span className="festivegrid-current">
                      ₹{p.price.toLocaleString()}
                    </span>

                    {p.old > 0 && (
                      <span className="festivegrid-old">
                        ₹{p.old.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p className="festivegrid-desc">{p.cleanDescription}</p>

                {/* EXTRA */}

                <div className="festivegrid-extraInfo">
                  <span>
                    <strong>Material:</strong> {p.material}
                  </span>

                  <span>
                    <strong>Size:</strong> {p.size}
                  </span>

                  <span>
                    <strong>Weight:</strong> {p.weight}
                  </span>
                </div>

                {/* CTA */}

                <div className="festivegrid-product-ctas">
                  <button className="festivegrid-btn-quick">QUICK ADD</button>

                  <div className="festivegrid-icon-actions">
                    <button>
                      <Icon name="heart" />
                    </button>

                    <button>
                      <Icon name="eye" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FestiveGrid;
