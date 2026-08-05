import React, { useState } from 'react';
import './Reviews.css';

const initialReviews = [
  {
    id: 1,
    customer: 'Priya Sharma',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=32',
    product: 'Brass Ganesha Idol',
    sku: 'SKU: IDOL-001',
    rating: 5.0,
    review: 'Absolutely beautiful idol! The finishing is amazing and the quality is top-notch. Highly recommended!',
    status: 'Published',
    date: '2025-05-20',
    displayDate: 'May 20, 2025',
    time: '10:30 AM',
    hasText: true
  },
  {
    id: 2,
    customer: 'Rahul Verma',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=12',
    product: 'Madhubani Painting',
    sku: 'SKU: PAINT-002',
    rating: 4.0,
    review: 'Nice painting. Colors are vibrant and it was well packed.',
    status: 'Published',
    date: '2025-05-19',
    displayDate: 'May 19, 2025',
    time: '09:15 AM',
    hasText: true
  },
  {
    id: 3,
    customer: 'Anita Singh',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=26',
    product: 'Terracotta Vase',
    sku: 'SKU: VASE-003',
    rating: 5.0,
    review: 'Loved it! Adds a beautiful ethnic touch to my living room.',
    status: 'Published',
    date: '2025-05-18',
    displayDate: 'May 18, 2025',
    time: '04:45 PM',
    hasText: true
  },
  {
    id: 4,
    customer: 'Vikram Kapoor',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=15',
    product: 'Wooden Wall Art',
    sku: 'SKU: WALL-004',
    rating: 3.0,
    review: 'Good design but the size was smaller than expected.',
    status: 'Pending',
    date: '2025-05-18',
    displayDate: 'May 18, 2025',
    time: '12:20 PM',
    hasText: true
  },
  {
    id: 5,
    customer: 'Neha Patel',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=47',
    product: 'Handcrafted Jewelry Box',
    sku: 'SKU: BOX-005',
    rating: 5.0,
    review: 'Very elegant and well-made. Perfect for gifting.',
    status: 'Published',
    date: '2025-05-17',
    displayDate: 'May 17, 2025',
    time: '11:05 AM',
    hasText: true
  },
  {
    id: 6,
    customer: 'Sanjay Kumar',
    verified: false,
    avatar: 'https://i.pravatar.cc/150?img=60',
    product: 'Lippan Art Wall Hanging',
    sku: 'SKU: LIPON-006',
    rating: 2.0,
    review: 'The product received was damaged.',
    status: 'Rejected',
    date: '2025-05-16',
    displayDate: 'May 16, 2025',
    time: '03:30 PM',
    hasText: true
  },
  {
    id: 7,
    customer: 'Meera Joshi',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=44',
    product: 'Buddha Showpiece',
    sku: 'SKU: SHOW-007',
    rating: 4.0,
    review: 'Nice finish and looks premium. Delivery was also quick.',
    status: 'Published',
    date: '2025-05-15',
    displayDate: 'May 15, 2025',
    time: '02:10 PM',
    hasText: true
  },
  {
    id: 8,
    customer: 'Aman Gupta',
    verified: true,
    avatar: 'https://i.pravatar.cc/150?img=68',
    product: 'Brass Ganesha Idol',
    sku: 'SKU: IDOL-001',
    rating: 5.0,
    review: 'Exceeded my expectations!',
    status: 'Published',
    date: '2025-05-14',
    displayDate: 'May 14, 2025',
    time: '01:15 PM',
    hasText: true
  }
];

