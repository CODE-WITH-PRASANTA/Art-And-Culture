import React, { useState, useEffect } from 'react';
import './WoodLinocut.css';

// Import all product images explicitly
import img1 from "../../assets/wo1.avif";
import img2 from "../../assets/wo2.avif";
import img3 from "../../assets/wo3.avif";
import img4 from "../../assets/wo4.avif";
import img5 from "../../assets/wo5.webp";
import img6 from "../../assets/06.webp";
import img7 from "../../assets/wo7.avif";
import img8 from "../../assets/wo8.avif";
import img9 from "../../assets/wo9.avif";
import img10 from "../../assets/wo10.avif";
import img11 from "../../assets/wo11.avif";
import img12 from "../../assets/wo12.avif";

const WoodLinocut = () => {
  const products = [
    { id: 1, image: img1, title: 'California Giant Redwood Set of 3, three 24x52\", T...', rating: 5, reviewsCount: '3,242', price: '61,163', originalPrice: '76,454', discount: '20% off', seller: 'Ad by Etsy seller', freeDelivery: false, starSeller: false, stockLeft: null },
    { id: 2, image: img2, title: 'Tree Ring Print Set of 4: Black & White Scandinavi...', rating: 5, reviewsCount: '303', price: '17,043', originalPrice: '24,347', discount: '30% off', seller: 'Ad by Etsy seller', freeDelivery: true, starSeller: false, stockLeft: null },
    { id: 3, image: img3, title: 'Tadashige Nishida: \"Red cat\" Cat series 205', rating: 5, reviewsCount: '68', price: '61,180', originalPrice: null, discount: null, seller: 'Ad by Etsy seller', freeDelivery: true, starSeller: false, stockLeft: null },
    { id: 4, image: img4, title: 'LOTUS OF LIFE - 40 x 40 cm - Sacred Geometry ...', rating: 5, reviewsCount: '788', price: '11,236', originalPrice: '22,472', discount: '50% off', seller: 'Ad by Etsy seller', freeDelivery: true, starSeller: false, stockLeft: null },
    { id: 5, image: img5, title: 'Laurelwood Drive, Oak Tree, Open Edition Original...', rating: 5, reviewsCount: '33', price: '8,385', originalPrice: null, discount: null, seller: 'SwitchbackPrintwork', freeDelivery: false, starSeller: true, stockLeft: 2 },
    { id: 6, image: img6, title: 'Blue Forest Linocut Print: A4 Original Art, Orange ...', rating: 5, reviewsCount: '17', price: '2,344', originalPrice: null, discount: null, seller: 'MulhairDesign', freeDelivery: false, starSeller: false, stockLeft: 3 },
    { id: 7, image: img7, title: 'Handgemaakte Godzilla-linosnedeprint - Japanse ...', rating: 5, reviewsCount: '440', price: '7,191', originalPrice: null, discount: null, seller: 'StudioGroningen', freeDelivery: false, starSeller: true, stockLeft: 1 },
    { id: 8, image: img8, title: 'FRAMED Laurelwood Drive, Oak Tree, Open Editio...', rating: 5, reviewsCount: '33', price: '14,798', originalPrice: null, discount: null, seller: 'SwitchbackPrintwork', freeDelivery: false, starSeller: true, stockLeft: null },
    { id: 9, image: img9, title: 'Red Hot Geums - original handmade linocut reduc...', rating: 5, reviewsCount: '620', price: '31,248', originalPrice: null, discount: null, seller: 'GraceGillespiePrints', freeDelivery: false, starSeller: false, stockLeft: 3 },
    { id: 10, image: img10, title: 'Picnic Crashers Linocut Print | Desert Visitors Art ...', rating: 5, reviewsCount: '105', price: '691', originalPrice: null, discount: null, seller: 'SaltandThistle', freeDelivery: true, starSeller: false, stockLeft: null },
    { id: 11, image: img11, title: 'Handmade Owl Linocut Print, Signed Art, Limited ...', rating: 5, reviewsCount: '188', price: '3,820', originalPrice: null, discount: null, seller: 'ArtefactumPrints', freeDelivery: false, starSeller: false, stockLeft: 2 },
    { id: 12, image: img12, title: 'Linocut • \"The Kiss\" by Brancusi', rating: 5, reviewsCount: '33', price: '1,798', originalPrice: null, discount: null, seller: 'LeaRousse', freeDelivery: true, starSeller: false, stockLeft: null },
  ];

  // Pagination and Viewport States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Filter Panel Sidebar Toggle State (Defaults to open on desktop)
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [openSections, setOpenSections] = useState({
    usecase: true,
    material: true,
    price: true,
    size: true,
    availability: true
  });

  // Price input states 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5049);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setItemsPerPage(2);
        setIsFilterOpen(false); // Default close on smaller viewports
      } else {
        setItemsPerPage(8);
        setIsFilterOpen(true); // Default open on desktop viewports
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.querySelector('.wood-linocut-controls')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wood-linocut-container">
      {/* Breadcrumbs */}
      <nav className="wood-linocut-breadcrumbs">
        <span>Art & Collectibles</span>
        <span className="wood-linocut-separator">/</span>
        <span>Prints</span>
        <span className="wood-linocut-separator">/</span>
        <span className="wood-linocut-current">Wood & Linocut Prints</span>
      </nav>

      <h1 className="wood-linocut-heading">Wood & Linocut Prints</h1>

      {/* Filter / Controls Bar */}
      <div className="wood-linocut-controls">
        <button className="wood-linocut-filter-btn" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M3 6h18v2H3V6zm3 5h12v2H6v-2zm3 5h6v2H9v-2z"/>
          </svg>
          All Filters
        </button>

        <div className="wood-linocut-right-controls">
          <span className="wood-linocut-results-count">
            {products.length} items found
          </span>
          <div className="wood-linocut-sort-wrapper">
            <label>Sort by:</label>
            <select className="wood-linocut-sort-select" defaultValue="Relevance">
              <option value="Lowest Price">Lowest Price</option>
              <option value="Highest Price">Highest Price</option>
              <option value="Recent">Top Customer Reviews</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout Wrapper */}
      <div className="wood-linocut-main-layout">
        
        {/* Accordion Filter Drawer/Sidebar Panel */}
        <div className={`wood-linocut-sidebar ${isFilterOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button className="close-sidebar-btn" onClick={() => setIsFilterOpen(false)}>&times;</button>
          </div>

          <div className="sidebar-content">
            {/* 1. Purpose / Usecase */}
            <div className="filter-section">
              <div className="section-title" onClick={() => toggleSection('usecase')}>
                <span>Purpose / Usecase</span>
                <span className={`arrow-icon ${openSections.usecase ? 'up' : ''}`}>&#8963;</span>
              </div>
              {openSections.usecase && (
                <div className="section-dropdown">
                  <label className="checkbox-container"><input type="checkbox"/> Gifting (11)</label>
                  <label className="checkbox-container"><input type="checkbox"/> Home Decor (5)</label>
                  <label className="checkbox-container"><input type="checkbox"/> Pooja Room (12)</label>
                  <label className="checkbox-container"><input type="checkbox"/> Vastu (1)</label>
                </div>
              )}
            </div>

            {/* 2. Material */}
            <div className="filter-section">
              <div className="section-title" onClick={() => toggleSection('material')}>
                <span>Material</span>
                <span className={`arrow-icon ${openSections.material ? 'up' : ''}`}>&#8963;</span>
              </div>
              {openSections.material && (
                <div className="section-dropdown">
                  <label className="checkbox-container"><input type="checkbox"/> Pure Brass (12)</label>
                </div>
              )}
            </div>

            {/* 3. Price */}
            <div className="filter-section">
              <div className="section-title" onClick={() => toggleSection('price')}>
                <span>Price</span>
                <span className={`arrow-icon ${openSections.price ? 'up' : ''}`}>&#8963;</span>
              </div>
              {openSections.price && (
                <div className="section-dropdown dynamic-price-block">
                  <div className="slider-wrapper">
                    <input 
                      type="range" 
                      min="0" 
                      max="5049" 
                      value={maxPrice} 
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="range-slider"
                    />
                  </div>
                  <div className="price-inputs-row">
                    <div className="input-group">
                      <span className="currency-symbol">₹</span>
                      <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
                    </div>
                    <span className="connector-text">To</span>
                    <div className="input-group">
                      <span className="currency-symbol">₹</span>
                      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Size Range */}
            <div className="filter-section">
              <div className="section-title" onClick={() => toggleSection('size')}>
                <span>Size Range</span>
                <span className={`arrow-icon ${openSections.size ? 'up' : ''}`}>&#8963;</span>
              </div>
              {openSections.size && (
                <div className="section-dropdown">
                  <label className="checkbox-container"><input type="checkbox"/> 1-5 inches (8)</label>
                  <label className="checkbox-container"><input type="checkbox"/> 6-10 inches (3)</label>
                </div>
              )}
            </div>

            {/* 5. Availability */}
            <div className="filter-section">
              <div className="section-title" onClick={() => toggleSection('availability')}>
                <span>Availability</span>
                <span className={`arrow-icon ${openSections.availability ? 'up' : ''}`}>&#8963;</span>
              </div>
              {openSections.availability && (
                <div className="section-dropdown">
                  <label className="checkbox-container"><input type="checkbox"/> In stock (12)</label>
                  <label className="checkbox-container disabled-item"><input type="checkbox" disabled/> Out of stock (0)</label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Backdrop background dimmer for portable devices */}
        <div className={`sidebar-backdrop ${isFilterOpen ? 'show' : ''}`} onClick={() => setIsFilterOpen(false)}></div>

        {/* Product Grid Content Container */}
        <div
  className={`wood-linocut-content-grid ${
    isFilterOpen ? "filter-open" : ""
  }`}
>
          <div className="wood-linocut-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="wood-linocut-card">
                <div className="wood-linocut-image-wrapper">
                  <img src={product.image} alt={product.title} className="wood-linocut-img" />
                  <button className="wood-linocut-favorite-btn" aria-label="Favorite">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                <div className="wood-linocut-details">
                  <h2 className="wood-linocut-title">{product.title}</h2>
                  <div className="wood-linocut-rating-row">
                    <div className="wood-linocut-stars">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="wood-linocut-reviews-count">({product.reviewsCount})</span>
                  </div>

                  <div className="wood-linocut-price-row">
                    <span className="wood-linocut-current-price">₹ {product.price}</span>
                    {product.originalPrice && <span className="wood-linocut-original-price">₹ {product.originalPrice}</span>}
                    {product.discount && <span className="wood-linocut-discount">({product.discount})</span>}
                  </div>

                  <div className="wood-linocut-seller">{product.seller}</div>
                  {product.freeDelivery && <div className="wood-linocut-badge-free">FREE delivery</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Pagination UI Control Elements */}
      {totalPages > 1 && (
        <div className="wood-linocut-pagination">
          <button className="wood-linocut-page-btn arrow" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo; Prev</button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index + 1} className={`wood-linocut-page-btn ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
          ))}
          <button className="wood-linocut-page-btn arrow" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next &raquo;</button>
        </div>
      )}
    </div>
  );
};

export default WoodLinocut;