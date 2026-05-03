import React, { useEffect, useRef, useState } from "react";
import "./ShopListPage.css";

/* ===== DUMMY DATA (matches ShopManageView fields) ===== */
const dummyProducts = [
  {
    id: 1,
    title: "Radha Krishna Idol",
    rating: 5,
    stock: 7,
    categoryType: "Best Seller",
    helpline: "9999999999",
    sizes: { height: 22, width: 10, weight: 2 },
    details:
      "Beautiful handcrafted idol perfect for pooja and gifting. Premium finish and long-lasting quality.",
    faqs: [
      { question: "Is it durable?", answer: "Yes, made from premium metal." },
    ],
    status: "Published",
    images: [
      "https://i.imgur.com/7QFZ6bT.png",
      "https://i.imgur.com/kP6XK7F.png",
    ],
  },
  {
    id: 2,
    title: "Meditating Monk Statue",
    rating: 4,
    stock: 3,
    categoryType: "Normal",
    helpline: "8888888888",
    sizes: { height: 15, width: 8, weight: 1 },
    details:
      "Peaceful monk statue for home decor and meditation spaces. Minimal and calming design.",
    faqs: [{ question: "Material?", answer: "Resin based." }],
    status: "Unpublished",
    images: [
      "https://i.imgur.com/yXOvdOS.png",
      "https://i.imgur.com/TY5FZkR.png",
    ],
  },
  {
    id: 3,
    title: "Divine Saraswati Idol",
    rating: 5,
    stock: 10,
    categoryType: "Best Seller",
    helpline: "7777777777",
    sizes: { height: 20, width: 12, weight: 3 },
    details:
      "Elegant Saraswati idol for study rooms and temples. Symbol of wisdom and art.",
    faqs: [{ question: "Color fade?", answer: "No, coated finish." }],
    status: "Published",
    images: ["https://i.imgur.com/kP6XK7F.png"],
  },
];

/* ===== Small SVG Icons ===== */
const IconEdit = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25z" fill="currentColor"/>
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="currentColor"/>
  </svg>
);
const IconPublish = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M5 20h14v-2H5v2zM12 2l-5.5 6h4v6h3V8h4L12 2z" fill="currentColor"/>
  </svg>
);
const IconDelete = () => (
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path d="M6 7h12l-1 14H7L6 7zm3-3h6l1 2H8l1-2z" fill="currentColor"/>
  </svg>
);

const ShopListPage = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [openMenuId, setOpenMenuId] = useState(null);

  const containerRef = useRef(null);

  /* ===== Close menu on outside click / ESC ===== */
  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenMenuId(null);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === "Published" ? "Unpublished" : "Published",
            }
          : p
      )
    );
    setOpenMenuId(null);
  };

  const deleteProduct = (id) => {
    const ok = window.confirm("Delete this product?");
    if (!ok) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setOpenMenuId(null);
  };

  const handleEdit = (id) => {
    // navigate to edit page or open modal
    alert(`Edit product ${id}`);
    setOpenMenuId(null);
  };

  const handleView = (id) => {
    // open details modal/drawer
    alert(`View details ${id}`);
    setOpenMenuId(null);
  };

  return (
    <div className="shopListPage-container" ref={containerRef}>
      <h2 className="shopListPage-title">Shop Products</h2>

      <div className="shopListPage-grid">
        {products.map((item) => (
          <div key={item.id} className="shopListPage-card">

            {/* ===== 3-DOT MENU ===== */}
            <div className="shopListPage-menuWrapper">
              <button
                className="shopListPage-menuBtn"
                aria-label="Open actions"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId(openMenuId === item.id ? null : item.id);
                }}
              >
                <span />
                <span />
                <span />
              </button>

              {openMenuId === item.id && (
                <div
                  className="shopListPage-dropdown"
                  role="menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="shopListPage-menuItem"
                    onClick={() => handleEdit(item.id)}
                  >
                    <IconEdit />
                    <span>Edit</span>
                  </button>

                  <button
                    className="shopListPage-menuItem"
                    onClick={() => toggleStatus(item.id)}
                  >
                    <IconPublish />
                    <span>
                      {item.status === "Published" ? "Unpublish" : "Publish"}
                    </span>
                  </button>

                  <button
                    className="shopListPage-menuItem"
                    onClick={() => handleView(item.id)}
                  >
                    <IconEye />
                    <span>View Details</span>
                  </button>

                  <div className="shopListPage-divider" />

                  <button
                    className="shopListPage-menuItem shopListPage-danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    <IconDelete />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>

            {/* ===== IMAGE ===== */}
            <div className="shopListPage-imgBox">
              <img src={item.images[0]} alt={item.title} />
            </div>

            {/* ===== INFO ===== */}
            <div className="shopListPage-info">
              <h3 className="shopListPage-name">{item.title}</h3>

              <div className="shopListPage-metaLine">
                <span>⭐ {item.rating}</span>
                <span>Stock: {item.stock}</span>
                <span>{item.categoryType}</span>
              </div>

              <div className="shopListPage-size">
                H: {item.sizes.height} | W: {item.sizes.width} | {item.sizes.weight}kg
              </div>

              <p className="shopListPage-desc">
                {item.details}
              </p>

              <div className="shopListPage-faq">
                <strong>FAQ:</strong>
                <p>{item.faqs[0]?.question}</p>
              </div>

              <div className="shopListPage-helpline">
                Helpline: {item.helpline}
              </div>

              <span
                className={`shopListPage-status ${
                  item.status === "Published"
                    ? "shopListPage-green"
                    : "shopListPage-gray"
                }`}
              >
                {item.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopListPage;