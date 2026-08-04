import React, { useState, useEffect, useCallback } from "react";
import { FiX, FiChevronDown, FiPlusSquare } from "react-icons/fi";
import "./Addnewcategory.css";

const Addnewcategory = ({ isOpen = true, onClose, onAddCategory }) => {
  const [formData, setFormData] = useState({
    categoryName: "",
    slug: "",
    description: "",
    parentCategory: "",
  });

  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [visible, setVisible] = useState(isOpen);

  // Sync internal state whenever parent's isOpen prop changes
  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  // Auto-generate URL slug from Category Name
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "description" && value.length > 200) return;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // Auto-update slug as user types category name unless slug was manually edited
      if (name === "categoryName" && !isSlugManuallyEdited) {
        updated.slug = generateSlug(value);
      }

      return updated;
    });
  };

  const handleSlugChange = (e) => {
    setIsSlugManuallyEdited(true);
    setFormData((prev) => ({
      ...prev,
      slug: generateSlug(e.target.value),
    }));
  };

  const handleResetAndClose = useCallback(() => {
    // Reset state
    setFormData({
      categoryName: "",
      slug: "",
      description: "",
      parentCategory: "",
    });
    setIsSlugManuallyEdited(false);
    setVisible(false); // Hide internally

    // Notify parent component to update its state
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Allow closing modal by pressing the 'Escape' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && visible) {
        handleResetAndClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleResetAndClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.categoryName.trim() || !formData.slug.trim()) {
      alert("Please fill in required fields (*)");
      return;
    }

    if (onAddCategory) {
      onAddCategory(formData);
    }

    handleResetAndClose();
  };

  // Render nothing if either the parent prop or local state is false
  if (!visible) return null;

  return (
    <div className="Addnewcategory-overlay" onClick={handleResetAndClose}>
      <div
        className="Addnewcategory"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="Addnewcategory-header">
          <div className="Addnewcategory-title-area">
            <h2>Add New Category</h2>
            <p>Create a new category to organize your products</p>
          </div>
          <button
            type="button"
            className="Addnewcategory-close-btn"
            onClick={handleResetAndClose}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="Addnewcategory-form">
          {/* Category Name */}
          <div className="Addnewcategory-form-group">
            <label htmlFor="categoryName">
              Category Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              placeholder="Enter category name"
              value={formData.categoryName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Slug (URL) */}
          <div className="Addnewcategory-form-group">
            <label htmlFor="slug">
              Slug (URL) <span className="required">*</span>
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              placeholder="Enter category slug"
              value={formData.slug}
              onChange={handleSlugChange}
              required
            />
            <span className="Addnewcategory-hint">
              This will be used in the URL (e.g., handmade-idols)
            </span>
          </div>

          {/* Description */}
          <div className="Addnewcategory-form-group">
            <label htmlFor="description">Description</label>
            <div className="Addnewcategory-textarea-wrapper">
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Enter brief description about this category"
                value={formData.description}
                onChange={handleInputChange}
              />
              <span className="Addnewcategory-char-counter">
                {formData.description.length}/200
              </span>
            </div>
          </div>

          {/* Parent Category */}
          <div className="Addnewcategory-form-group">
            <label htmlFor="parentCategory">Parent Category</label>
            <div className="Addnewcategory-select-wrapper">
              <select
                id="parentCategory"
                name="parentCategory"
                value={formData.parentCategory}
                onChange={handleInputChange}
              >
                <option value="">Select parent category (optional)</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Handicrafts">Handicrafts</option>
                <option value="Traditional Paintings">Traditional Paintings</option>
                <option value="Textiles">Textiles</option>
              </select>
              <FiChevronDown className="select-arrow-icon" />
            </div>
            <span className="Addnewcategory-hint">
              Leave empty to create a top-level category
            </span>
          </div>

          {/* Actions */}
          <div className="Addnewcategory-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={handleResetAndClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn-create">
              <FiPlusSquare className="btn-icon" />
              <span>Create Category</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addnewcategory;