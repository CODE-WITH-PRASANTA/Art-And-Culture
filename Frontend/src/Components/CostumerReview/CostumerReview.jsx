import React, { useState } from 'react';
import './CostumerReview.css';

const CostumerReview = () => {
  // Tabs state: 'reviews' or 'questions'
  const [activeTab, setActiveTab] = useState('reviews');

  // Toggle tools state (Search bar & Filters row)
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Modals state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  // Sorting dropdown state
  const [sortBy, setSortBy] = useState('Most recent');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Active rating state for review modal stars
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const sortOptions = [
    'Most recent',
    'Highest rating',
    'Lowest rating',
    'Only pictures',
    'Pictures first',
    'Videos first',
    'Most helpful'
  ];

  return (
    <div className="cr-section-wrapper">
      
      {/* Top Banner Header: Stats & Main Action Buttons */}
      <div className="cr-top-banner">
        <div className="cr-stats-left">
          <h2 className="cr-main-heading">Customer Reviews</h2>
          <div className="cr-rating-summary">
            <span className="cr-global-score">5.0</span>
            <span className="cr-global-count">1 review</span>
          </div>
        </div>
        <div className="cr-actions-right">
          <button className="cr-btn-gold" onClick={() => setShowReviewModal(true)}>
            Write a review
          </button>
          <button className="cr-btn-outline" onClick={() => setShowQuestionModal(true)}>
            Ask a question
          </button>
        </div>
      </div>

      {/* Sub-navigation Tabs: Reviews vs Questions */}
      <div className="cr-tabs-nav-bar">
        <button 
          className={`cr-tab-item-btn ${activeTab === 'reviews' ? 'cr-tab-active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (1)
        </button>
        <button 
          className={`cr-tab-item-btn ${activeTab === 'questions' ? 'cr-tab-active' : ''}`}
          onClick={() => setActiveTab('questions')}
        >
          Questions (0)
        </button>
      </div>

      {/* ==========================================================================
         TAB CONTENT: REVIEWS 
         ========================================================================== */}
      {activeTab === 'reviews' && (
        <div className="cr-tab-content-panel">
          
          {/* Toolbar: Filter Buttons & Sort Select Dropdown */}
          <div className="cr-toolbar-row">
            <div className="cr-toolbar-left-tools">
              <button 
                className={`cr-tool-icon-btn ${showSearchBar ? 'tool-active' : ''}`} 
                onClick={() => setShowSearchBar(!showSearchBar)}
                title="Search Reviews"
              >
                🔍
              </button>
              <button 
                className={`cr-tool-icon-btn ${showFilters ? 'tool-active' : ''}`} 
                onClick={() => setShowFilters(!showFilters)}
                title="Filter by Rating"
              >
                🎛️
              </button>
            </div>

            <div className="cr-sort-dropdown-container">
              <div 
                className="cr-sort-trigger-box" 
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <span>{sortBy}</span>
                <span className="cr-dropdown-arrow-icon">▼</span>
              </div>
              
              {showSortDropdown && (
                <ul className="cr-sort-options-list">
                  {sortOptions.map((option, idx) => (
                    <li 
                      key={idx} 
                      className={`cr-sort-item ${sortBy === option ? 'sort-selected' : ''}`}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortDropdown(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Dynamic Search Bar Input Box */}
          {showSearchBar && (
            <div className="cr-dynamic-search-box">
              <input type="text" placeholder="Search" className="cr-search-input" />
            </div>
          )}

          {/* Dynamic Filters Star Badges Row */}
          {showFilters && (
            <div className="cr-dynamic-filters-box">
              <span className="cr-filter-label">Filters</span>
              <div className="cr-rating-badge-row">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span key={num} className="cr-star-badge-item">
                    {num} ★
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verified Customer Card */}
          <div className="cr-review-card-item">
            <div className="cr-card-stars-gold">★★★★★</div>
            <h4 className="cr-card-author-name">Shefale Patra</h4>
            <span className="cr-card-date-stamp">28/08/2025</span>
            <div className="cr-card-message-body">
              <p>Radhey Radhey 🙏</p>
              <p>Product is genuine</p>
            </div>
          </div>

        </div>
      )}

      {/* ==========================================================================
         TAB CONTENT: QUESTIONS (Empty State matching image 3)
         ========================================================================== */}
      {activeTab === 'questions' && (
        <div className="cr-tab-content-panel cr-center-empty-state">
          <p className="cr-empty-prompt-text">Ask a question about this product</p>
          <button className="cr-btn-outline" onClick={() => setShowQuestionModal(true)}>
            Ask a question
          </button>
        </div>
      )}

      {/* ==========================================================================
         POPUP MODAL 1: WRITE A REVIEW (Image 1 Structure)
         ========================================================================== */}
      {showReviewModal && (
        <div className="cr-modal-backdrop-overlay">
          <div className="cr-modal-box-card text-center">
            <button className="cr-modal-close-cross" onClick={() => setShowReviewModal(false)}>×</button>
            
            <h3 className="cr-modal-main-title">How would you rate this product?</h3>
            <p className="cr-modal-sub-desc">We would love it if you would share a bit about your experience.</p>
            
            {/* Modal Product Mid Thumbnail */}
            <div className="cr-modal-thumbnail-frame">
              <img 
                src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=300&auto=format&fit=crop" 
                alt="Product Thumbnail" 
              />
            </div>
            
            <h4 className="cr-modal-product-name-title">
              Brass Mushak Diya for Pooja | Antique Aarti Diya (3 Inch)
            </h4>

            {/* Interactive Stars Row Selector */}
            <div className="cr-interactive-stars-group">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <span 
                  key={starIndex}
                  className={`cr-giant-star-icon ${(hoverRating || selectedRating) >= starIndex ? 'star-filled' : ''}`}
                  onMouseEnter={() => setHoverRating(starIndex)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setSelectedRating(starIndex)}
                >
                  ★
                </span>
              ))}
            </div>
            
            {/* Range Guidelines Footer text labels */}
            <div className="cr-stars-range-labels-row">
              <span className="cr-range-lbl">Poor</span>
              <span className="cr-range-lbl">Great</span>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
         POPUP MODAL 2: ASK A QUESTION (Image 2 Structure)
         ========================================================================== */}
      {showQuestionModal && (
        <div className="cr-modal-backdrop-overlay">
          <div className="cr-modal-box-card">
            <button className="cr-modal-close-cross" onClick={() => setShowQuestionModal(false)}>×</button>
            
            <h3 className="cr-modal-main-title text-center m-bottom-md">Ask a question about this product</h3>
            
            {/* Form Input Control Blocks */}
            <div className="cr-form-input-block">
              <label className="cr-form-label">Question</label>
              <textarea placeholder="Write your question here" className="cr-form-textarea" rows={4}></textarea>
            </div>

            <div className="cr-form-input-block">
              <label className="cr-form-label">Email address (Required)</label>
              <input type="email" placeholder="Your email address" className="cr-form-text-field" />
              <span className="cr-field-hint-text">We respect your privacy.</span>
            </div>

            <div className="cr-form-input-block">
              <label className="cr-form-label">Display name (Required)</label>
              <input type="text" placeholder="Display name" className="cr-form-text-field" />
            </div>

            {/* Disclaimer terms footer text */}
            <p className="cr-form-disclaimer-text">
              We'll only contact you about your question if necessary. By submitting your question, you agree to our 
              <a href="#terms" className="cr-inline-link"> terms and conditions </a> and 
              <a href="#privacy" className="cr-inline-link"> privacy policy</a>.
            </p>

            {/* Form Submit Button */}
            <button className="cr-btn-gold w-100 m-top-md" onClick={() => setShowQuestionModal(false)}>
              Next
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CostumerReview;