const Reviews = () => {
  // Main Data State
  const [reviews, setReviews] = useState(initialReviews);

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  
  // Sidebar Draft Filter States
  const [draftRating, setDraftRating] = useState('All');
  const [draftReviewWith, setDraftReviewWith] = useState('All');
  const [draftStatus, setDraftStatus] = useState('All');
  const [draftVerified, setDraftVerified] = useState('All');
  const [draftSortBy, setDraftSortBy] = useState('Newest First');

  // Applied Sidebar Filters
  const [appliedFilters, setAppliedFilters] = useState({
    rating: 'All',
    reviewWith: 'All',
    status: 'All',
    verified: 'All',
    sortBy: 'Newest First'
  });

  // Modal View State
  const [selectedReviewForView, setSelectedReviewForView] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter Logic
  const filteredReviews = reviews.filter((item) => {
    // 1. Search Query
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.customer.toLowerCase().includes(query) ||
      item.product.toLowerCase().includes(query) ||
      item.review.toLowerCase().includes(query);

    // 2. Tab Filter
    const matchesTab =
      activeTab === 'All' || item.status.toLowerCase() === activeTab.toLowerCase();

    // 3. Product Dropdown
    const matchesProduct =
      selectedProduct === 'All' || item.product === selectedProduct;

    // 4. Calendar Date Picker
    const matchesDate =
      !selectedDate || item.date === selectedDate;

    // 5. Applied Sidebar Filters
    const matchesRatingPill =
      appliedFilters.rating === 'All' || item.rating === parseFloat(appliedFilters.rating);

    const matchesStatusSelect =
      appliedFilters.status === 'All' || item.status.toLowerCase() === appliedFilters.status.toLowerCase();

    const matchesVerifiedSelect =
      appliedFilters.verified === 'All' ||
      (appliedFilters.verified === 'Verified' && item.verified) ||
      (appliedFilters.verified === 'Not Verified' && !item.verified);

    return (
      matchesSearch &&
      matchesTab &&
      matchesProduct &&
      matchesDate &&
      matchesRatingPill &&
      matchesStatusSelect &&
      matchesVerifiedSelect
    );
  }).sort((a, b) => {
    if (appliedFilters.sortBy === 'Newest First') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  // Apply Sidebar Filters
  const handleApplyFilters = () => {
    setAppliedFilters({
      rating: draftRating,
      reviewWith: draftReviewWith,
      status: draftStatus,
      verified: draftVerified,
      sortBy: draftSortBy
    });
    setCurrentPage(1);
  };

  // Reset Filters
  const handleReset = () => {
    setSearchQuery('');
    setActiveTab('All');
    setSelectedProduct('All');
    setSelectedRating('All');
    setSelectedDate('');
    setDraftRating('All');
    setDraftReviewWith('All');
    setDraftStatus('All');
    setDraftVerified('All');
    setDraftSortBy('Newest First');
    setAppliedFilters({
      rating: 'All',
      reviewWith: 'All',
      status: 'All',
      verified: 'All',
      sortBy: 'Newest First'
    });
    setCurrentPage(1);
  };

  // CSV Export Download
  const handleDownloadCSV = () => {
    if (filteredReviews.length === 0) {
      alert('कोई डेटा डाउनलोड करने के लिए उपलब्ध नहीं है।');
      return;
    }

    const headers = ['ID,Customer,Verified,Product,SKU,Rating,Review,Status,Date,Time'];
    const rows = filteredReviews.map((r) =>
      `"${r.id}","${r.customer}","${r.verified}","${r.product}","${r.sku}","${r.rating}","${r.review.replace(/"/g, '""')}","${r.status}","${r.displayDate}","${r.time}"`
    );

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `reviews_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Actions
  const handleDelete = (id) => {
    if (window.confirm('क्या आप इस रिव्यू को सचमुच डिलीट करना चाहते हैं?')) {
      setReviews((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleEditStatus = (id, currentStatus) => {
    const options = ['Published', 'Pending', 'Rejected'];
    const newStatus = prompt(`नया स्टेटस चुनें (${options.join(', ')}):`, currentStatus);
    
    if (newStatus && options.map(o => o.toLowerCase()).includes(newStatus.toLowerCase())) {
      const formattedStatus = options.find(o => o.toLowerCase() === newStatus.toLowerCase());
      setReviews((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: formattedStatus } : item))
      );
    } else if (newStatus !== null) {
      alert('कृपया सही स्टेटस दर्ज करें: Published, Pending, या Rejected');
    }
  };

  // Pagination Calculations
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReviews.slice(indexOfFirstItem, indexOfLastItem);

  // Dynamic Stats
  const publishedCount = reviews.filter((r) => r.status === 'Published').length;
  const pendingCount = reviews.filter((r) => r.status === 'Pending').length;
  const rejectedCount = reviews.filter((r) => r.status === 'Rejected').length;

  return (
    <div className="reviews-app">
      {/* Top Header */}
      <header className="main-header">
        <div>
          <h2>Reviews Management</h2>
          <p className="subtext">Manage and monitor customer reviews for your products</p>
        </div>
        <div className="header-controls">
          {/* Search Bar */}
          <div className="search-box-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
          <button className="btn-filter" onClick={handleApplyFilters}>⚙️ Filter</button>
          {/* Download CSV Button */}
          <button className="btn-export" onClick={handleDownloadCSV}>
            📥 Export
          </button>
        </div>
      </header>

      {/* Top Summary Cards */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon icon-orange">⭐</div>
          <div>
            <span className="stat-label">Total Reviews</span>
            <h3 className="stat-number">{reviews.length}</h3>
            <span className="stat-sub font-gray">All time reviews</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-green">💬</div>
          <div>
            <span className="stat-label">Published Reviews</span>
            <h3 className="stat-number">{publishedCount}</h3>
            <span className="stat-sub font-green">
              {((publishedCount / (reviews.length || 1)) * 100).toFixed(1)}% of total
            </span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-yellow">🕒</div>
          <div>
            <span className="stat-label">Pending Reviews</span>
            <h3 className="stat-number">{pendingCount}</h3>
            <span className="stat-sub font-yellow">Awaiting approval</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-red">🗑️</div>
          <div>
            <span className="stat-label">Spam/Rejected</span>
            <h3 className="stat-number">{rejectedCount}</h3>
            <span className="stat-sub font-red">
              {((rejectedCount / (reviews.length || 1)) * 100).toFixed(1)}% of total
            </span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-purple">★</div>
          <div>
            <span className="stat-label">Average Rating</span>
            <h3 className="stat-number">4.6</h3>
            <div className="stars-gold">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="workspace-card">
        {/* Top Filters & Tabs Bar */}
        <div className="top-tabs-bar">
          <div className="status-tab-group">
            {[
              { label: `All Reviews (${reviews.length})`, val: 'All' },
              { label: `Published (${publishedCount})`, val: 'Published' },
              { label: `Pending (${pendingCount})`, val: 'Pending' },
              { label: `Rejected (${rejectedCount})`, val: 'Rejected' },
            ].map((tab) => (
              <button
                key={tab.val}
                className={`status-tab ${activeTab === tab.val ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.val);
                  setCurrentPage(1);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="top-dropdown-group">
            {/* Product Select */}
            <select
              className="select-box"
              value={selectedProduct}
              onChange={(e) => {
                setSelectedProduct(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="All">All Products</option>
              <option value="Brass Ganesha Idol">Brass Ganesha Idol</option>
              <option value="Madhubani Painting">Madhubani Painting</option>
              <option value="Terracotta Vase">Terracotta Vase</option>
            </select>

            {/* Rating Select */}
            <select
              className="select-box"
              value={selectedRating}
              onChange={(e) => {
                setSelectedRating(e.target.value);
                setDraftRating(e.target.value);
                setAppliedFilters((prev) => ({ ...prev, rating: e.target.value }));
                setCurrentPage(1);
              }}
            >
              <option value="All">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>

            {/* Calendar Working Input */}
            <input
              type="date"
              className="date-picker-input"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Content Layout: Sidebar + Table */}
        <div className="layout-grid">
          {/* Left Filter Sidebar */}
          <aside className="sidebar-filter">
            <div className="filter-panel">
              <div className="panel-header">
                <h3>Filter Reviews</h3>
                <button className="reset-link" onClick={handleReset}>Reset</button>
              </div>

              {/* Rating Pills */}
              <div className="filter-block">
                <label>Rating</label>
                <div className="pill-container">
                  {['All', '1', '2', '3', '4', '5'].map((r) => (
                    <button
                      key={r}
                      className={`pill-btn ${draftRating === r ? 'active' : ''}`}
                      onClick={() => setDraftRating(r)}
                    >
                      {r === 'All' ? 'All' : `★ ${r}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Review With */}
              <div className="filter-block">
                <label>Review With</label>
                <select
                  className="select-box full-w"
                  value={draftReviewWith}
                  onChange={(e) => setDraftReviewWith(e.target.value)}
                >
                  <option value="All">All (Reviews with & without text)</option>
                  <option value="With Text">With Text Only</option>
                </select>
              </div>

              {/* Status Select */}
              <div className="filter-block">
                <label>Status</label>
                <select
                  className="select-box full-w"
                  value={draftStatus}
                  onChange={(e) => setDraftStatus(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* Verified Purchase */}
              <div className="filter-block">
                <label>Verified Purchase</label>
                <select
                  className="select-box full-w"
                  value={draftVerified}
                  onChange={(e) => setDraftVerified(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Verified">Verified Only</option>
                  <option value="Not Verified">Not Verified</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="filter-block">
                <label>Sort By</label>
                <select
                  className="select-box full-w"
                  value={draftSortBy}
                  onChange={(e) => setDraftSortBy(e.target.value)}
                >
                  <option value="Newest First">Newest First</option>
                  <option value="Oldest First">Oldest First</option>
                </select>
              </div>

              <button className="apply-filter-btn" onClick={handleApplyFilters}>
                ⚙️ Apply Filters
              </button>
            </div>

            {/* Quick Stats Block */}
            <div className="filter-panel mt-16">
              <h3>Quick Stats</h3>
              <div className="stat-item-row">
                <span>Reviews this month</span>
                <strong>34</strong>
              </div>
              <div className="stat-item-row">
                <span>Reviews last month</span>
                <strong>41</strong>
              </div>
              <div className="stat-item-row vertical">
                <span>Most reviewed product</span>
                <strong>Brass Ganesha Idol</strong>
              </div>
              <div className="stat-item-row vertical">
                <span>Highest rating</span>
                <strong>4.9 (Brass Ganesha Idol)</strong>
              </div>
            </div>
          </aside>

          {/* Right Main Table */}
          <main className="table-container">
            <h3 className="table-heading">All Reviews</h3>

            <div className="responsive-table-scroll">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Rating</th>
                    <th>Review</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="user-profile-cell">
                            <img src={item.avatar} alt={item.customer} className="avatar-circle" />
                            <div>
                              <div className="user-name-text">{item.customer}</div>
                              <span className={`verified-tag ${item.verified ? 'is-verified' : ''}`}>
                                {item.verified ? 'Verified' : 'Not Verified'}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="product-info-cell">
                            <div className="product-icon-box">🏺</div>
                            <div>
                              <div className="product-title-text">{item.product}</div>
                              <div className="product-sku-text">{item.sku}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating-cell-box">
                            <span className="gold-stars">{'★'.repeat(Math.floor(item.rating))}</span>
                            <span className="rating-score">{item.rating.toFixed(1)}</span>
                          </div>
                        </td>
                        <td className="review-body-text">{item.review}</td>
                        <td>
                          <span className={`status-pill status-${item.status.toLowerCase()}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div className="date-main-text">{item.displayDate}</div>
                          <div className="time-sub-text">{item.time}</div>
                        </td>
                        <td>
                          <div className="action-button-group">
                            {/* Eye View Button */}
                            <button
                              className="act-btn btn-view"
                              title="View Details"
                              onClick={() => setSelectedReviewForView(item)}
                            >
                              👁️
                            </button>
                            {/* Edit Button */}
                            <button
                              className="act-btn btn-edit"
                              title="Edit Status"
                              onClick={() => handleEditStatus(item.id, item.status)}
                            >
                              ✏️
                            </button>
                            {/* Remove Button */}
                            <button
                              className="act-btn btn-delete"
                              title="Delete Review"
                              onClick={() => handleDelete(item.id)}
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="no-records-cell">
                        कोई समीक्षा नहीं मिली।
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <footer className="pagination-wrapper">
              <div className="pagination-info">
                Showing{' '}
                <strong>{filteredReviews.length > 0 ? indexOfFirstItem + 1 : 0}</strong> to{' '}
                <strong>{Math.min(indexOfLastItem, filteredReviews.length)}</strong> of{' '}
                <strong>{filteredReviews.length}</strong> reviews
              </div>

              <div className="pagination-nav-group">
                {/* Previous Button */}
                <button
                  className="page-btn nav-arrow"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  &lt;
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`page-btn ${currentPage === index + 1 ? 'active-page' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  className="page-btn nav-arrow"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  &gt;
                </button>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* View Modal Popup (Triggered by Eye Button) */}
      {selectedReviewForView && (
        <div className="modal-backdrop" onClick={() => setSelectedReviewForView(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Review Details</h3>
              <button className="close-modal" onClick={() => setSelectedReviewForView(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-user">
                <img src={selectedReviewForView.avatar} alt="user" />
                <div>
                  <h4>{selectedReviewForView.customer}</h4>
                  <p>{selectedReviewForView.verified ? 'Verified Purchase' : 'Unverified'}</p>
                </div>
              </div>
              <hr />
              <p><strong>Product:</strong> {selectedReviewForView.product} ({selectedReviewForView.sku})</p>
              <p><strong>Rating:</strong> ⭐ {selectedReviewForView.rating}</p>
              <p><strong>Status:</strong> {selectedReviewForView.status}</p>
              <p><strong>Date & Time:</strong> {selectedReviewForView.displayDate} at {selectedReviewForView.time}</p>
              <div className="modal-review-text">
                <strong>Review:</strong>
                <p>"{selectedReviewForView.review}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;