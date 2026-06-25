import React from "react";
import "./AddNow.css";

import {
  FaHeart,
  FaEye,
  FaChevronLeft,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import product1 from "../../assets/product 1.webp";
import product2 from "../../assets/product 2.webp";
import product3 from "../../assets/product 3.webp";
import product4 from "../../assets/product 4.webp";
import product5 from "../../assets/product 5.webp";
import product6 from "../../assets/product 6.webp";

const AddNow = () => {
  const products = [
    {
      id: 1,
      image: product1,
      discount: "-45%",
      title: "Brass Om Engraved Pooja Thali Set (10 Inch)",
      price: "₹ 3,549.00",
      oldPrice: "₹ 6,499.00",
      reviews: 1,
    },
    {
      id: 2,
      image: product2,
      discount: "-19%",
      title: "Brass Designer Meenakari Pooja Thali (10 Inch)",
      price: "₹ 4,449.00",
      oldPrice: "₹ 5,499.00",
      reviews: 1,
    },
    {
      id: 3,
      image: product3,
      discount: "-16%",
      title: "Swastik Engraved Pooja Thali Silver Plated",
      price: "₹ 6,649.00",
      oldPrice: "₹ 7,999.00",
      reviews: 2,
    },
    {
      id: 4,
      image: product4,
      discount: "-19%",
      title: "OM Brass Oil Lamp Diya Handle Set",
      price: "₹ 1,049.00",
      oldPrice: "₹ 1,299.00",
      reviews: 3,
    },
    {
      id: 5,
      image: product5,
      discount: "-25%",
      title: "Traditional Brass Plate",
      price: "₹ 2,299.00",
      oldPrice: "₹ 3,499.00",
      reviews: 4,
    },
    {
      id: 6,
      image: product6,
      discount: "-30%",
      title: "Premium Decorative Thali",
      price: "₹ 5,999.00",
      oldPrice: "₹ 7,999.00",
      reviews: 5,
    },
  ];

  return (
    <section className="addnow">
      <div className="addnow_wrapper">
        {products.map((item) => (
          <div className="addnow_card" key={item.id}>
            <div className="addnow_imagebox">
              <img src={item.image} alt="" />

              <span className="addnow_discount">
                {item.discount}
              </span>

              <div className="addnow_overlay">

                <button className="addnow_arrow">
                  <FaChevronLeft />
                </button>

                <div className="addnow_icons">

                  <div className="addnow_iconbox">
                    <span>Add to wishlist</span>
                    <button>
                      <FaHeart />
                    </button>
                  </div>

                  <div className="addnow_iconbox">
                    <span>Quick view</span>
                    <button>
                      <FaEye />
                    </button>
                  </div>

                </div>

                <button className="addnow_quickbtn">
                  QUICK ADD
                </button>

              </div>
            </div>

            <div className="addnow_content">

              <h3>{item.title}</h3>

              <div className="addnow_rating">
                <span>5.0</span>

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />

                <span>{item.reviews} review</span>
              </div>

              <div className="addnow_price">
                <span>{item.price}</span>
                <del>{item.oldPrice}</del>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddNow;