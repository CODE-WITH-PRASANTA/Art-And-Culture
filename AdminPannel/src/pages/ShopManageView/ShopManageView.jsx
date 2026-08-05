import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './ShopManageView.css';
import API, { BASE_URL } from "../../api/axios";

const ShopManageView = () => {
  // --- Shop Details States ---
  const [isMainOpen, setIsMainOpen] = useState(true);
  const [images, setImages] = useState([null]);
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [discount, setDiscount] = useState('');

  // --- Added Missing States (Step 1) ---
  const [productTitle, setProductTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageRatio, setImageRatio] = useState("");
  const [location, setLocation] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [guarantee, setGuarantee] = useState("none");
  const [warranty, setWarranty] = useState("none");

  // --- Material Details States ---
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [mainMaterial, setMainMaterial] = useState('');

  // --- NEW Independent Main Dropdown States ---
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [productDetails, setProductDetails] = useState('');

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [aboutProduct, setAboutProduct] = useState('');

  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [sizeManagement, setSizeManagement] = useState('');

  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

  // Handle Dynamic Inline Image Upload
  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = file;

      if (index === prevImages.length - 1) {
        updatedImages.push(null);
      }
      return updatedImages;
    });
  };

  // Auto calculate discount
  const calculateDiscount = (oldPr, newPr) => {
    if (oldPr && newPr) {
      const disc = ((oldPr - newPr) / oldPr) * 100;
      setDiscount(Math.round(disc) > 0 ? Math.round(disc) : 0);
    } else {
      setDiscount('');
    }
  };

  // Dynamic FAQ Handlers
  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const addFaqRow = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const removeFaqRow = (index) => {
    if (faqs.length > 1) {
      const updatedFaqs = faqs.filter((_, i) => i !== index);
      setFaqs(updatedFaqs);
    }
  };

  // --- Create Save Function (Step 3) ---
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      images.forEach((img) => {
        if (img) {
          formData.append("images", img);
        }
      });

      formData.append("productTitle", productTitle);
      formData.append("oldPrice", oldPrice);
      formData.append("newPrice", newPrice);
      formData.append("quantity", quantity);
      formData.append("imageRatio", imageRatio);
      formData.append("location", location);
      formData.append("deliveryTime", deliveryTime);
      formData.append("guarantee", guarantee);
      formData.append("warranty", warranty);
      formData.append("mainMaterial", mainMaterial);
      formData.append("productDetails", productDetails);
      formData.append("aboutProduct", aboutProduct);
      formData.append("sizeManagement", sizeManagement);

      formData.append(
        "faqs",
        JSON.stringify(faqs)
      );

      const response = await API.post(
        "/shopview/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert("Product Created Successfully");
      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "Failed to save product"
      );
    }
  };

  // TinyMCE Default Configuration
