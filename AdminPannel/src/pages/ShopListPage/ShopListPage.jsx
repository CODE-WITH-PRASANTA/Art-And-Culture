import React, { useEffect, useRef, useState } from "react";
import "./ShopListPage.css";

/* ✅ ADD THIS */
import API, { IMG_URL } from "../../api/axios";

const ShopListPage = () => {
  const [products, setProducts] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const containerRef = useRef(null);

  /* ================= FETCH PRODUCTS ================= */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      /* ✅ AXIOS INSTEAD OF FETCH */
      const res = await API.get("/products");

      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  /* ================= CLOSE MENU ================= */
  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* ================= ACTIONS ================= */

  // DELETE
  const deleteProduct = async (id) => {
    const ok = window.confirm("Delete this product?");
    if (!ok) return;

    try {
      /* ✅ AXIOS */
      await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }

    setOpenMenuId(null);
  };

  // TOGGLE STATUS
  const toggleStatus = async (id) => {
    try {
      /* ✅ AXIOS */
      await API.put(`/products/toggle/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Toggle error:", err);
    }

    setOpenMenuId(null);
  };

  // EDIT
  const handleEdit = (id) => {
    window.location.href = `/edit-product/${id}`;
  };

  // VIEW
  const handleView = (id) => {
    window.location.href = `/view-product/${id}`;
  };

  return (
    <div className="shopListPage-container" ref={containerRef}>
      <h2 className="shopListPage-title">Shop Products</h2>

      <div className="shopListPage-grid">
        {products.map((item) => {
          const finalPrice =
            item.price && item.discount
              ? item.price - (item.price * item.discount) / 100
              : item.price;

          return (
            <div key={item._id} className="shopListPage-card">

              {/* ================= MENU ================= */}
              <div className="shopListPage-menuWrapper">
                <button
                  className="shopListPage-menuBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuId(
                      openMenuId === item._id ? null : item._id
                    );
                  }}
                >
                  <span /><span /><span />
                </button>

                {openMenuId === item._id && (
                  <div className="shopListPage-dropdown">
                    <button onClick={() => handleEdit(item._id)}>
                      <span className="icon">✏️</span>
                      <span>Edit</span>
                    </button>

                    <button onClick={() => toggleStatus(item._id)}>
                      <span className="icon">🚀</span>
                      <span>
                        {item.status === "Published"
                          ? "Unpublish"
                          : "Publish"}
                      </span>
                    </button>

                    <button onClick={() => handleView(item._id)}>
                      <span className="icon">👁</span>
                      <span>View</span>
                    </button>

                    <div className="dropdown-divider"></div>

                    <button
                      className="danger"
                      onClick={() => deleteProduct(item._id)}
                    >
                      <span className="icon">🗑</span>
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>

              {/* ================= IMAGE ================= */}
              <div className="shopListPage-imgBox">
                <img
                  src={
                    item.images && item.images.length > 0
                      ? `${IMG_URL}${item.images[0]}`
                      : "/no-image.png"
                  }
                  alt={item.title}
                />
              </div>

              {/* ================= INFO ================= */}
              <div className="shopListPage-info">
                <h3>{item.title}</h3>

                <div className="shopListPage-metaLine">
                  ⭐ {item.rating || 0} | Stock: {item.stock || 0} |{" "}
                  {item.categoryType || "N/A"}
                </div>

                <div className="shopListPage-price">
                  {item.discount ? (
                    <>
                      <span className="old">₹{item.price}</span>{" "}
                      <span className="new">₹{finalPrice}</span>{" "}
                      <span className="off">
                        ({item.discount}% OFF)
                      </span>
                    </>
                  ) : (
                    <span>₹{item.price}</span>
                  )}
                </div>

                <div className="shopListPage-size">
                  H: {item.sizes?.height || "-"} | W:{" "}
                  {item.sizes?.width || "-"} |{" "}
                  {item.sizes?.weight || "-"}kg
                </div>

                <p className="shopListPage-desc">
                  {item.details || "No description"}
                </p>

                <div className="shopListPage-faq">
                  <strong>FAQ:</strong>
                  <p>{item.faqs?.[0]?.question || "No FAQ"}</p>
                </div>

                <div className="shopListPage-helpline">
                  Helpline: {item.helpline || "N/A"}
                </div>

                <span
                  className={`shopListPage-status ${
                    item.status === "Published"
                      ? "shopListPage-green"
                      : "shopListPage-gray"
                  }`}
                >
                  {item.status || "Published"}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopListPage;