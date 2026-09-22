import React, { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiEdit3,
  FiTrash2,
  FiFilter,
  FiRotateCcw,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiCheckCircle,
  FiX,
  FiTag,
  FiShoppingBag,
  FiSliders,
  FiSave,
} from "react-icons/fi";
import "./Attributes.css";

// Initial reference dummy data
const INITIAL_ATTRIBUTES = [
  {
    id: 1,
    name: "Material",
    type: "Dropdown",
    values: ["Wood", "Clay", "Brass", "Terracotta"],
    productsCount: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Technique",
    type: "Dropdown",
    values: ["Hand Painted", "Engraved", "Hand Carved", "Lippan"],
    productsCount: 38,
    status: "Active",
  },
  {
    id: 3,
    name: "Color",
    type: "Dropdown",
    values: ["Red", "Blue", "Green", "Yellow", "Black"],
    productsCount: 42,
    status: "Active",
  },
  {
    id: 4,
    name: "Size",
    type: "Dropdown",
    values: ["Small", "Medium", "Large", "Extra Large"],
    productsCount: 35,
    status: "Active",
  },
  {
    id: 5,
    name: "Occasion",
    type: "Dropdown",
    values: ["Puja", "Decor", "Gift", "Wedding", "Festival"],
    productsCount: 28,
    status: "Inactive",
  },
  {
    id: 6,
    name: "Pattern",
    type: "Dropdown",
    values: ["Floral", "Geometric", "Abstract", "Traditional"],
    productsCount: 19,
    status: "Active",
  },
  {
    id: 7,
    name: "Finish",
    type: "Dropdown",
    values: ["Matte", "Glossy", "Antique", "Textured"],
    productsCount: 24,
    status: "Active",
  },
  {
    id: 8,
    name: "Weight",
    type: "Radio",
    values: ["Light", "Medium", "Heavy"],
    productsCount: 15,
    status: "Inactive",
  },
];

