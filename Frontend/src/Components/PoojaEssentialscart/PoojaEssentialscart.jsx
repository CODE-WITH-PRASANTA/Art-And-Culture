import React from "react";
import "./PoojaEssentialscart.css";

import {
  FaHeart,
  FaEye,
  FaShoppingCart,
  FaStar,
  FaRegStar,
  FaChevronDown,
} from "react-icons/fa";

// ================= IMAGES =================

import product1 from "../../assets/atu1.webp";
import product2 from "../../assets/atu2.webp";
import product3 from "../../assets/art-3.webp";
import product4 from "../../assets/art-4.webp";
import product5 from "../../assets/atu5.webp";
import product6 from "../../assets/atu6.webp";

// ================= PRODUCTS =================

const products = [
  {
    id: 1,
    image: product1,
    name: "Brass Floral Meenakari Pooja Thali (10 Inch)",
    price: "₹ 5,899.00",
    oldPrice: "",
    rating: 4,
    reviews: 6,
    discount: "",
    desc: "Beautiful brass pooja thali for everyday rituals.",
  },
  {
    id: 2,
    image: product2,
    name: "Brass Mushak Diya for Pooja | Antique Aarti Diya (3 Inch)",
    price: "₹ 3,049.00",
    oldPrice: "₹ 3,949.00",
    rating: 5,
    reviews: 1,
    discount: "-22%",
    desc: "Antique handcrafted brass diya.",
  },
  {
    id: 3,
    image: product3,
    name: "Swastik Engraved Pooja Thali Silver Plated",
    price: "₹ 6,649.00",
    oldPrice: "₹ 7,999.00",
    rating: 5,
    reviews: 3,
    discount: "-16%",
    desc: "Premium silver plated pooja thali.",
  },
  {
    id: 4,
    image: product4,
    name: "Brass Vertical Swastika Symbol Diyas",
    price: "₹ 1,249.00",
    oldPrice: "₹ 1,699.00",
    rating: 5,
    reviews: 22,
    discount: "-26%",
    desc: "Elegant brass diya set.",
  },
  {
    id: 5,
    image: product5,
    name: "Brass Lotus Shaped Diya",
    price: "₹ 1,849.00",
    oldPrice: "₹ 1,999.00",
    rating: 5,
    reviews: 6,
    discount: "-7%",
    desc: "Lotus finish brass diya.",
  },
  {
    id: 6,
    image: product6,
    name: "Decorative Brass Chowki",
    price: "₹ 2,499.00",
    oldPrice: "",
    rating: 4,
    reviews: 4,
    discount: "",
    desc: "Wooden pooja chowki.",
  },
];

const PoojaEssentialscart = () => {
 


  return (
    <section className="PoojaEssentialscart">

      {/* ================= FILTER SIDEBAR ================= */}

      <aside className="pooja_sidebar">

        <h2>Filters</h2>

        <div className="filter_box">

          <h4>
            Purpose / Usecase
            <FaChevronDown />
          </h4>

          <label>
            <input type="checkbox" />
            Gifting (22)
          </label>

          <label>
            <input type="checkbox" />
            Home Decor (7)
          </label>

          <label>
            <input type="checkbox" />
            Table Decor (2)
          </label>

          <label>
            <input type="checkbox" />
            Pooja Room (24)
          </label>

          <label>
            <input type="checkbox" />
            Vastu (3)
          </label>

        </div>

        <div className="filter_box">

          <h4>
            Material
            <FaChevronDown />
          </h4>

          <label>
            <input type="checkbox" />
            Pure Brass
          </label>

          <label>
            <input type="checkbox" />
            German Silver
          </label>

          <label>
            <input type="checkbox" />
            Iron
          </label>

        </div>

        <div className="filter_box">

          <h4>
            Price
            <FaChevronDown />
          </h4>

          <input
            type="range"
            min="0"
            max="7449"
            className="price_slider"
          />

          <div className="price_inputs">

            <input
              type="number"
              placeholder="₹ 0"
            />

            <span>To</span>

            <input
              type="number"
              placeholder="₹ 7449"
            />

          </div>

        </div>

        <div className="filter_box">

          <h4>
            Size Range
            <FaChevronDown />
          </h4>

          <label>
            <input type="checkbox" />
            1-5 inches (10)
          </label>

          <label>
            <input type="checkbox" />
            6-10 inches (13)
          </label>

          <label>
            <input type="checkbox" />
            11-15 inches (4)
          </label>

        </div>

        <div className="filter_box">

          <h4>
            Availability
            <FaChevronDown />
          </h4>

          <label>
            <input type="checkbox" />
            In Stock (24)
          </label>

          <label>
            <input type="checkbox" />
            Out Of Stock (3)
          </label>

        </div>

      </aside>

      {/* ================= PRODUCT AREA ================= */}

      <div className="pooja_products">
<div className="top_bar">

  <div className="featured">
    Featured
    <FaChevronDown />
  </div>

 

          <div className="view_icons">

            <button
              className={view === 1 ? "active" : ""}
              onClick={() => setView(1)}
              title="List"
            >
              <FaList />
            </button>

            <button
              className={view === 2 ? "active" : ""}
              onClick={() => setView(2)}
              title="2 Columns"
            >
              II
            </button>

            <button
              className={view === 3 ? "active" : ""}
              onClick={() => setView(3)}
              title="3 Columns"
            >
              III
            </button>

            <button
              className={view === 4 ? "active" : ""}
              onClick={() => setView(4)}
              title="4 Columns"
            >
              IIII
            </button>

            <button
              className={view === 5 ? "active" : ""}
              onClick={() => setView(5)}
              title="5 Columns"
            >
              IIIII
            </button>

          </div>

        </div>

        <div className="products">
          {products.map((item) => (
  <div
    className={`product_card ${view === 1 ? "list_card" : ""}`}
    key={item.id}
  >
    {/* IMAGE */}
    <div className="image_box">

      {item.discount && (
        <span className="discount">{item.discount}</span>
      )}

      <img src={item.image} alt={item.name} />

      {/* Hover Overlay */}
      <div className="image_overlay">

        {/* Wishlist + Quick View */}
        <div className="hover_icons">

          <button
            className="icon_btn wishlist"
            title=" Wishlist"
          >
            <FaHeart />
          </button>

          <button
            className="icon_btn quickview"
            title="Quick View"
          >
            <FaEye />
          </button>

        </div>

        {/* Quick Add */}
        <button className="quick_add">
          <FaShoppingCart />
          <span>Quick Add</span>
        </button>

      </div>

    </div>

    {/* PRODUCT INFO */}

    <div className="product_info">

      <h3>{item.name}</h3>

      <div className="rating">

        <span className="rating_number">
          5.0
        </span>

        {[1, 2, 3, 4, 5].map((star) =>
          star <= item.rating ? (
            <FaStar key={star} />
          ) : (
            <FaRegStar key={star} />
          )
        )}

        <span className="review_count">
          ({item.reviews})
        </span>

      </div>

      <div className="price">

        <span className="new">
          {item.price}
        </span>

        {item.oldPrice && (
          <span className="old">
            {item.oldPrice}
          </span>
        )}

      </div>

      {view === 1 && (
        <p className="description">
          {item.desc}
        </p>
      )}

    </div>

  </div>
))}

        </div>

      </div>

    </section>
  );
};

export default PoojaEssentialscart;