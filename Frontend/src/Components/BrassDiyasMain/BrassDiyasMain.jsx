import React, { useState } from "react";
import "./BrassDiyasMain.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

// Imported image assets
import img1 from "../../assets/diya 1.webp";
import img2 from "../../assets/Diya02.webp";
import img3 from "../../assets/diya03.wabp.webp";
import img4 from "../../assets/Diya03.webp";
import img5 from "../../assets/Diya04.webp";
import img6 from "../../assets/diya06.webp";
import img7 from "../../assets/diya07.webp";
import img8 from "../../assets/diya08.webp";
import img9 from "../../assets/diya09.webp";
import img10 from "../../assets/diya10.webp";
import img11 from "../../assets/diya11.webp";
import img12 from "../../assets/01.webp";

const products = [
  { id: 1, image: img1, title: "Brass Vertical Swastika Symbol Diyas (Set of 2)", rating: 5, reviews: 22, price: "1,249.00", oldPrice: "1,699.00", discount: "-26%" },
  { id: 2, image: img2, title: "Brass Mushak Diya for Pooja", rating: 5, reviews: 1, price: "3,049.00", oldPrice: "3,949.00", discount: "-22%" },
  { id: 3, image: img3, title: "Brass Lotus Shaped Diya", rating: 5, reviews: 6, price: "1,849.00", oldPrice: "1,999.00", discount: "-7%" },
  { id: 4, image: img4, title: "Brass Maa Symbol Diya", rating: 5, reviews: 3, price: "849.00", oldPrice: "1,799.00", discount: "-52%" },
  { id: 5, image: img5, title: "Brass Tirupati Balaji Lakshmi Divine Diya", rating: 5, reviews: 10, price: "3,849.00", oldPrice: "4,999.00", discount: "-23%" },
  { id: 6, image: img6, title: "OM Brass Oil Lamp Diya", rating: 5, reviews: 3, price: "1,049.00", oldPrice: "1,299.00", discount: "-19%" },
  { id: 7, image: img7, title: "Brass Horizontal Swastika Symbol Diya", rating: 5, reviews: 3, price: "1,149.00", oldPrice: "1,499.00", discount: "-23%" },
  { id: 8, image: img8, title: "Brass Lakshmi Ganesh Diya Set", rating: 5, reviews: 1, price: "5,049.00", oldPrice: "5,499.00", discount: "-8%" },
  { id: 9, image: img9, title: "Brass Kalpavriksha Tree Diya", rating: 5, reviews: 2, price: "4,099.00", oldPrice: "4,499.00", discount: "-8%" },
  { id: 10, image: img10, title: "Brass Mushak Diya for Pooja", rating: 5, reviews: 1, price: "3,049.00", oldPrice: "3,949.00", discount: "-22%" },
  { id: 11, image: img11, title: "Brass Mushak Diya for Pooja", rating: 5, reviews: 1, price: "3,049.00", oldPrice: "3,949.00", discount: "-22%" },
  { id: 12, image: img12, title: "Brass Mushak Diya for Pooja", rating: 5, reviews: 1, price: "3,049.00", oldPrice: "3,949.00", discount: "-22%" },
];

const BrassDiyasMain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const itemsPerPage = 6; // 6 is perfect as it splits evenly into 3 cols (desktop) and 2 cols (mobile)

  const [filters, setFilters] = useState({
    purpose: false,
    material: false,
    price: false,
    size: false,
    availability: false,
  });

  const toggleFilter = (name) => {
    setFilters({ ...filters, [name]: !filters[name] });
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="brass-page">
      {/* Background Overlay when Mobile Filter Drawer is active */}
      {isMobileFilterOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsMobileFilterOpen(false)}
        />
      )}

      {/* Sidebar Filters */}
      <div className={`brass-sidebar ${isMobileFilterOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Filters</h2>
          <button 
            className="close-filter-btn" 
            onClick={() => setIsMobileFilterOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="filter-box">
          <div className="filter-title" onClick={() => toggleFilter("purpose")}>
            Purpose / Usecase
            {filters.purpose ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {filters.purpose && (
            <div className="filter-content">
              <label><input type="checkbox" /> Home</label>
              <label><input type="checkbox" /> Temple</label>
              <label><input type="checkbox" /> Decoration</label>
            </div>
          )}
        </div>

        <div className="filter-box">
          <div className="filter-title" onClick={() => toggleFilter("material")}>
            Material
            {filters.material ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {filters.material && (
            <div className="filter-content">
              <label><input type="checkbox" /> Brass</label>
              <label><input type="checkbox" /> Copper</label>
            </div>
          )}
        </div>

        <div className="filter-box">
          <div className="filter-title" onClick={() => toggleFilter("price")}>
            Price
            {filters.price ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {filters.price && (
            <div className="filter-content">
              <label><input type="checkbox" /> Under ₹1000</label>
              <label><input type="checkbox" /> ₹1000-3000</label>
              <label><input type="checkbox" /> Above ₹3000</label>
            </div>
          )}
        </div>

        <div className="filter-box">
          <div className="filter-title" onClick={() => toggleFilter("size")}>
            Size Range
            {filters.size ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {filters.size && (
            <div className="filter-content">
              <label><input type="checkbox" /> Small</label>
              <label><input type="checkbox" /> Medium</label>
              <label><input type="checkbox" /> Large</label>
            </div>
          )}
        </div>

        <div className="filter-box">
          <div className="filter-title" onClick={() => toggleFilter("availability")}>
            Availability
            {filters.availability ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {filters.availability && (
            <div className="filter-content">
              <label><input type="checkbox" /> In Stock</label>
              <label><input type="checkbox" /> Out of Stock</label>
            </div>
          )}
        </div>
      </div>

      {/* Products Display Section */}
      <div className="brass-content">
        <div className="top-toolbar">
          <button 
            className="mobile-filter-trigger" 
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
          
          <select className="sort-dropdown">
            <option>Featured</option>
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>  

        <div className="products-grid">
          {currentProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="image-box">
                <img src={item.image} alt={item.title} />
                <span className="discount">{item.discount}</span>
              </div>

              <div className="product-info">
                <h4>{item.title}</h4>

                <div className="rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span>({item.reviews})</span>
                </div>

                <div className="price-box">
                  <span className="price">₹{item.price}</span>
                  <span className="old-price">₹{item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className="page-btn nav-btn back-btn"
            >
              Previous
            </button>
            
            <div className="page-numbers">
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`page-btn ${currentPage === pageNum ? "active" : ""}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="page-btn nav-btn next-btn"
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