const Attributes = () => {
  const [attributes, setAttributes] = useState(INITIAL_ATTRIBUTES);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [appliedStatusFilter, setAppliedStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Shared Form State (for both inline form & popup modal)
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "Dropdown",
    valuesInput: "",
    status: "Active",
  });

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset Form
  const handleResetForm = () => {
    setFormData({
      name: "",
      type: "Dropdown",
      valuesInput: "",
      status: "Active",
    });
    setEditingId(null);
  };

  // Open Add Modal
  const handleOpenAddModal = () => {
    handleResetForm();
    setIsModalOpen(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleResetForm();
  };

  // Save/Submit Attribute (Add or Update)
  const handleSaveAttribute = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter Attribute Name.");
      return;
    }

    const parsedValues = formData.valuesInput
      ? formData.valuesInput.split(",").map((v) => v.trim()).filter(Boolean)
      : ["Default"];

    if (editingId) {
      // Edit existing
      setAttributes((prev) =>
        prev.map((attr) =>
          attr.id === editingId
            ? {
                ...attr,
                name: formData.name,
                type: formData.type,
                values: parsedValues.length > 0 ? parsedValues : attr.values,
                status: formData.status,
              }
            : attr
        )
      );
    } else {
      // Add new
      const newAttr = {
        id: Date.now(),
        name: formData.name,
        type: formData.type || "Dropdown",
        values: parsedValues,
        productsCount: 0,
        status: formData.status,
      };
      setAttributes([newAttr, ...attributes]);
    }

    handleResetForm();
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  // Edit Action
  const handleEdit = (attr) => {
    setEditingId(attr.id);
    setFormData({
      name: attr.name,
      type: attr.type,
      valuesInput: attr.values.join(", "),
      status: attr.status,
    });
    // On small screens scroll up to view edit form
    if (window.innerWidth <= 1024) {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  // Delete Action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this attribute?")) {
      setAttributes((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Filter Trigger
  const handleApplyFilter = () => {
    setAppliedStatusFilter(statusFilter);
    setCurrentPage(1);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setAppliedStatusFilter("All");
    setCurrentPage(1);
  };

  // Filtered List
  const filteredAttributes = attributes.filter((attr) => {
    const matchesSearch =
      attr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attr.values.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      appliedStatusFilter === "All" ||
      attr.status.toLowerCase() === appliedStatusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Pagination Calculations
  const totalEntries = filteredAttributes.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAttributes = filteredAttributes.slice(startIndex, startIndex + itemsPerPage);

  // Metrics Calculations
  const totalAttrCount = attributes.length;
  const activeAttrCount = attributes.filter((a) => a.status === "Active").length;
  const totalValuesCount = attributes.reduce((sum, a) => sum + a.values.length, 0);
  const totalProductsCount = attributes.reduce((sum, a) => sum + a.productsCount, 0);

  return (
    <div className="Attributes">
      {/* Top Main Header */}
      <header className="Attributes-header">
        <div className="Attributes-title-area">
          <h1>Attributes</h1>
          <p>Manage product attributes for better filtering</p>
        </div>

        <div className="Attributes-top-actions">
          <div className="Attributes-search-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search attributes..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <button className="btn-add-primary" onClick={handleOpenAddModal}>
            <FiPlus /> <span>Add New Attribute</span>
          </button>
        </div>
      </header>

      {/* 4 Overview Metric Cards */}
      <div className="Attributes-metrics">
        <div className="metric-card">
          <div className="metric-icon pink">
            <FiSliders />
          </div>
          <div className="metric-info">
            <span className="metric-label">Total Attributes</span>
            <span className="metric-value">{totalAttrCount}</span>
            <span className="metric-sub">All Attributes</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green">
            <FiCheckCircle />
          </div>
          <div className="metric-info">
            <span className="metric-label">Active Attributes</span>
            <span className="metric-value">{activeAttrCount}</span>
            <span className="metric-sub">Currently Active</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon red">
            <FiTag />
          </div>
          <div className="metric-info">
            <span className="metric-label">Total Values</span>
            <span className="metric-value">{totalValuesCount}</span>
            <span className="metric-sub">Attribute Values</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon purple">
            <FiShoppingBag />
          </div>
          <div className="metric-info">
            <span className="metric-label">Used in Products</span>
            <span className="metric-value">{totalProductsCount}</span>
            <span className="metric-sub">Products Using Attributes</span>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="Attributes-main-grid">
        {/* Left Column: Inline Add/Edit Form */}
        <div className="Attributes-form-card">
          <h3>{editingId ? "Edit Attribute" : "Add New Attribute"}</h3>
          <p className="form-subtitle">
            {editingId ? "Update existing attribute details" : "Create a new attribute for your products"}
          </p>

          <form onSubmit={handleSaveAttribute}>
            <div className="form-group">
              <label>
                Attribute Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter attribute name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <span className="field-hint">Example: Material, Size, Color</span>
            </div>

            <div className="form-group">
              <label>
                Attribute Type <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="Dropdown">Select attribute type</option>
                  <option value="Dropdown">Dropdown</option>
                  <option value="Radio">Radio Buttons</option>
                  <option value="Color">Color Swatch</option>
                  <option value="Checkbox">Checkbox</option>
                </select>
                <FiChevronDown className="select-arrow" />
              </div>
              <span className="field-hint">Choose how this attribute will be displayed</span>
            </div>

            <div className="form-group">
              <label>
                Input Values <span className="required">*</span>
              </label>
              <input
                type="text"
                name="valuesInput"
                placeholder="Enter values separated by comma"
                value={formData.valuesInput}
                onChange={handleInputChange}
              />
              <span className="field-hint">Example: Wood, Clay, Metal</span>
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
                <span className="status-label">{formData.status}</span>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-reset"
                onClick={handleResetForm}
              >
                Reset
              </button>
              <button type="submit" className="btn-dark-save">
                <FiSave /> {editingId ? "Update Attribute" : "Save Attribute"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Table */}
        <div className="Attributes-table-card">
          <div className="table-card-header">
            <div>
              <h3>All Attributes</h3>
              <p className="table-subtitle">View and manage all product attributes</p>
            </div>

            {/* Top Right Filters */}
            <div className="table-filter-actions">
              <div className="select-wrapper status-select">
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

              <button className="ref-filter-btn" onClick={handleApplyFilter} type="button">
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
            <table className="attributes-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Attribute Name</th>
                  <th>Type</th>
                  <th>Values</th>
                  <th>Products</th>
                  <th>Status</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentAttributes.length > 0 ? (
                  currentAttributes.map((item, index) => (
                    <tr key={item.id}>
                      <td className="index-cell" data-label="#">
                        {startIndex + index + 1}
                      </td>
                      <td data-label="Attribute Name">
                        <strong className="attr-title">{item.name}</strong>
                      </td>
                      <td data-label="Type" className="type-cell">
                        {item.type}
                      </td>
                      <td data-label="Values">
                        <div className="values-chip-group">
                          {item.values.slice(0, 4).map((val, idx) => (
                            <span key={idx} className="value-chip">
                              {val}
                            </span>
                          ))}
                          {item.values.length > 4 && (
                            <span className="value-chip chip-more">...</span>
                          )}
                        </div>
                      </td>
                      <td data-label="Products" className="products-count-cell">
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
                      <td data-label="Action">
                        <div className="action-buttons">
                          <button
                            className="btn-action edit"
                            onClick={() => handleEdit(item)}
                            title="Edit Attribute"
                          >
                            <FiEdit3 />
                          </button>
                          <button
                            className="btn-action delete"
                            onClick={() => handleDelete(item.id)}
                            title="Delete Attribute"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-data">
                      No attributes found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="table-footer">
            <div className="entries-info">
              Showing {totalEntries === 0 ? 0 : startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, totalEntries)} of {totalEntries} entries
            </div>

            <div className="pagination">
              <button
                className="page-btn nav-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                <FiChevronLeft />
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
                className="page-btn nav-btn"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Attribute Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Add New Attribute</h3>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSaveAttribute} className="modal-body">
              <div className="form-group">
                <label>
                  Attribute Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter attribute name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <span className="field-hint">Example: Material, Size, Color</span>
              </div>

              <div className="form-group">
                <label>
                  Attribute Type <span className="required">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="Dropdown">Dropdown</option>
                    <option value="Radio">Radio Buttons</option>
                    <option value="Color">Color Swatch</option>
                    <option value="Checkbox">Checkbox</option>
                  </select>
                  <FiChevronDown className="select-arrow" />
                </div>
              </div>

              <div className="form-group">
                <label>Input Values</label>
                <input
                  type="text"
                  name="valuesInput"
                  placeholder="Enter values separated by comma"
                  value={formData.valuesInput}
                  onChange={handleInputChange}
                />
                <span className="field-hint">Example: Wood, Clay, Metal</span>
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
                  <span className="status-label">{formData.status}</span>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-reset"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-dark-save">
                  <FiSave /> Save Attribute
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attributes;