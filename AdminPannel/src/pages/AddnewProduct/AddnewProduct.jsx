import React, { useState } from 'react';
import './AddnewProduct.css';

const AddnewProduct = () => {
  // Form State - All empty by default
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [fullDesc, setFullDesc] = useState('');
  
  // Tags / Highlights
  const [highlights, setHighlights] = useState([]);
  const [tagInput, setTagInput] = useState('');

  // Media
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [sizeRefImage, setSizeRefImage] = useState(null);

  // Pricing & Inventory
  const [sellingPrice, setSellingPrice] = useState('');
  const [comparePrice, setComparePrice] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sku, setSku] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  
  // Switches / Toggles
  const [isProductActive, setIsProductActive] = useState(true);
  const [enableSizeVariants, setEnableSizeVariants] = useState(false);

  // Size Variant Details
  const [sizeName, setSizeName] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('');
  const [unit, setUnit] = useState('inch');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('gram');
  const [sizeSku, setSizeSku] = useState('');
  const [barcode, setBarcode] = useState('');
  const [lowStockAlert, setLowStockAlert] = useState('');

  // SEO Settings
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [urlSlug, setUrlSlug] = useState('');

  // Notification State
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  // Tag Handlers
  const handleAddTag = () => {
    if (tagInput.trim() && !highlights.includes(tagInput.trim())) {
      setHighlights([...highlights, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setHighlights(highlights.filter((_, idx) => idx !== indexToRemove));
  };

  // Image Upload Handlers
  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSizeImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSizeRefImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddGalleryImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryImages([...galleryImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveGalleryImage = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  // Form Validation
  const validateForm = () => {
    if (!productName.trim()) {
      showNotification('Please enter product name', 'error');
      return false;
    }
    if (!category) {
      showNotification('Please select a category', 'error');
      return false;
    }
    if (!shortDesc.trim()) {
      showNotification('Please enter short description', 'error');
      return false;
    }
    if (!fullDesc.trim()) {
      showNotification('Please enter full description', 'error');
      return false;
    }
    if (!sellingPrice || parseFloat(sellingPrice) <= 0) {
      showNotification('Please enter a valid selling price', 'error');
      return false;
    }
    if (!sku.trim()) {
      showNotification('Please enter SKU', 'error');
      return false;
    }
    if (!stockQuantity || parseInt(stockQuantity) < 0) {
      showNotification('Please enter valid stock quantity', 'error');
      return false;
    }
    return true;
  };

  // Show Notification
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  // Publish Handler
  const handlePublish = () => {
    if (validateForm()) {
      const productData = {
        name: productName,
        category,
        subCategory,
        shortDesc,
        fullDesc,
        highlights,
        mainImage,
        galleryImages,
        sizeRefImage,
        sellingPrice,
        comparePrice,
        costPrice,
        sku,
        stockQuantity,
        isProductActive,
        enableSizeVariants,
        sizeName,
        height,
        width,
        depth,
        unit,
        weight,
        weightUnit,
        sizeSku,
        barcode,
        lowStockAlert,
        metaTitle,
        metaDesc,
        urlSlug,
        createdAt: new Date().toISOString()
      };
      
      console.log('Product Data:', productData);
      showNotification('Product published successfully! 🎉', 'success');
      
      // Reset form after successful publish (optional)
      // resetForm();
    }
  };

  // Save as Draft Handler
  const handleSaveDraft = () => {
    const draftData = {
      name: productName,
      category,
      subCategory,
      shortDesc,
      fullDesc,
      highlights,
      mainImage,
      galleryImages,
      sizeRefImage,
      sellingPrice,
      comparePrice,
      costPrice,
      sku,
      stockQuantity,
      isProductActive,
      enableSizeVariants,
      sizeName,
      height,
      width,
      depth,
      unit,
      weight,
      weightUnit,
      sizeSku,
      barcode,
      lowStockAlert,
      metaTitle,
      metaDesc,
      urlSlug,
      savedAt: new Date().toISOString()
    };
    
    console.log('Draft Data:', draftData);
    showNotification('Product saved as draft! 📝', 'success');
  };

  // Preview Handler
  const handlePreview = () => {
    if (!productName.trim()) {
      showNotification('Please fill in product details before preview', 'error');
      return;
    }
    showNotification('Opening preview... 👁️', 'success');
  };

  // Reset Form
  const resetForm = () => {
    setProductName('');
    setCategory('');
    setSubCategory('');
    setShortDesc('');
    setFullDesc('');
    setHighlights([]);
    setTagInput('');
    setMainImage(null);
    setGalleryImages([]);
    setSizeRefImage(null);
    setSellingPrice('');
    setComparePrice('');
    setCostPrice('');
    setSku('');
    setStockQuantity('');
    setIsProductActive(true);
    setEnableSizeVariants(false);
    setSizeName('');
    setHeight('');
    setWidth('');
    setDepth('');
    setUnit('inch');
    setWeight('');
    setWeightUnit('gram');
    setSizeSku('');
    setBarcode('');
    setLowStockAlert('');
    setMetaTitle('');
    setMetaDesc('');
    setUrlSlug('');
    showNotification('Form has been reset', 'success');
  };

  return (
    <div className="anp-wrapper">
      {/* Notification Toast */}
      {notification.show && (
        <div className={`anp-notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* HEADER BAR */}
      <header className="anp-header">
        <div className="anp-header-title">
          <h1>Add New Product</h1>
          <nav className="anp-breadcrumb">
            <span>Dashboard</span>
            <span className="anp-sep">›</span>
            <span>Products</span>
            <span className="anp-sep">›</span>
            <span className="anp-current">Add New Product</span>
          </nav>
        </div>
        <div className="anp-header-actions">
          <button type="button" className="anp-btn anp-btn-outline" onClick={handlePreview}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Preview
          </button>
          <button type="button" className="anp-btn anp-btn-outline" onClick={handleSaveDraft}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17 21 17 13 7 13 7 21"/>
              <polyline points="7 3 7 8 15 8"/>
            </svg>
            Save as Draft
          </button>
          <button type="button" className="anp-btn anp-btn-primary" onClick={handlePublish}>
            Publish Product
          </button>
          <button type="button" className="anp-btn anp-btn-danger" onClick={resetForm}>
            Reset Form
          </button>
        </div>
      </header>

      {/* TOP TABS BAR */}
      <div className="anp-tabs-bar">
        <button className="anp-tab-item active">✨ Basic Info</button>
        <button className="anp-tab-item">🖼️ Images & Media</button>
        <button className="anp-tab-item">🏷️ Pricing & Stock</button>
        <button className="anp-tab-item">⚙️ Attributes</button>
        <button className="anp-tab-item">📋 Details</button>
        <button className="anp-tab-item">🚚 Shipping & SEO</button>
      </div>

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="anp-main-layout">
        
        {/* LEFT COLUMN: FORM SECTIONS */}
        <div className="anp-left-col">
          
          {/* SECTION 1: BASIC INFO & MEDIA */}
          <div className="anp-card">
            <div className="anp-grid-2">
              
              {/* Product Info */}
              <div className="anp-col">
                <div className="anp-field">
                  <label>Product Name <span className="anp-required">*</span></label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="anp-input"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="anp-grid-2">
                  <div className="anp-field">
                    <label>Category <span className="anp-required">*</span></label>
                    <select 
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)} 
                      className="anp-select"
                    >
                      <option value="">Select Category</option>
                      <option value="Idols">Idols</option>
                      <option value="Home Decor">Home Decor</option>
                      <option value="Jewelry">Jewelry</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>
                  <div className="anp-field">
                    <label>Sub Category</label>
                    <select 
                      value={subCategory} 
                      onChange={(e) => setSubCategory(e.target.value)} 
                      className="anp-select"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="Hindu Gods">Hindu Gods</option>
                      <option value="Brass Statues">Brass Statues</option>
                      <option value="Gold Plated">Gold Plated</option>
                      <option value="Silver Plated">Silver Plated</option>
                    </select>
                  </div>
                </div>

                <div className="anp-field">
                  <div className="anp-field-header">
                    <label>Short Description <span className="anp-required">*</span></label>
                    <span className="anp-char-count">{shortDesc.length}/160</span>
                  </div>
                  <textarea
                    rows="3"
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    className="anp-textarea"
                    placeholder="Brief description of the product"
                    maxLength="160"
                  />
                </div>

                {/* Rich Text Editor Box */}
                <div className="anp-field">
                  <label>Full Description <span className="anp-required">*</span></label>
                  <div className="anp-editor-container">
                    <div className="anp-editor-toolbar">
                      <button type="button" title="Bold"><b>B</b></button>
                      <button type="button" title="Italic"><i>I</i></button>
                      <button type="button" title="Underline"><u>U</u></button>
                      <button type="button" title="Strikethrough"><s>S</s></button>
                      <span className="anp-tb-sep"></span>
                      <button type="button" title="Quote">”</button>
                      <button type="button" title="Code">&lt;&gt;</button>
                      <button type="button" title="Bullet List">• List</button>
                      <button type="button" title="Numbered List">1. List</button>
                      <span className="anp-tb-sep"></span>
                      <button type="button" title="Link">🔗</button>
                      <button type="button" title="Image">📷</button>
                      <button type="button" title="Expand">⛶</button>
                    </div>
                    <textarea
                      rows="6"
                      value={fullDesc}
                      onChange={(e) => setFullDesc(e.target.value)}
                      className="anp-editor-body"
                      placeholder="Detailed product description"
                    />
                  </div>
                </div>

                {/* Highlights / Key Features */}
                <div className="anp-field">
                  <label>Highlights (Key Features)</label>
                  <div className="anp-tags-container">
                    {highlights.map((tag, idx) => (
                      <span className="anp-tag" key={idx}>
                        {tag}
                        <button type="button" onClick={() => handleRemoveTag(idx)}>×</button>
                      </span>
                    ))}
                    <div className="anp-add-tag-box">
                      <input
                        type="text"
                        placeholder="Add tag..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        className="anp-tag-input"
                      />
                      <button type="button" onClick={handleAddTag} className="anp-add-tag-btn">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Images Uploader Section */}
              <div className="anp-col">
                <div className="anp-field-header">
                  <label>Product Images <span className="anp-required">*</span></label>
                </div>
                <div className="anp-main-image-card">
                  <span className="anp-badge-primary">Primary</span>
                  {mainImage ? (
                    <img src={mainImage} alt="Main Product Preview" className="anp-main-img" />
                  ) : (
                    <div className="anp-empty-image-placeholder">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      <span>Upload Main Image</span>
                    </div>
                  )}
                  <div className="anp-img-overlay-actions">
                    <label className="anp-img-act-btn" title="Upload Main Image">
                      📤
                      <input type="file" accept="image/*" onChange={handleMainImageUpload} hidden />
                    </label>
                    {mainImage && (
                      <button type="button" className="anp-img-act-btn" title="Remove" onClick={() => setMainImage(null)}>🗑️</button>
                    )}
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                <div className="anp-gallery-grid">
                  {galleryImages.map((img, idx) => (
                    <div className="anp-gallery-item" key={idx}>
                      <img src={img} alt={`Gallery ${idx}`} />
                      <button 
                        className="anp-gallery-remove"
                        onClick={() => handleRemoveGalleryImage(idx)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <label className="anp-gallery-upload-btn">
                    <span>+</span>
                    <small>Add More</small>
                    <input type="file" accept="image/*" onChange={handleAddGalleryImage} hidden />
                  </label>
                </div>
                <p className="anp-help-text">Recommended: 1200x1200px, JPG/PNG, Max 5MB</p>
              </div>

            </div>
          </div>

          {/* SECTION 2: PRICING, INVENTORY & STATUS */}
          <div className="anp-grid-3">
            {/* Pricing Card */}
            <div className="anp-card">
              <h3 className="anp-card-title">Pricing</h3>
              <div className="anp-field">
                <label>Selling Price <span className="anp-required">*</span></label>
                <div className="anp-input-prefix">
                  <span>₹</span>
                  <input 
                    type="number" 
                    value={sellingPrice} 
                    onChange={(e) => setSellingPrice(e.target.value)} 
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              <div className="anp-grid-2">
                <div className="anp-field">
                  <label>Compare At Price</label>
                  <input 
                    type="number" 
                    value={comparePrice} 
                    onChange={(e) => setComparePrice(e.target.value)} 
                    className="anp-input"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="anp-field">
                  <label>Cost Price <small>(Optional)</small></label>
                  <input 
                    type="number" 
                    value={costPrice} 
                    onChange={(e) => setCostPrice(e.target.value)} 
                    className="anp-input"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* Inventory Card */}
            <div className="anp-card">
              <h3 className="anp-card-title">Inventory</h3>
              <div className="anp-field">
                <label>SKU <span className="anp-required">*</span></label>
                <input 
                  type="text" 
                  value={sku} 
                  onChange={(e) => setSku(e.target.value)} 
                  className="anp-input"
                  placeholder="Enter SKU"
                />
              </div>
              <div className="anp-field">
                <label>Stock Quantity <span className="anp-required">*</span></label>
                <input 
                  type="number" 
                  value={stockQuantity} 
                  onChange={(e) => setStockQuantity(e.target.value)} 
                  className="anp-input"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>

            {/* Status & Visibility Card with Switch Bar */}
            <div className="anp-card">
              <div className="anp-card-header-flex">
                <h3 className="anp-card-title">Status & Visibility</h3>
                <label className="anp-switch" title="Toggle Product Active Status">
                  <input
                    type="checkbox"
                    checked={isProductActive}
                    onChange={(e) => setIsProductActive(e.target.checked)}
                  />
                  <span className="anp-slider"></span>
                </label>
              </div>

              <div className="anp-field">
                <label>Product Status</label>
                <select 
                  className="anp-select" 
                  value={isProductActive ? 'Active' : 'Inactive'} 
                  onChange={(e) => setIsProductActive(e.target.value === 'Active')}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="anp-field">
                <label>Visibility</label>
                <select className="anp-select" defaultValue="Published">
                  <option value="Published">Published</option>
                  <option value="Hidden">Hidden</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 3: SELECTED SIZE & DIMENSIONS DETAILS */}
          <div className="anp-card">
            <div className="anp-card-header-flex">
              <div>
                <h3 className="anp-card-title">Selected Size & Dimension Details</h3>
                <p className="anp-card-sub">Configure specific dimensions, weight, stock alerts, and reference images for size variants.</p>
              </div>
              <div className="anp-switch-wrap">
                <span className="anp-switch-label">{enableSizeVariants ? 'Size Variants Enabled' : 'Disabled'}</span>
                <label className="anp-switch">
                  <input
                    type="checkbox"
                    checked={enableSizeVariants}
                    onChange={(e) => setEnableSizeVariants(e.target.checked)}
                  />
                  <span className="anp-slider"></span>
                </label>
              </div>
            </div>

            {enableSizeVariants && (
              <div className="anp-grid-2-custom">
                {/* Size Form Inputs */}
                <div className="anp-col">
                  <div className="anp-field">
                    <div className="anp-field-header">
                      <label>Size Name <span className="anp-required">*</span></label>
                      <span className="anp-badge-default">Default</span>
                    </div>
                    <input 
                      type="text" 
                      value={sizeName} 
                      onChange={(e) => setSizeName(e.target.value)} 
                      className="anp-input"
                      placeholder="e.g., 5 Inch"
                    />
                  </div>

                  <div className="anp-grid-2">
                    <div className="anp-field">
                      <label>Dimensions <span className="anp-required">*</span></label>
                      <div className="anp-input-group">
                        <input 
                          type="text" 
                          placeholder="Height" 
                          value={height} 
                          onChange={(e) => setHeight(e.target.value)} 
                        />
                        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                          <option value="inch">inch</option>
                          <option value="cm">cm</option>
                        </select>
                      </div>
                      <div className="anp-input-group mt-8">
                        <input 
                          type="text" 
                          placeholder="Width" 
                          value={width} 
                          onChange={(e) => setWidth(e.target.value)} 
                        />
                        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                          <option value="inch">inch</option>
                          <option value="cm">cm</option>
                        </select>
                      </div>
                      <div className="anp-input-group mt-8">
                        <input 
                          type="text" 
                          placeholder="Depth" 
                          value={depth} 
                          onChange={(e) => setDepth(e.target.value)} 
                        />
                        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                          <option value="inch">inch</option>
                          <option value="cm">cm</option>
                        </select>
                      </div>
                    </div>

                    <div className="anp-field">
                      <label>Weight <span className="anp-required">*</span></label>
                      <div className="anp-input-group">
                        <input 
                          type="text" 
                          value={weight} 
                          onChange={(e) => setWeight(e.target.value)} 
                          placeholder="0.00"
                        />
                        <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                          <option value="gram">gram</option>
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="anp-grid-2">
                    <div className="anp-field">
                      <label>SKU (For this size)</label>
                      <input 
                        type="text" 
                        value={sizeSku} 
                        onChange={(e) => setSizeSku(e.target.value)} 
                        className="anp-input"
                        placeholder="Enter size SKU"
                      />
                    </div>
                    <div className="anp-field">
                      <label>Barcode <small>(Optional)</small></label>
                      <input 
                        type="text" 
                        value={barcode} 
                        onChange={(e) => setBarcode(e.target.value)} 
                        className="anp-input"
                        placeholder="Enter barcode"
                      />
                    </div>
                  </div>

                  <div className="anp-grid-4">
                    <div className="anp-field">
                      <label>Price <span className="anp-required">*</span></label>
                      <input 
                        type="number" 
                        value={sellingPrice} 
                        onChange={(e) => setSellingPrice(e.target.value)} 
                        className="anp-input"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="anp-field">
                      <label>Compare Price</label>
                      <input 
                        type="number" 
                        value={comparePrice} 
                        onChange={(e) => setComparePrice(e.target.value)} 
                        className="anp-input"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="anp-field">
                      <label>Stock Quantity <span className="anp-required">*</span></label>
                      <input 
                        type="number" 
                        value={stockQuantity} 
                        onChange={(e) => setStockQuantity(e.target.value)} 
                        className="anp-input"
                        placeholder="0"
                      />
                    </div>
                    <div className="anp-field">
                      <label>Low Stock Alert</label>
                      <input 
                        type="number" 
                        value={lowStockAlert} 
                        onChange={(e) => setLowStockAlert(e.target.value)} 
                        className="anp-input"
                        placeholder="10"
                      />
                    </div>
                  </div>
                </div>

                {/* Size Reference Image Uploader */}
                <div className="anp-col">
                  <label className="anp-field-label">Size Reference Image</label>
                  <div className="anp-size-img-card">
                    {sizeRefImage ? (
                      <>
                        <img src={sizeRefImage} alt="Size Reference" className="anp-size-img" />
                        <button 
                          type="button" 
                          className="anp-del-btn" 
                          title="Delete Image" 
                          onClick={() => setSizeRefImage(null)}
                        >
                          🗑️
                        </button>
                        <div className="anp-dimension-overlay">
                          <span>{height || '0'} {unit.toUpperCase()}</span>
                          <div className="anp-dim-bottom">
                            <span>{width || '0'} {unit.toUpperCase()}</span>
                            <span>{depth || '0'} {unit.toUpperCase()}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="anp-empty-size-placeholder">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/>
                          <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                        <span>Upload Size Reference</span>
                      </div>
                    )}
                  </div>

                  <label className="anp-upload-dropzone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span>Upload image</span>
                    <small>PNG, JPG up to 2MB</small>
                    <input type="file" accept="image/*" onChange={handleSizeImageUpload} hidden />
                  </label>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* RIGHT COLUMN: PREVIEW & SEO SIDEBAR */}
        <div className="anp-right-col">
          
          {/* Live Preview Card */}
          <div className="anp-card">
            <div className="anp-card-header-flex">
              <h3 className="anp-card-title">Live Preview</h3>
              <div className="anp-device-toggle">
                <button type="button" className="active">💻</button>
                <button type="button">📱</button>
              </div>
            </div>

            <div className="anp-preview-box">
              <div className="anp-preview-grid">
                <div className="anp-preview-thumbs">
                  {galleryImages.slice(0, 4).map((gImg, i) => (
                    <img key={i} src={gImg} alt={`Thumb ${i}`} className={i === 0 ? 'active' : ''} />
                  ))}
                  {galleryImages.length === 0 && (
                    <>
                      <div className="anp-preview-empty-thumb"></div>
                      <div className="anp-preview-empty-thumb"></div>
                      <div className="anp-preview-empty-thumb"></div>
                      <div className="anp-preview-empty-thumb"></div>
                    </>
                  )}
                </div>
                <div className="anp-preview-main">
                  {mainImage ? (
                    <img src={mainImage} alt="Live Product" />
                  ) : (
                    <div className="anp-preview-empty-main">
                      <span>No image</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="anp-preview-details">
                <h4 className="anp-pv-title">{productName || 'Product Title'}</h4>
                <p className="anp-pv-subtitle">{subCategory || 'Category'}</p>
                <div className="anp-pv-rating">
                  ★★★★★ <span className="anp-pv-count">(0 reviews)</span>
                </div>
                <div className="anp-pv-price-row">
                  <span className="anp-pv-price">₹{sellingPrice ? Number(sellingPrice).toLocaleString('en-IN') : '0.00'}</span>
                  {comparePrice && <span className="anp-pv-compare">₹{Number(comparePrice).toLocaleString('en-IN')}</span>}
                </div>
                <span className="anp-pv-stock-tag">{stockQuantity ? `In Stock (${stockQuantity})` : 'Out of Stock'}</span>

                <ul className="anp-pv-highlights">
                  {highlights.slice(0, 4).map((h, i) => (
                    <li key={i}>✓ {h}</li>
                  ))}
                  {highlights.length === 0 && <li>No highlights added</li>}
                </ul>
              </div>

              <button type="button" className="anp-btn-full-preview" onClick={handlePreview}>
                View Full Preview →
              </button>
            </div>
          </div>

          {/* SEO Settings Card */}
          <div className="anp-card">
            <h3 className="anp-card-title">SEO Settings</h3>
            
            <div className="anp-field">
              <div className="anp-field-header">
                <label>Meta Title</label>
                <span className="anp-char-count">{metaTitle.length}/60</span>
              </div>
              <input 
                type="text" 
                value={metaTitle} 
                onChange={(e) => setMetaTitle(e.target.value)} 
                className="anp-input"
                placeholder="Enter meta title"
                maxLength="60"
              />
            </div>

            <div className="anp-field">
              <div className="anp-field-header">
                <label>Meta Description</label>
                <span className="anp-char-count">{metaDesc.length}/160</span>
              </div>
              <textarea 
                rows="3" 
                value={metaDesc} 
                onChange={(e) => setMetaDesc(e.target.value)} 
                className="anp-textarea"
                placeholder="Enter meta description"
                maxLength="160"
              />
            </div>

            <div className="anp-field">
              <label>URL Slug</label>
              <input 
                type="text" 
                value={urlSlug} 
                onChange={(e) => setUrlSlug(e.target.value)} 
                className="anp-input"
                placeholder="/product-url-slug"
              />
            </div>
          </div>

          {/* Publish Action Card */}
          <div className="anp-card">
            <h3 className="anp-card-title">Publish</h3>
            <div className="anp-publish-meta">
              <div><span>Created At</span> <strong>{new Date().toLocaleString()}</strong></div>
              <div><span>Updated At</span> <strong>Just now</strong></div>
            </div>
            <button type="button" className="anp-btn anp-btn-primary full-width" onClick={handlePublish}>
              Publish Now
            </button>
            <button type="button" className="anp-btn anp-btn-outline full-width mt-8" onClick={handleSaveDraft}>
              Save as Draft
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddnewProduct;