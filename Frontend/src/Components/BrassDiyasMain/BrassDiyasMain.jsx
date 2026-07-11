import React, { useEffect, useState } from "react";
import "./BrassDiyasMain.css";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

import API, { BASE_URL } from "../../api/axios";

const BrassDiyasMain = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Featured");
  const navigate = useNavigate();

  const itemsPerPage = 6;

  // Track accordion toggles for the filters sidebar
  const [openSections, setOpenSections] = useState({
    purpose: true,
    material: true,
    price: true,
    size: true,
    availability: true,
  });

  // Track selection values for filtering logic
  const [filters, setFilters] = useState({
    purpose: [],      
    material: [],     
    priceRange: "",   
    size: [],         
    inStockOnly: false,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

 const fetchProducts = async () => {
  try {
    const response = await API.get("/shopview/all");

    console.log("All Products:", response.data.data);

    if (response.data.success) {
      setProducts(response.data.data);
    }
  } catch (error) {
    console.error(error);
  }
};
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      if (category === "inStockOnly") {
        return { ...prev, inStockOnly: !prev.inStockOnly };
      }
      if (category === "priceRange") {
        return { ...prev, priceRange: prev.priceRange === value ? "" : value };
      }

      const currentValues = prev[category];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return { ...prev, [category]: updatedValues };
    });
  };

  // --- Dynamic Filtering Logic ---
  const filteredProducts = products.filter((item) => {
    if (filters.purpose.length > 0 && (!item.purpose || !filters.purpose.includes(item.purpose))) {
      return false;
    }
    if (filters.material.length > 0 && (!item.material || !filters.material.includes(item.material))) {
      return false;
    }
    if (filters.size.length > 0 && (!item.size || !filters.size.includes(item.size))) {
      return false;
    }
    if (filters.inStockOnly && (!item.quantity || item.quantity <= 0)) {
      return false;
    }
    if (filters.priceRange) {
      const price = item.newPrice;
      if (filters.priceRange === "under-500" && price >= 500) return false;
      if (filters.priceRange === "500-1000" && (price < 500 || price > 1000)) return false;
      if (filters.priceRange === "above-1000" && price <= 1000) return false;
    }
    return true;
  });

  // --- Dynamic Sorting Logic ---
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price Low to High") {
      return a.newPrice - b.newPrice;
    }
    if (sortOption === "Price High to Low") {
      return b.newPrice - a.newPrice;
    }
    if (sortOption === "Newest") {
      return new Date(b.createdAt || b._id) - new Date(a.createdAt || a._id);
    }
    return 0;
  });

  // --- Pagination Calculations ---
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOption]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="brass-page">
      {isMobileFilterOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileFilterOpen(false)}
        />
      )}

      {/* Sidebar - Matching your accurate CSS structure */}
      <div className={`brass-sidebar ${isMobileFilterOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Filters</h2>
          <button
            className="close-bass-filter-btn"
            onClick={() => setIsMobileFilterOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Purpose */}
        <div className="bass-filter-box">
          <div className="bass-filter-title" onClick={() => toggleSection("purpose")}>
            <span>Purpose</span>
            {openSections.purpose ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.purpose && (
            <div className="bass-filter-content">
              {["Pooja", "Decoration", "Gifting"].map((opt) => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    checked={filters.purpose.includes(opt)}
                    onChange={() => handleFilterChange("purpose", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Material */}
        <div className="bass-filter-box">
          <div className="bass-filter-title" onClick={() => toggleSection("material")}>
            <span>Material</span>
            {openSections.material ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.material && (
            <div className="bass-filter-content">
              {["Brass", "Bronze", "Copper"].map((opt) => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    checked={filters.material.includes(opt)}
                    onChange={() => handleFilterChange("material", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="bass-filter-box">
          <div className="bass-filter-title" onClick={() => toggleSection("price")}>
            <span>Price Range</span>
            {openSections.price ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.price && (
            <div className="bass-filter-content">
              {[
                { label: "Under ₹500", value: "under-500" },
                { label: "₹500 - ₹1000", value: "500-1000" },
                { label: "Above ₹1000", value: "above-1000" },
              ].map((opt) => (
                <label key={opt.value}>
                  <input
                    type="checkbox"
                    checked={filters.priceRange === opt.value}
                    onChange={() => handleFilterChange("priceRange", opt.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Size */}
        <div className="bass-filter-box">
          <div className="bass-filter-title" onClick={() => toggleSection("size")}>
            <span>Size</span>
            {openSections.size ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.size && (
            <div className="bass-filter-content">
              {["Small", "Medium", "Large"].map((opt) => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    checked={filters.size.includes(opt)}
                    onChange={() => handleFilterChange("size", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="bass-filter-box">
          <div className="bass-filter-title" onClick={() => toggleSection("availability")}>
            <span>Availability</span>
            {openSections.availability ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.availability && (
            <div className="bass-filter-content">
              <label>
                <input
                  type="checkbox"
                  checked={filters.inStockOnly}
                  onChange={() => handleFilterChange("inStockOnly")}
                />
                <span>Exclude Out of Stock</span>
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Products Content Area */}
      <div className="brass-content">
        <div className="top-toolbar">
          <button
            className="mobile-bass-filter-trigger"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>

          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Featured">Featured</option>
            <option value="Newest">Newest</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
          </select>
        </div>

        <div className="products-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => (
             <div
  className="bass-product-card"
  key={item._id}
  onClick={() => navigate(`/shopdetails/${item._id}`)}
  style={{ cursor: "pointer" }}
>
                <div className="image-box">
                  <img
                    src={
                      item.images?.length > 0
                        ? `${BASE_URL}/uploads/shopview/${item.images[0]}`
                        : "/placeholder.jpg"
                    }
                    alt={item.productTitle}
                  />
                  {item.discount > 0 && (
                    <span className="discount">-{item.discount}%</span>
                  )}
                </div>

                <div className="product-info">
                  <h4>{item.productTitle}</h4>

                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <span>({item.reviewCount || 0})</span>
                  </div>

                  <div className="price-box">
                    <span className="price">₹{item.newPrice}</span>
                    {item.oldPrice && (
                      <span className="old-price">₹{item.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 0" }}>
              <h2>No Products Found</h2>
              <p>Try resetting your selection criteria filters.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="page-btn nav-btn"
            >
              Previous
            </button>

            <div className="page-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`page-btn ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="page-btn nav-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrassDiyasMain;