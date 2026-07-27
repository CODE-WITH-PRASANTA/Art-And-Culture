import React, { useState, useMemo } from 'react';
import "./Catagory.css";

/* ==========================================================================
   INITIAL MOCK DATA
   ========================================================================== */
const INITIAL_PRODUCTS = [
  { id: 1, name: 'Tirupati Balaji Idol', subtitle: 'Gold & Silver Plated', sku: 'DC-001', category: 'Idols', price: 1249, originalPrice: 2499, stock: 45, stockStatus: 'In Stock', status: 'Active' },
  { id: 2, name: 'Lord Balaji (8 Inch)', subtitle: 'Gold & Silver Plated', sku: 'DC-002', category: 'Idols', price: 6249, originalPrice: 8999, stock: 32, stockStatus: 'In Stock', status: 'Active' },
  { id: 3, name: 'Lord Balaji Antique (8 Inch)', subtitle: 'Antique Finish', sku: 'DC-003', category: 'Idols', price: 2949, originalPrice: 3999, stock: 18, stockStatus: 'In Stock', status: 'Active' },
  { id: 4, name: 'Small Brass Lamp', subtitle: 'Pure Brass', sku: 'DC-004', category: 'Home Decor', price: 899, originalPrice: 1299, stock: 25, stockStatus: 'In Stock', status: 'Active' },
  { id: 5, name: 'Brass Nandi Statue', subtitle: 'Pure Brass', sku: 'DC-005', category: 'Decor', price: 1199, originalPrice: 1699, stock: 12, stockStatus: 'Low Stock', status: 'Active' },
  { id: 6, name: 'Wooden Ganesha Idol', subtitle: 'Hand Carved', sku: 'DC-006', category: 'Idols', price: 799, originalPrice: 1199, stock: 0, stockStatus: 'Out of Stock', status: 'Inactive' },
];

const CATEGORY_OPTIONS = ['Idols', 'Home Decor', 'Decor'];
const STOCK_STATUS_OPTIONS = ['In Stock', 'Low Stock', 'Out of Stock'];

const EMPTY_FORM = {
  name: '', subtitle: '', category: 'Idols', price: '', originalPrice: '',
  stock: '', stockStatus: 'In Stock', status: 'Active',
};

/* Helper function to derive initials from product name */
const getInitials = (name = '') =>
  name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