const tinyMceConfig = {
  height: 250,
  menubar: false,

  plugins:
    "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",

  toolbar:
    "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image | code fullscreen | help"
};

  return (
    <div className="shop-manage-container">
      
      {/* ================= ACCORDION 1: Shop Details ================= */}
      <div className={`main-accordion ${isMainOpen ? 'open' : ''}`}>
        <div className="main-accordion-header" onClick={() => setIsMainOpen(!isMainOpen)}>
          <h2>Shop Details</h2>
          <span className="arrow-icon">{isMainOpen ? '▼' : '▲'}</span>
        </div>

        {isMainOpen && (
          <div className="main-accordion-content">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form-flat">
              
              {/* 1. Upload Images */}
              <div className="form-section">
                <h3 className="section-heading">1. Upload Images</h3>
                <div className="image-upload-inline">
                  {images.map((image, index) => (
                    <div key={index} className="image-box">
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="image-preview"
                        />
                      ) : (
                        <label className="upload-card">
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => handleImageChange(index, e)}
                          />
                          <span>+ Upload Image</span>
                        </label>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Product Title (Connected Step 2) */}
              <div className="form-section">
                <h3 className="section-heading">2. Product Title & Name</h3>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  placeholder="Enter product title or name..."
                  className="form-control"
                />
              </div>

              {/* 3. Pricing & Discount */}
              <div className="form-section">
                <h3 className="section-heading">3. Pricing & Discount</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Old Price (₹)</label>
                    <input
                      type="number"
                      value={oldPrice}
                      onChange={(e) => {
                        setOldPrice(e.target.value);
                        calculateDiscount(e.target.value, newPrice);
                      }}
                      placeholder="0.00"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>New Price (₹)</label>
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => {
                        setNewPrice(e.target.value);
                        calculateDiscount(oldPrice, e.target.value);
                      }}
                      placeholder="0.00"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Discount (%)</label>
                    <input
                      type="number"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      placeholder="0"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Quantity & Size (Connected Step 2) */}
              <div className="form-section">
                <h3 className="section-heading">4. Available Quantity & Image Size</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Available Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Enter stock quantity"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Image Size / Ratio</label>
                    <select 
                      value={imageRatio}
                      onChange={(e) => setImageRatio(e.target.value)}
                      className="form-control dropdown-select"
                    >
                      <option value="">Select Size</option>
                      <option value="1:1">Square (1:1)</option>
                      <option value="3:4">Portrait (3:4)</option>
                      <option value="16:9">Landscape (16:9)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 5. Delivery (Connected Step 2) */}
              <div className="form-section">
                <h3 className="section-heading">5. Delivery</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Location / Region</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Mumbai, All Over India"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Estimated Delivery Time</label>
                    <input
                      type="text"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      placeholder="e.g., 6-7 days"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {/* 6. Guarantee & Warranty (Connected Step 2) */}
              <div className="form-section">
                <h3 className="section-heading">6. Guaranty & Warranty</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Guarantee Period</label>
                    <select 
                      value={guarantee}
                      onChange={(e) => setGuarantee(e.target.value)}
                      className="form-control dropdown-select"
                    >
                      <option value="none">No Guarantee</option>
                      <option value="6-months">6 Months</option>
                      <option value="1-year">1 Year</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Warranty Period</label>
                    <select 
                      value={warranty}
                      onChange={(e) => setWarranty(e.target.value)}
                      className="form-control dropdown-select"
                    >
                      <option value="none">No Warranty</option>
                      <option value="6-months">6 Months</option>
                      <option value="1-year">1 Year</option>
                    </select>
                  </div>
                </div>
              </div>

            </form>
          </div>
        )}
      </div>

      {/* ================= ACCORDION 2: Material Details ================= */}
      <div className={`main-accordion ${isMaterialOpen ? 'open' : ''}`}>
        <div className="main-accordion-header" onClick={() => setIsMaterialOpen(!isMaterialOpen)}>
          <h2>Material Details</h2>
          <span className="arrow-icon">{isMaterialOpen ? '▼' : '▲'}</span>
        </div>

        {isMaterialOpen && (
          <div className="main-accordion-content">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form-flat">
              <div className="form-section">
                <h3 className="section-heading">1. Main Material</h3>
                <input
                  type="text"
                  value={mainMaterial}
                  onChange={(e) => setMainMaterial(e.target.value)}
                  placeholder="e.g., Cotton, Leather, Stainless Steel..."
                  className="form-control"
                />
              </div>
            </form>
          </div>
        )}
      </div>

      {/* ================= ACCORDION 3: Product Details (TinyMCE) ================= */}
      <div className={`main-accordion ${isProductOpen ? 'open' : ''}`}>
        <div className="main-accordion-header" onClick={() => setIsProductOpen(!isProductOpen)}>
          <h2>Product Details</h2>
          <span className="arrow-icon">{isProductOpen ? '▼' : '▲'}</span>
        </div>

        {isProductOpen && (
          <div className="main-accordion-content">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form-flat">
              <div className="form-section">
                <h3 className="section-heading">Manage Detailed Product Information</h3>
         <Editor
  apiKey="8hswbe7bfeeneui9eb9gjgsym8ku30nx5gwre9808ajdzniu"
  init={tinyMceConfig}
  value={productDetails}
  onEditorChange={(content) => {
    const plainText = content.replace(/<[^>]+>/g, "").trim();
    setProductDetails(plainText);
  }}
/>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* ================= ACCORDION 4: About Product (TinyMCE) ================= */}
      <div className={`main-accordion ${isAboutOpen ? 'open' : ''}`}>
        <div className="main-accordion-header" onClick={() => setIsAboutOpen(!isAboutOpen)}>
          <h2>About Product</h2>
          <span className="arrow-icon">{isAboutOpen ? '▼' : '▲'}</span>
        </div>

        {isAboutOpen && (
          <div className="main-accordion-content">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form-flat">
              <div className="form-section">
                <h3 className="section-heading">About of the Product Highlights</h3>
 <Editor
  apiKey="8hswbe7bfeeneui9eb9gjgsym8ku30nx5gwre9808ajdzniu"
  init={tinyMceConfig}
  value={aboutProduct}
  onEditorChange={(content) => {
    const plainText = content.replace(/<[^>]+>/g, "").trim();
    setAboutProduct(plainText);
  }}
/>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* ================= ACCORDION 5: Size Management (TinyMCE) ================= */}
      <div className={`main-accordion ${isSizeOpen ? 'open' : ''}`}>
        <div className="main-accordion-header" onClick={() => setIsSizeOpen(!isSizeOpen)}>
          <h2>Size Management</h2>
          <span className="arrow-icon">{isSizeOpen ? '▼' : '▲'}</span>
        </div>

        {isSizeOpen && (
          <div className="main-accordion-content">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form-flat">
              <div className="form-section">
                <h3 className="section-heading">Size Management Guidelines & Instructions</h3>
     <Editor
  apiKey="8hswbe7bfeeneui9eb9gjgsym8ku30nx5gwre9808ajdzniu"
  init={tinyMceConfig}
  value={sizeManagement}
  onEditorChange={(content) => {
    const plainText = content.replace(/<[^>]+>/g, "").trim();
    setSizeManagement(plainText);
  }}
/>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* ================= ACCORDION 6: FAQ Management ================= */}
      <div className={`main-accordion ${isFaqOpen ? 'open' : ''}`}>
        <div className="main-accordion-header" onClick={() => setIsFaqOpen(!isFaqOpen)}>
          <h2>FAQ Management</h2>
          <span className="arrow-icon">{isFaqOpen ? '▼' : '▲'}</span>
        </div>

        {isFaqOpen && (
          <div className="main-accordion-content">
            <form onSubmit={(e) => e.preventDefault()} className="shop-form-flat">
              <div className="form-section">
                <h3 className="section-heading">Manage Questions & Answers</h3>
                <div className="faq-container">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-row-block">
                      <div className="form-group">
                        <label>Question {index + 1}</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                          placeholder="Enter question here..."
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Answer</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                          placeholder="Enter answer here..."
                          className="form-control text-area-custom"
                          rows="3"
                        />
                      </div>
                      {faqs.length > 1 && (
                        <button 
                          type="button" 
                          className="remove-faq-btn" 
                          onClick={() => removeFaqRow(index)}
                        >
                          Remove FAQ
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="add-faq-btn" onClick={addFaqRow}>
                    + Add New FAQ
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Global Form Action Button (Connected Step 4) */}
      <div className="global-action-container">
        <button type="button" className="submit-btn" onClick={handleSubmit}>
          Save All Changes
        </button>
      </div>

    </div>
  );
};

export default ShopManageView;