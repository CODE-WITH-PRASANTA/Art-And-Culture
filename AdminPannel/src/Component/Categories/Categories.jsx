import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiPlus,
  FiUploadCloud,
  FiEdit,
  FiTrash2,
  FiFilter,
  FiRotateCcw,
  FiChevronLeft,
  FiChevronRight,
  FiBox,
  FiCheckCircle,
  FiXCircle,
  FiLayers,
  FiEdit3,
  FiChevronDown,
} from "react-icons/fi";
import "./Categories.css";

// Sample dummy data
const INITIAL_CATEGORIES = [
  {
    id: 1,
    name: "Handmade Idols",
    description: "Traditional handmade idols",
    slug: "handmade-idols",
    parentCategory: "",
    productsCount: 45,
    status: "Active",
    dateCreated: "20 May, 2025",
    timeCreated: "10:30 AM",
    image: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Lippan Art",
    description: "Traditional mud art",
    slug: "lippan-art",
    parentCategory: "",
    productsCount: 32,
    status: "Active",
    dateCreated: "19 May, 2025",
    timeCreated: "09:15 AM",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Pattachitra Paintings",
    description: "Odisha traditional paintings",
    slug: "pattachitra-paintings",
    parentCategory: "",
    productsCount: 28,
    status: "Active",
    dateCreated: "18 May, 2025",
    timeCreated: "04:45 PM",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Home Decor",
    description: "Handcrafted home decor",
    slug: "home-decor",
    parentCategory: "",
    productsCount: 21,
    status: "Inactive",
    dateCreated: "17 May, 2025",
    timeCreated: "02:20 PM",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Handmade Jewelry",
    description: "Traditional handmade jewelry",
    slug: "handmade-jewelry",
    parentCategory: "",
    productsCount: 18,
    status: "Active",
    dateCreated: "16 May, 2025",
    timeCreated: "11:05 AM",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Terracotta Pottery",
    description: "Eco-friendly clay pottery items",
    slug: "terracotta-pottery",
    parentCategory: "Home Decor",
    productsCount: 14,
    status: "Active",
    dateCreated: "15 May, 2025",
    timeCreated: "03:10 PM",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Wooden Crafts",
    description: "Hand-carved wooden products",
    slug: "wooden-crafts",
    parentCategory: "",
    productsCount: 12,
    status: "Inactive",
    dateCreated: "14 May, 2025",
    timeCreated: "01:25 PM",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Textiles & Weaves",
    description: "Handloom fabrics and sarees",
    slug: "textiles-weaves",
    parentCategory: "",
    productsCount: 40,
    status: "Active",
    dateCreated: "12 May, 2025",
    timeCreated: "10:00 AM",
    image: "https://images.unsplash.com/photo-1606744888344-493238951221?w=150&auto=format&fit=crop&q=60",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [appliedStatusFilter, setAppliedStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form State
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parentCategory: "",
    status: "Active",
    image: null,
  });

  const fileInputRef = useRef(null);

  // Auto-generate slug behind the scenes
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Image Upload Handling
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  // Handle Form Reset
  const handleReset = () => {
    setFormData({
      name: "",
      description: "",
      parentCategory: "",
      status: "Active",
      image: null,
    });
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Handle Save / Submit
  const handleSaveCategory = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please fill in Category Name.");
      return;
    }

    const generatedSlug = generateSlug(formData.name);

    if (editingId) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingId
            ? {
                ...cat,
                name: formData.name,
                description: formData.description,
                slug: generatedSlug,
                parentCategory: formData.parentCategory,
                status: formData.status,
                image: formData.image || cat.image,
              }
            : cat
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        name: formData.name,
        description: formData.description || "General category",
        slug: generatedSlug,
        parentCategory: formData.parentCategory,
        productsCount: 0,
        status: formData.status,
        dateCreated: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        timeCreated: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=150&auto=format&fit=crop&q=60",
      };
      setCategories([newCategory, ...categories]);
    }

    handleReset();
  };

  // Handle Edit Action
  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData({
      name: category.name,
      description: category.description || "",
      parentCategory: category.parentCategory || "",
      status: category.status,
      image: category.image,
    });
    // Smooth scroll to form on mobile devices
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle Delete Action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  // Trigger Filter
  const handleApplyFilter = () => {
    setAppliedStatusFilter(statusFilter);
    setCurrentPage(1);
  };

  // Filter Reset
  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setAppliedStatusFilter("All");
    setCurrentPage(1);
  };

  // Filtered & Search Results
  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      appliedStatusFilter === "All" ||
      cat.status.toLowerCase() === appliedStatusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Pagination Calculations
  const totalEntries = filteredCategories.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCategories = filteredCategories.slice(startIndex, startIndex + itemsPerPage);

  // Metrics
  const activeCount = categories.filter((c) => c.status === "Active").length;
  const inactiveCount = categories.filter((c) => c.status === "Inactive").length;
  const totalProducts = categories.reduce((sum, c) => sum + (c.productsCount || 0), 0);

  return (
    <div className="Categories">
      {/* Top Header */}
      <header className="Categories-header">
        <div className="Categories-title-area">
          <h1>Categories</h1>
          <p>Manage product categories for your store</p>
        </div>
        <div className="Categories-top-actions">
          <div className="Categories-search-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
      <button
  type="button"
  className="btn-primary"
  onClick={() => navigate("/admin/newcategory/add")}
>
  <FiPlus />
  <span>Add New Category</span>
</button>
        </div>
      </header>
      
      {/* Overview Metric Cards */}
      <div className="Categories-metrics">
        <div className="metric-card">
          <div className="metric-icon gold">
            <FiLayers />
          </div>
          <div className="metric-info">
            <span className="metric-label">Total Categories</span>
            <span className="metric-value">{categories.length}</span>
            <span className="metric-sub">All Categories</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green">
            <FiCheckCircle />
          </div>
          <div className="metric-info">
            <span className="metric-label">Active Categories</span>
            <span className="metric-value">{activeCount}</span>
            <span className="metric-sub">Currently Active</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon orange">
            <FiXCircle />
          </div>
          <div className="metric-info">
            <span className="metric-label">Inactive Categories</span>
            <span className="metric-value">{inactiveCount}</span>
            <span className="metric-sub">Currently Inactive</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon purple">
            <FiBox />
          </div>
          <div className="metric-info">
            <span className="metric-label">Total Products</span>
            <span className="metric-value">{totalProducts}</span>
            <span className="metric-sub">In These Categories</span>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="Categories-main-grid">
        {/* Left Column: Category Form */}
        <div className="Categories-form-card">
          <h3>{editingId ? "Edit Category" : "Add New Category"}</h3>
          <p className="form-subtitle">
            {editingId ? "Update existing category details" : "Create a new category for your products"}
          </p>

          <form onSubmit={handleSaveCategory}>
            <div className="form-group">
              <label>
                Category Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter category name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Enter brief description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Parent Category</label>
              <div className="select-wrapper">
                <select
                  name="parentCategory"
                  value={formData.parentCategory}
                  onChange={handleInputChange}
                >
                  <option value="">Select parent category</option>
                  {categories
                    .filter((cat) => cat.id !== editingId)
                    .map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                </select>
                <FiChevronDown className="select-arrow" />
              </div>
              <span className="field-hint">Leave empty for main top-level category</span>
            </div>

            <div className="form-group">
              <label>Category Image</label>
              <div
                className="image-upload-box"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  hidden
                />
                {formData.image ? (
                  <div className="image-preview">
                    <img src={formData.image} alt="Uploaded Preview" />
                    <span>Click to change</span>
                  </div>
                ) : (
                  <>
                    <FiUploadCloud className="upload-icon" />
                    <p>
                      <strong>Click to upload image</strong> or drag & drop
                    </p>
                    <span className="field-hint">Recommended size: 400x400px</span>
                  </>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Status</label>
              <div className="toggle-switch-wrapper">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={formData.status === "Active"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        status: e.target.checked ? "Active" : "Inactive",
                      }))
                    }
                  />
                  <span className="slider round"></span>
                </label>
                <span className={`status-label ${formData.status.toLowerCase()}`}>
                  {formData.status}
                </span>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleReset}
              >
                Reset
              </button>
              <button type="submit" className="btn-primary">
                <FiEdit3 /> {editingId ? "Update Category" : "Save Category"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Table Section */}
        <div className="Categories-table-card">
          <div className="table-card-header">
            <div>
              <h3>All Categories</h3>
              <p className="table-subtitle">View and manage all product categories</p>
            </div>

            {/* Filter controls */}
            <div className="ref-filter-actions">
              <div className="select-wrapper status-select-wrapper">
                <select
                  className="ref-status-dropdown"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <FiChevronDown className="select-arrow" />
              </div>

              <button
                className="ref-filter-btn"
                onClick={handleApplyFilter}
                type="button"
              >
                <FiFilter className="filter-icon" /> Filter
              </button>

              <button
                className="ref-reset-btn"
                title="Reset Filters"
                onClick={handleResetFilters}
                type="button"
              >
                <FiRotateCcw />
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="categories-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Category Name</th>
                  <th>Slug</th>
                  <th>Products</th>
                  <th>Status</th>
                  <th>Date Created</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentCategories.length > 0 ? (
                  currentCategories.map((item, index) => (
                    <tr key={item.id}>
                      <td className="index-cell" data-label="#">
                        {startIndex + index + 1}
                      </td>
                      <td data-label="Image">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="table-img"
                        />
                      </td>
                      <td data-label="Category Name">
                        <div className="cat-name-cell">
                          <span className="cat-title">{item.name}</span>
                          {item.parentCategory && (
                            <span className="cat-parent">Parent: {item.parentCategory}</span>
                          )}
                          <span className="cat-desc">{item.description}</span>
                        </div>
                      </td>
                      <td className="slug-cell" data-label="Slug">
                        <code>{item.slug}</code>
                      </td>
                      <td className="products-cell" data-label="Products">
                        {item.productsCount}
                      </td>
                      <td data-label="Status">
                        <span
                          className={`badge ${
                            item.status === "Active" ? "badge-active" : "badge-inactive"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td data-label="Date Created">
                        <div className="date-cell">
                          <span>{item.dateCreated}</span>
                          <small>{item.timeCreated}</small>
                        </div>
                      </td>
                      <td data-label="Action">
                        <div className="action-buttons">
                          <button
                            className="btn-action edit"
                            onClick={() => handleEdit(item)}
                            title="Edit Category"
                          >
                            <FiEdit />
                          </button>
                          <button
                            className="btn-action delete"
                            onClick={() => handleDelete(item.id)}
                            title="Delete Category"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="no-data">
                      No categories found matching filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer with Pagination */}
          <div className="table-footer">
            <div className="entries-info">
              Showing <strong>{totalEntries === 0 ? 0 : startIndex + 1}</strong> to{" "}
              <strong>{Math.min(startIndex + itemsPerPage, totalEntries)}</strong> of{" "}
              <strong>{totalEntries}</strong> entries
            </div>

            <div className="pagination">
              <button
                className="page-btn prev-next"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                <FiChevronLeft /> Prev
              </button>

              <div className="page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`page-number ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className="page-btn prev-next"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;