const Category = () => {
  /* ---------------- Filter State ---------------- */
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedStockStatus, setSelectedStockStatus] = useState('Stock Status');
  const [searchQuery, setSearchQuery] = useState('');

  const [appliedFilters, setAppliedFilters] = useState({
    category: 'All Categories',
    status: 'All Status',
    stockStatus: 'Stock Status',
    query: '',
  });

  /* ---------------- Products & Selection ---------------- */
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  /* ---------------- Pagination State ---------------- */
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  /* ---------------- Modal State ---------------- */
  const [modalMode, setModalMode] = useState(null); // 'edit' | null
  const [activeProduct, setActiveProduct] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  /* ============================= FILTER HANDLERS ============================= */
  const handleApplyFilters = () => {
    setAppliedFilters({
      category: selectedCategory,
      status: selectedStatus,
      stockStatus: selectedStockStatus,
      query: searchQuery,
    });
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedStatus('All Status');
    setSelectedStockStatus('Stock Status');
    setSearchQuery('');
    setAppliedFilters({
      category: 'All Categories',
      status: 'All Status',
      stockStatus: 'Stock Status',
      query: '',
    });
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      if (
        appliedFilters.category !== 'All Categories' &&
        item.category.toLowerCase() !== appliedFilters.category.toLowerCase()
      ) return false;

      if (
        appliedFilters.status !== 'All Status' &&
        item.status.toLowerCase() !== appliedFilters.status.toLowerCase()
      ) return false;

      if (
        appliedFilters.stockStatus !== 'Stock Status' &&
        item.stockStatus.toLowerCase() !== appliedFilters.stockStatus.toLowerCase()
      ) return false;

      if (appliedFilters.query.trim() !== '') {
        const q = appliedFilters.query.toLowerCase();
        const matches =
          item.name.toLowerCase().includes(q) ||
          item.sku.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [products, appliedFilters]);

  /* ---------------- Pagination Calculations ---------------- */
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  
  const paginatedProducts = useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, safePage, itemsPerPage]);

  /* ============================= ROW ACTIONS ============================= */
  const handleToggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: p.status === 'Active' ? 'Inactive' : 'Active' } : p))
    );
  };

  const handleDeleteProduct = (id) => {
    if (!window.confirm('Delete this product? This cannot be undone.')) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setSelectedProductIds((prev) => prev.filter((item) => item !== id));
  };

  const handleSelectAll = (e) => {
    setSelectedProductIds(e.target.checked ? paginatedProducts.map((p) => p.id) : []);
  };

  const handleSelectOne = (id) => {
    setSelectedProductIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const handleBulkDelete = () => {
    if (selectedProductIds.length === 0) return;
    if (!window.confirm(`Delete ${selectedProductIds.length} selected product(s)?`)) return;
    setProducts((prev) => prev.filter((p) => !selectedProductIds.includes(p.id)));
    setSelectedProductIds([]);
  };

  /* ============================= MODAL HANDLERS ============================= */
  const openEditModal = (product) => {
    setFormData({
      name: product.name,
      subtitle: product.subtitle,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice,
      stock: product.stock,
      stockStatus: product.stockStatus,
      status: product.status,
    });
    setActiveProduct(product);
    setModalMode('edit');
  };

  const closeModal = () => {
    setModalMode(null);
    setActiveProduct(null);
    setFormData(EMPTY_FORM);
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const parsedProduct = {
      name: formData.name.trim(),
      subtitle: formData.subtitle.trim(),
      category: formData.category,
      price: Number(formData.price) || 0,
      originalPrice: Number(formData.originalPrice) || Number(formData.price) || 0,
      stock: Number(formData.stock) || 0,
      stockStatus: formData.stockStatus,
      status: formData.status,
    };

    if (activeProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === activeProduct.id ? { ...p, ...parsedProduct } : p))
      );
    }

    closeModal();
  };

  /* ============================= BADGE HELPER ============================= */
  const getCategoryBadgeClass = (category) => {
    switch (category.toLowerCase()) {
      case 'idols': return 'cat-badge--idols';
      case 'home decor': return 'cat-badge--homedecor';
      case 'decor': return 'cat-badge--decor';
      default: return 'cat-badge--default';
    }
  };

  /* ============================= DONUT CHART COMPUTATION ============================= */
  const total = products.length || 1;
  const activeCount = products.filter((p) => p.status === 'Active').length;
  const inactiveCount = products.filter((p) => p.status === 'Inactive').length;
  const outOfStockCount = products.filter((p) => p.stockStatus === 'Out of Stock').length;

  const activePct = (activeCount / total) * 100;
  const inactivePct = (inactiveCount / total) * 100;
  const outPct = (outOfStockCount / total) * 100;

  const startOffset = 25;
  const activeOffset = startOffset;
  const inactiveOffset = startOffset - activePct;
  const outOffset = inactiveOffset - inactivePct;

  return (
    <div className="cat-page-container">
      <div className="cat-layout-grid">
        
        {/* ================= MAIN CONTENT SECTION ================= */}
        <main className="cat-main-content">
          
          {/* FILTER TOOLBAR */}
          <section className="cat-filter-card" aria-label="Product Filters">
            <div className="cat-filter-row">
              <div className="cat-select-wrapper">
                <select
                  className="cat-select-input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All Categories">All Categories</option>
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="cat-select-chevron">›</span>
              </div>

              <div className="cat-select-wrapper">
                <select
                  className="cat-select-input"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="All Status">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <span className="cat-select-chevron">›</span>
              </div>

              <div className="cat-select-wrapper">
                <select
                  className="cat-select-input"
                  value={selectedStockStatus}
                  onChange={(e) => setSelectedStockStatus(e.target.value)}
                >
                  <option value="Stock Status">Stock Status</option>
                  {STOCK_STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="cat-select-chevron">›</span>
              </div>

              <div className="cat-search-wrapper">
                <input
                  type="text"
                  className="cat-search-input"
                  placeholder="Search by product name, SKU..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyFilters()}
                />
              </div>

              <div className="cat-filter-actions">
                <button type="button" className="cat-btn cat-btn--filter" onClick={handleApplyFilters}>
                  <svg className="cat-btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                  Filter
                </button>

                <button type="button" className="cat-btn cat-btn--reset" onClick={handleResetFilters}>
                  <svg className="cat-btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 4v6h-6" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                  Reset
                </button>

                {selectedProductIds.length > 0 && (
                  <button type="button" className="cat-btn cat-btn--danger" onClick={handleBulkDelete}>
                    Delete ({selectedProductIds.length})
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* TABLE CONTAINER */}
          <section className="cat-table-card">
            <div className="cat-table-responsive">
              <table className="cat-table">
                <thead className="cat-thead">
                  <tr className="cat-tr-head">
                    <th className="cat-th cat-th--checkbox">
                      <input
                        type="checkbox"
                        className="cat-checkbox"
                        checked={paginatedProducts.length > 0 && paginatedProducts.every((p) => selectedProductIds.includes(p.id))}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="cat-th cat-th--product">Product</th>
                    <th className="cat-th cat-th--sku">SKU</th>
                    <th className="cat-th cat-th--category">Category</th>
                    <th className="cat-th cat-th--price">Price</th>
                    <th className="cat-th cat-th--stock">Stock</th>
                    <th className="cat-th cat-th--status">Status</th>
                    <th className="cat-th cat-th--actions cat-th--center">Actions</th>
                  </tr>
                </thead>
                <tbody className="cat-tbody">
                  {paginatedProducts.length === 0 ? (
                    <tr className="cat-tr cat-tr--empty">
                      <td colSpan="8" className="cat-td cat-empty-cell">
                        No products found matching the criteria.
                      </td>
                    </tr>
                  ) : (
                    paginatedProducts.map((product) => {
                      const isSelected = selectedProductIds.includes(product.id);
                      return (
                        <tr key={product.id} className={`cat-tr ${isSelected ? 'cat-tr--selected' : ''}`}>
                          <td className="cat-td cat-td--checkbox">
                            <input
                              type="checkbox"
                              className="cat-checkbox"
                              checked={isSelected}
                              onChange={() => handleSelectOne(product.id)}
                            />
                          </td>
                          <td className="cat-td cat-td--product">
                            <div className="cat-product-cell">
                              <div className="cat-product-avatar" aria-hidden="true">
                                {getInitials(product.name)}
                              </div>
                              <div className="cat-product-meta">
                                <span className="cat-product-title">{product.name}</span>
                                <span className="cat-product-subtitle">{product.subtitle}</span>
                              </div>
                            </div>
                          </td>
                          <td className="cat-td cat-td--sku">
                            <span className="cat-sku-text">{product.sku}</span>
                          </td>
                          <td className="cat-td cat-td--category">
                            <span className={`cat-badge ${getCategoryBadgeClass(product.category)}`}>
                              {product.category}
                            </span>
                          </td>
                          <td className="cat-td cat-td--price">
                            <div className="cat-price-cell">
                              <span className="cat-price-current">₹{product.price.toLocaleString('en-IN')}.00</span>
                              <span className="cat-price-original">₹{product.originalPrice.toLocaleString('en-IN')}.00</span>
                            </div>
                          </td>
                          <td className="cat-td cat-td--stock">
                            <div className="cat-stock-cell">
                              <span className="cat-stock-count">{product.stock}</span>
                              <span className={`cat-stock-label ${
                                product.stockStatus === 'Low Stock' ? 'cat-stock-label--low'
                                : product.stockStatus === 'Out of Stock' ? 'cat-stock-label--out'
                                : 'cat-stock-label--in'
                              }`}>
                                {product.stockStatus}
                              </span>
                            </div>
                          </td>
                          <td className="cat-td cat-td--status">
                            <label className="cat-toggle-switch">
                              <input
                                type="checkbox"
                                className="cat-toggle-input"
                                checked={product.status === 'Active'}
                                onChange={() => handleToggleStatus(product.id)}
                              />
                              <span className="cat-toggle-slider"></span>
                            </label>
                          </td>
                          <td className="cat-td cat-td--actions cat-td--center">
                            <div className="cat-action-group">
                              <button type="button" className="cat-action-btn cat-action-btn--edit" title="Edit" onClick={() => openEditModal(product)}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                              </button>
                              <button type="button" className="cat-action-btn cat-action-btn--delete" title="Delete" onClick={() => handleDeleteProduct(product.id)}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* TABLE FOOTER / PAGINATION */}
            <div className="cat-table-footer">
              <div className="cat-summary-text">
                Showing {filteredProducts.length === 0 ? 0 : (safePage - 1) * itemsPerPage + 1} to {Math.min(safePage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
              </div>

              <div className="cat-pagination-controls">
                <button
                  type="button"
                  className="cat-page-btn cat-page-btn--nav"
                  disabled={safePage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((page) => page === 1 || page === totalPages || Math.abs(page - safePage) <= 1)
                  .reduce((acc, page, idx, arr) => {
                    if (idx > 0 && page - arr[idx - 1] > 1) acc.push('ellipsis-' + page);
                    acc.push(page);
                    return acc;
                  }, [])
                  .map((page) =>
                    typeof page === 'string' ? (
                      <span key={page} className="cat-page-ellipsis">...</span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        className={`cat-page-btn ${safePage === page ? 'cat-page-btn--active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    )
                  )}

                <button
                  type="button"
                  className="cat-page-btn cat-page-btn--nav"
                  disabled={safePage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                >
                  ›
                </button>

                <div className="cat-page-select-wrapper">
                  <select
                    className="cat-page-select"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value={5}>5 / page</option>
                    <option value={10}>10 / page</option>
                    <option value={20}>20 / page</option>
                  </select>
                  <span className="cat-page-select-chevron">›</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ================= RIGHT SIDEBAR SECTION ================= */}
        <aside className="cat-sidebar">
          {/* PRODUCT STATUS WIDGET */}
          <section className="cat-widget cat-widget--chart">
            <h2 className="cat-widget-title">Product Status</h2>
            <div className="cat-chart-container">
              <svg className="cat-donut-chart" viewBox="0 0 36 36">
                <circle className="cat-donut-bg" cx="18" cy="18" r="15.915" fill="transparent" stroke="#E2E8F0" strokeWidth="3.5" />
                <circle className="cat-donut-segment cat-donut-segment--active" cx="18" cy="18" r="15.915" fill="transparent" stroke="#34D399" strokeWidth="3.5"
                  strokeDasharray={`${activePct} ${100 - activePct}`} strokeDashoffset={activeOffset} />
                <circle className="cat-donut-segment cat-donut-segment--inactive" cx="18" cy="18" r="15.915" fill="transparent" stroke="#F87171" strokeWidth="3.5"
                  strokeDasharray={`${inactivePct} ${100 - inactivePct}`} strokeDashoffset={inactiveOffset} />
                <circle className="cat-donut-segment cat-donut-segment--out" cx="18" cy="18" r="15.915" fill="transparent" stroke="#FBBF24" strokeWidth="3.5"
                  strokeDasharray={`${outPct} ${100 - outPct}`} strokeDashoffset={outOffset} />
              </svg>
            </div>

            <ul className="cat-legend-list">
              <li className="cat-legend-item">
                <span className="cat-legend-dot cat-legend-dot--active"></span>
                <span className="cat-legend-label">Active ({activeCount})</span>
              </li>
              <li className="cat-legend-item">
                <span className="cat-legend-dot cat-legend-dot--inactive"></span>
                <span className="cat-legend-label">Inactive ({inactiveCount})</span>
              </li>
              <li className="cat-legend-item">
                <span className="cat-legend-dot cat-legend-dot--out"></span>
                <span className="cat-legend-label">Out of Stock ({outOfStockCount})</span>
              </li>
            </ul>
          </section>

          {/* TIPS WIDGET */}
          <section className="cat-widget cat-widget--tips">
            <div className="cat-tips-header">
              <span className="cat-tips-icon">💡</span>
              <h2 className="cat-widget-title cat-widget-title--no-margin">Tips</h2>
            </div>
            <p className="cat-tips-content">
              Use high quality images and detailed descriptions to increase sales.
            </p>
          </section>
        </aside>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {modalMode === 'edit' && (
        <div className="cat-modal-overlay" onClick={closeModal}>
          <div className="cat-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="cat-modal-title">Edit Product</h3>
            <form className="cat-modal-form" onSubmit={handleFormSubmit}>
              <label className="cat-modal-label">
                Product Name
                <input required className="cat-modal-input" value={formData.name} onChange={(e) => handleFormChange('name', e.target.value)} />
              </label>
              <label className="cat-modal-label">
                Subtitle
                <input className="cat-modal-input" value={formData.subtitle} onChange={(e) => handleFormChange('subtitle', e.target.value)} />
              </label>
              <div className="cat-modal-row">
                <label className="cat-modal-label">
                  Category
                  <select className="cat-modal-input" value={formData.category} onChange={(e) => handleFormChange('category', e.target.value)}>
                    {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </label>
                <label className="cat-modal-label">
                  Status
                  <select className="cat-modal-input" value={formData.status} onChange={(e) => handleFormChange('status', e.target.value)}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </label>
              </div>
              <div className="cat-modal-row">
                <label className="cat-modal-label">
                  Price (₹)
                  <input type="number" min="0" className="cat-modal-input" value={formData.price} onChange={(e) => handleFormChange('price', e.target.value)} />
                </label>
                <label className="cat-modal-label">
                  Original Price (₹)
                  <input type="number" min="0" className="cat-modal-input" value={formData.originalPrice} onChange={(e) => handleFormChange('originalPrice', e.target.value)} />
                </label>
              </div>
              <div className="cat-modal-row">
                <label className="cat-modal-label">
                  Stock Qty
                  <input type="number" min="0" className="cat-modal-input" value={formData.stock} onChange={(e) => handleFormChange('stock', e.target.value)} />
                </label>
                <label className="cat-modal-label">
                  Stock Status
                  <select className="cat-modal-input" value={formData.stockStatus} onChange={(e) => handleFormChange('stockStatus', e.target.value)}>
                    {STOCK_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>
              <div className="cat-modal-actions">
                <button type="button" className="cat-btn cat-btn--reset" onClick={closeModal}>Cancel</button>
                <button type="submit" className="cat-btn cat-btn--filter">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;