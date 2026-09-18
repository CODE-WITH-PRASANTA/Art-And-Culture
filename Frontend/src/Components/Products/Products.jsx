import React, { useMemo, useState } from "react";
import "./Products.css";

const FILTER_GROUPS = [
  {
    title: "TRAININGS",
    items: [
      "Lippan Art",
      "Mandala Art",
      "Mosaic Art",
      "Resin Art",
      "Jharoka Art",
    ],
  },
  {
    title: "WORKSHOPS",
    items: ["Canvas Painting", "Pencil Sketch"],
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: "5 Days Lippan Art Basic Course",
    category: "Lippan Art",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 1,
  },
  {
    id: 2,
    title: "5 Days Lippan Art Advance Course",
    category: "Lippan Art",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 2,
  },
  {
    id: 3,
    title: "5 Days Lippan Art Expert Course",
    category: "Lippan Art",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=85&w=900",
    badge: "Coming Soon",
    order: 3,
  },
  {
    id: 4,
    title: "Mandala Art Basic Workshop",
    category: "Mandala Art",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 4,
  },
  {
    id: 5,
    title: "Mandala Art Advanced Workshop",
    category: "Mandala Art",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 5,
  },
  {
    id: 6,
    title: "Mosaic Art Creative Course",
    category: "Mosaic Art",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 6,
  },
  {
    id: 7,
    title: "Mosaic Art Premium Workshop",
    category: "Mosaic Art",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=85&w=900",
    badge: "Coming Soon",
    order: 7,
  },
  {
    id: 8,
    title: "Resin Art Beginner Course",
    category: "Resin Art",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 8,
  },
  {
    id: 9,
    title: "Resin Art Professional Course",
    category: "Resin Art",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 9,
  },
  {
    id: 10,
    title: "Traditional Jharoka Art Course",
    category: "Jharoka Art",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 10,
  },
  {
    id: 11,
    title: "Canvas Painting Masterclass",
    category: "Canvas Painting",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 11,
  },
  {
    id: 12,
    title: "Pencil Sketch Professional Workshop",
    category: "Pencil Sketch",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=85&w=900",
    badge: null,
    order: 12,
  },
];

const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f3f1ec'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%23bdb6a8' text-anchor='middle' dy='.3em'%3EImage unavailable%3C/text%3E%3C/svg%3E";

const ProductImage = ({ src, alt, children }) => {
  const [status, setStatus] = useState("loading");

  return (
    <div
      className={`product-image-container${
        status !== "loading" ? " is-loaded" : ""
      }`}
    >
      <img
        src={status === "error" ? FALLBACK_IMAGE : src}
        alt={alt}
        className={`product-img${status !== "loading" ? " is-loaded" : ""}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus((s) => (s === "error" ? s : "loaded"))}
        onError={() => setStatus("error")}
      />
      {children}
    </div>
  );
};

const Products = () => {
  const [filters, setFilters] = useState({
    "Lippan Art": true,
    "Mandala Art": false,
    "Mosaic Art": false,
    "Resin Art": false,
    "Jharoka Art": false,
    "Canvas Painting": false,
    "Pencil Sketch": false,
  });

  const [sortBy, setSortBy] = useState("Best selling");

  const activeFilters = Object.keys(filters).filter((key) => filters[key]);

  const handleCheckboxChange = (name) => {
    setFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleClearAll = () => {
    const cleared = {};
    Object.keys(filters).forEach((key) => {
      cleared[key] = false;
    });
    setFilters(cleared);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeFilters.length > 0) {
      result = result.filter((product) =>
        activeFilters.includes(product.category)
      );
    }

    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        result.sort((a, b) => b.order - a.order);
        break;
      case "Best selling":
      default:
        result.sort((a, b) => a.order - b.order);
        break;
    }

    return result;
  }, [filters, sortBy, activeFilters]);

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}/-`;
  };

  return (
    <section className="products-container">
      {/* ================= TOP BAR ================= */}
      <div className="products-header-bar">
        <div className="header-left">
          <div className="refine-heading">
            <span>Refine</span>
            <span className="refine-badge">{activeFilters.length}</span>
          </div>

          {activeFilters.length > 0 && (
            <button
              type="button"
              className="top-clear-btn"
              onClick={handleClearAll}
            >
              Clear all
            </button>
          )}
        </div>

        <div className="header-right">
          <span className="products-count">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </span>

          <div className="sort-wrapper">
            <span className="sort-label">SORT</span>
            <div className="select-container">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
                aria-label="Sort products"
              >
                <option value="Best selling">Best selling</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE TOP FILTER CHIPS BAR ================= */}
      <div className="mobile-top-filters-container">
        <div className="mobile-filters-scroll">
          {FILTER_GROUPS.map((group) => (
            <div key={group.title} className="mobile-filter-group-inline">
              <span className="mobile-group-label">{group.title}:</span>
              {group.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`mobile-filter-pill ${
                    filters[item] ? "active" : ""
                  }`}
                  onClick={() => handleCheckboxChange(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="products-layout">
        {/* DESKTOP SIDEBAR */}
        <aside className="filter-sidebar">
          <div className="filter-sidebar-top">
            <div className="sidebar-refine">
              <span>Refine</span>
              <span className="refine-badge">{activeFilters.length}</span>
            </div>

            <button
              type="button"
              className="sidebar-clear"
              onClick={handleClearAll}
            >
              Clear all
            </button>
          </div>

          {FILTER_GROUPS.map((group) => (
            <div className="filter-section" key={group.title}>
              <h3>{group.title}</h3>

              <div className="filter-options">
                {group.items.map((item) => (
                  <label
                    key={item}
                    className={`filter-option ${
                      filters[item] ? "checked" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={filters[item]}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    <span className="custom-checkbox">
                      {filters[item] && (
                        <svg viewBox="0 0 12 12" aria-hidden="true">
                          <path d="M2 6.2 4.7 9 10 3" />
                        </svg>
                      )}
                    </span>
                    <span className="filter-name">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* PRODUCT AREA */}
        <main className="products-grid-area">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <ProductImage src={product.image} alt={product.title}>
                    <div className="product-price-pill">
                      {formatPrice(product.price)}
                    </div>

                    {product.badge && (
                      <div className="coming-soon-wrapper">
                        <div className="coming-soon-banner">
                          <span>{product.badge}</span>
                        </div>
                      </div>
                    )}
                  </ProductImage>

                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h2>{product.title}</h2>
                    <span className="product-price">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-products">
              <div className="empty-icon">
                <span>⌕</span>
              </div>
              <h2>No products found</h2>
              <p>Try selecting another category or clear your filters.</p>
              <button type="button" onClick={handleClearAll}>
                Clear filters
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Products;