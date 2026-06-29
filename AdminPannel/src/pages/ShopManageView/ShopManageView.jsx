import React, { useState } from 'react';
import './ShopManageView.css';

const ShopManageView = () => {
  // States for images
  const [images, setImages] = useState(['']);

  // States for Pricing
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [discount, setDiscount] = useState('');

  // Handle Dynamic Inline Image Upload
  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    
    
    if (value !== '' && index === images.length - 1) {
      updatedImages.push('');
    }
    setImages(updatedImages);
  };

  // Auto calculate discount or price if needed (Optional Logic)
  const calculateDiscount = (oldPr, newPr) => {
    if (oldPr && newPr) {
      const disc = ((oldPr - newPr) / oldPr) * 100;
      setDiscount(Math.round(disc));
    }
  };

  return (
    <div className="form-container">
      <h2>Shop Management Form</h2>
      <form onSubmit={(e) => e.preventDefault()} className="shop-form">
        
        {/* 1. Image Upload Section (Inline Dynamic) */}
        <div className="form-group">
          <label>Product Images (URL/Path)</label>
          <div className="image-upload-inline">
            {images.map((image, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Image ${index + 1} URL`}
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="image-input"
              />
            ))}
          </div>
        </div>

        {/* 2. Product Title & Name Section */}
        <div className="form-group">
          <label htmlFor="productTitle">Product Title / Name</label>
          <input 
            type="text" 
            id="productTitle" 
            placeholder="Enter product title or name" 
            className="form-control"
          />
        </div>

        {/* 3. Price & Discount Section */}
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="oldPrice">Old Price (₹)</label>
            <input 
              type="number" 
              id="oldPrice" 
              value={oldPrice}
              onChange={(e) => {
                setOldPrice(e.target.value);
                calculateDiscount(e.target.value, newPrice);
              }}
              placeholder="0.00" 
              className="form-control"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="newPrice">New Price (₹)</label>
            <input 
              type="number" 
              id="newPrice" 
              value={newPrice}
              onChange={(e) => {
                setNewPrice(e.target.value);
                calculateDiscount(oldPrice, e.target.value);
              }}
              placeholder="0.00" 
              className="form-control"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="discount">Discount (%)</label>
            <input 
              type="number" 
              id="discount" 
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="0" 
              className="form-control"
            />
          </div>
        </div>

        {/* 4. Available Quantity Form */}
        <div className="form-group">
          <label htmlFor="quantity">Available Quantity</label>
          <input 
            type="number" 
            id="quantity" 
            placeholder="Enter available stock" 
            className="form-control"
          />
        </div>

        {/* 5. Size of the Image Form */}
        <div className="form-group">
          <label htmlFor="imageSize">Preferred Image Display Size</label>
          <select id="imageSize" className="form-control dropdown-select">
            <option value="">Select Size Ratio</option>
            <option value="square">Square (1:1)</option>
            <option value="portrait">Portrait (3:4)</option>
            <option value="landscape">Landscape (16:9)</option>
          </select>
        </div>

        {/* 6. Estimated Delivery Time Form */}
        <div className="form-group">
          <label htmlFor="deliveryTime">Estimated Delivery Time</label>
          <select id="deliveryTime" className="form-control dropdown-select">
            <option value="">Select Delivery Region & Time</option>
            <option value="mumbai">Mumbai (6-7 days)</option>
            <option value="all-india">All Over India (10-15 days)</option>
            <option value="express">Express Metro (2-3 days)</option>
          </select>
        </div>

        {/* 7. Guarantee & Warranty Period Section */}
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="guarantee">Guarantee Period</label>
            <select id="guarantee" className="form-control dropdown-select">
              <option value="none">No Guarantee</option>
              <option value="6-months">6 Months</option>
              <option value="1-year">1 Year</option>
              <option value="2-years">2 Years</option>
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="warranty">Warranty Period</label>
            <select id="warranty" className="form-control dropdown-select">
              <option value="none">No Warranty</option>
              <option value="6-months">6 Months</option>
              <option value="1-year">1 Year</option>
              <option value="2-years">2 Years</option>
              <option value="5-years">5 Years</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">Save Product</button>
      </form>
    </div>
  );
};

export default ShopManageView;