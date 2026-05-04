import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./ShopManageView.css";

const ShopManageView = () => {
  const [product, setProduct] = useState({
    title: "",
    use: "",
    rating: "",
    stock: "",
    shipping: "",
    categoryType: "Normal",
    helpline: "",
    sizes: { height: "", width: "", weight: "" },
    details: "",
    faqs: [{ question: "", answer: "" }],
    images: [],
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (field, value) => {
    setProduct({
      ...product,
      sizes: { ...product.sizes, [field]: value },
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || product.images.length >= 5) return;

    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, file],
    }));
  };

  const removeImage = (index) => {
    const updated = product.images.filter((_, i) => i !== index);
    setProduct({ ...product, images: updated });
  };

  const addFAQ = () => {
    setProduct({
      ...product,
      faqs: [...product.faqs, { question: "", answer: "" }],
    });
  };

  const handleFAQChange = (i, field, value) => {
    const updated = [...product.faqs];
    updated[i][field] = value;
    setProduct({ ...product, faqs: updated });
  };

  useEffect(() => {
    return () => {
      product.images.forEach((file) => URL.revokeObjectURL(file));
    };
  }, [product.images]);

  return (
    <div className="shopManagement-container">
      {/* ================= LEFT FORM ================= */}
      <form className="shopManagement-card">
        <h2 className="shopManagement-title">Post Product</h2>

        <div className="shopManagement-grid">
          <div className="shopManagement-field full">
            <label>Product Title</label>
            <input name="title" value={product.title} onChange={handleChange} />
          </div>

          <div className="shopManagement-field">
            <label>Use</label>
            <input name="use" value={product.use} onChange={handleChange} />
          </div>

          <div className="shopManagement-field">
            <label>Category</label>
            <select
              name="categoryType"
              value={product.categoryType}
              onChange={handleChange}
            >
              <option>Normal</option>
              <option>Best Seller</option>
            </select>
          </div>

          <div className="shopManagement-field">
            <label>Rating (1–5)</label>
            <input
              type="number"
              min="1"
              max="5"
              name="rating"
              value={product.rating}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Stock</label>
            <input
              type="number"
              min="0"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Shipping Days</label>
            <input
              name="shipping"
              value={product.shipping}
              onChange={handleChange}
            />
          </div>

          <div className="shopManagement-field">
            <label>Helpline</label>
            <input
              name="helpline"
              value={product.helpline}
              onChange={handleChange}
            />
          </div>

          {/* SIZE */}
          <div className="shopManagement-field full">
            <label>Size Management</label>
            <div className="shopManagement-sizeGrid">
              <input
                placeholder="Height (cm)"
                onChange={(e) => handleSizeChange("height", e.target.value)}
              />
              <input
                placeholder="Width (cm)"
                onChange={(e) => handleSizeChange("width", e.target.value)}
              />
              <input
                placeholder="Weight (kg)"
                onChange={(e) => handleSizeChange("weight", e.target.value)}
              />
            </div>
          </div>

          {/* EDITOR */}
          <div className="shopManagement-field full">
            <label>Product Details</label>
            <Editor
              apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
              value={product.details}
              init={{ height: 250 }}
              onEditorChange={(content) =>
                setProduct({ ...product, details: content })
              }
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div className="shopManagement-field full">
            <label>Upload Images (Max 5)</label>

            <div className="shopManagement-uploadGrid">
              {product.images.map((file, index) => (
                <div key={index} className="shopManagement-uploadItem">
                  <img src={URL.createObjectURL(file)} alt="" />
                  <button type="button" onClick={() => removeImage(index)}>
                    ✕
                  </button>
                </div>
              ))}

              {product.images.length < 5 && (
                <label className="shopManagement-uploadBox">
                  +
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="shopManagement-faqBlock">
          <h3>FAQ</h3>

          {product.faqs.map((faq, i) => (
            <div key={i} className="shopManagement-faqRow">
              <input
                placeholder="Question"
                value={faq.question}
                onChange={(e) => handleFAQChange(i, "question", e.target.value)}
              />
              <textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => handleFAQChange(i, "answer", e.target.value)}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addFAQ}
            className="shopManagement-addBtn"
          >
            Add FAQ
          </button>
        </div>

        <button type="submit" className="shopManagement-submitBtn">
          Submit Product
        </button>
      </form>

      {/* ================= RIGHT PREVIEW ================= */}
      <div className="shopManagement-card shopManagement-previewCard">
        <h2 className="shopManagement-title">Live Preview</h2>

        <h2>{product.title || "Product Title"}</h2>

        <div className="shopManagement-previewMeta">
          ⭐ {product.rating || 0} | Stock: {product.stock || 0} |{" "}
          {product.categoryType}
        </div>

        <div className="shopManagement-previewImages">
          {product.images.map((file, i) => (
            <img key={i} src={URL.createObjectURL(file)} alt="" />
          ))}
        </div>

        <div className="shopManagement-previewSection">
          <strong>Size:</strong>
          <p>
            H: {product.sizes.height} | W: {product.sizes.width} | Weight:{" "}
            {product.sizes.weight}
          </p>
        </div>

        <div
          className="shopManagement-previewSection"
          dangerouslySetInnerHTML={{ __html: product.details }}
        />

        <div className="shopManagement-previewSection">
          <strong>FAQ:</strong>
          {product.faqs.map((f, i) => (
            <div key={i}>
              <b>{f.question}</b>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>Helpline:</strong> {product.helpline}
        </p>
      </div>
    </div>
  );
};

export default ShopManageView;
