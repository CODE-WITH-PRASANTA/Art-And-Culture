import React, { useState, useMemo } from 'react';
import './Exploreallproducts.css';

// React Icons
import { 
  FaStar, 
  FaRegHeart, 
  FaHeart, 
  FaWhatsapp, 
  FaChevronLeft, 
  FaChevronRight, 
  FaCheck, 
  FaPlus, 
  FaMinus, 
  FaTruck, 
  FaSync, 
  FaShieldAlt, 
  FaGift, 
  FaRibbon, 
  FaGem 
} from 'react-icons/fa';
import { 
  BsGrid, 
  BsGrid3X3GapFill, 
  BsGridFill, 
  BsTag 
} from 'react-icons/bs';
import { FiShare2, FiMapPin } from 'react-icons/fi';

// Sample Assets Import Template (Replace/Add your asset names as needed)
import prod1 from '../../assets/Lord-Balaji.webp';
import prod2 from '../../assets/Lord-Vishnu.webp';
import prod3 from '../../assets/Lord-Tirupati-Balaji-Venkateswara-24-Karat-Gold-Silver-Plated-Idol.webp';
import prod4 from '../../assets/Lord-Ganesha.webp';

// Mock Product Database matching reference screenshots
const INITIAL_PRODUCTS = [
  {
    id: 1,
    title: "Silver plated Kamdhenu Cow with Calf Idol",
    tag: "Rest for Vastu",
    rating: 4.9,
    reviewsCount: 174,
    price: 1299,
    originalPrice: 1999,
    material: "German Silver",
    purpose: "Vastu",
    size: "1-5 inches",
    inStock: true,
    image: prod1 || "https://picsum.photos/400/400?random=1",
    gallery: [
      prod1 || "https://picsum.photos/600/600?random=1",
      "https://picsum.photos/600/600?random=101",
      "https://picsum.photos/600/600?random=102",
      "https://picsum.photos/600/600?random=103"
    ]
  },
  {
    id: 2,
    title: "Svastika Vel Mayil Murugan Idol (999 Silver Plated)",
    tag: "Rest for Car",
    rating: 5.0,
    reviewsCount: 27,
    price: 1499,
    originalPrice: 1999,
    material: "Pure Brass",
    purpose: "Car Dashboard",
    size: "1-5 inches",
    inStock: true,
    image: prod2 || "https://picsum.photos/400/400?random=2",
    gallery: [
      prod2 || "https://picsum.photos/600/600?random=2",
      "https://picsum.photos/600/600?random=104",
      "https://picsum.photos/600/600?random=105"
    ]
  },
  {
    id: 3,
    title: "Balaji Charan with Shanku Chakra Namam – Gold Plated (2 Inch)",
    tag: "Rest for Car",
    rating: 4.9,
    reviewsCount: 267,
    price: 1249,
    originalPrice: 1499,
    material: "Premium Resin",
    purpose: "Car Dashboard",
    size: "1-5 inches",
    inStock: true,
    image: prod3 || "https://picsum.photos/400/400?random=3",
    gallery: [
      prod3 || "https://picsum.photos/600/600?random=3",
      "https://picsum.photos/600/600?random=106"
    ]
  },
  {
    id: 4,
    title: "Lord Krishna's Divine Hands With Flute - Gold Plated",
    tag: "",
    rating: 4.9,
    reviewsCount: 31,
    price: 1699,
    originalPrice: 1999,
    material: "Premium Resin",
    purpose: "Home Decor",
    size: "6-10 inches",
    inStock: true,
    image: prod4 || "https://picsum.photos/400/400?random=4",
    gallery: [
      prod4 || "https://picsum.photos/600/600?random=4",
      "https://picsum.photos/600/600?random=107"
    ]
  },
  {
    id: 5,
    title: "Kamdhenu Cow with Calf Idol | Gold & Silver Plated",
    tag: "",
    rating: 4.9,
    reviewsCount: 368,
    price: 1449,
    originalPrice: 1999,
    material: "German Silver",
    purpose: "Table Decor",
    size: "6-10 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=5",
    gallery: ["https://picsum.photos/600/600?random=5"]
  },
  {
    id: 6,
    title: "Tirupati Balaji (Venkateswara) Idol - Gold & Silver Plated",
    tag: "",
    rating: 4.9,
    reviewsCount: 106,
    price: 1749,
    originalPrice: 1999,
    material: "Pure Brass",
    purpose: "Pooja Room",
    size: "6-10 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=6",
    gallery: ["https://picsum.photos/600/600?random=6"]
  },
  {
    id: 7,
    title: "Maa Lakshmi's Charan Paduka - Gold & Silver Plated (3 Inch)",
    tag: "",
    rating: 4.9,
    reviewsCount: 125,
    price: 1799,
    originalPrice: 1999,
    material: "Pure Brass",
    purpose: "Pooja Room",
    size: "1-5 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=7",
    gallery: ["https://picsum.photos/600/600?random=7"]
  },
  {
    id: 8,
    title: "Sinduri Hanuman Murti - Gold Plated",
    tag: "",
    rating: 4.9,
    reviewsCount: 44,
    price: 1549,
    originalPrice: 1999,
    material: "Marble Dust",
    purpose: "Gifting",
    size: "6-10 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=8",
    gallery: ["https://picsum.photos/600/600?random=8"]
  },
  {
    id: 9,
    title: "Dagdusheth Halwai Ganpati Murti - Gold Plated",
    tag: "",
    rating: 4.9,
    reviewsCount: 20,
    price: 2199,
    originalPrice: 2899,
    material: "Pure Brass",
    purpose: "Pooja Room",
    size: "6-10 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=9",
    gallery: ["https://picsum.photos/600/600?random=9"]
  },
  {
    id: 10,
    title: "Ganesh Shankh (Conch) - Silver Plated (5 Inch)",
    tag: "",
    rating: 4.9,
    reviewsCount: 40,
    price: 2499,
    originalPrice: 2999,
    material: "German Silver",
    purpose: "Pooja Room",
    size: "1-5 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=10",
    gallery: ["https://picsum.photos/600/600?random=10"]
  },
  {
    id: 11,
    title: "Antique Ganesh Lakshmi Murti Pair (7 Inch)",
    tag: "SVASTIKA'S TRUST",
    rating: 5.0,
    reviewsCount: 12,
    price: 6099,
    originalPrice: 6650,
    material: "Pure Brass",
    purpose: "Pooja Room",
    size: "6-10 inches",
    inStock: true,
    image: "https://picsum.photos/400/400?random=11",
    gallery: [
      "https://picsum.photos/600/600?random=11",
      "https://picsum.photos/600/600?random=111",
      "https://picsum.photos/600/600?random=112",
      "https://picsum.photos/600/600?random=113",
      "https://picsum.photos/600/600?random=114"
    ]
  }
];

const Exploreallproducts = () => {
  // State for Navigation / Detail View
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filters State
  const [purposes, setPurposes] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [maxPrice, setMaxPrice] = useState(19900);
  const [sizes, setSizes] = useState([]);
  const [availability, setAvailability] = useState({ inStock: false, outOfStock: false });

  // Grid Columns State (4, 3, 2)
  const [gridColumns, setGridColumns] = useState(4);
  const [sortBy, setSortBy] = useState('featured');

  // Product Detail States
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const [pincode, setPincode] = useState("400079");
  const [deliveryInfo, setDeliveryInfo] = useState("Delivery to Mumbai, Maharashtra by 30 Jul – 1 Aug");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [wishlist, setWishlist] = useState({});

  // Checkbox handlers
  const handleCheckboxChange = (category, value) => {
    const updateList = (prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];

    if (category === 'purpose') setPurposes(updateList);
    if (category === 'material') setMaterials(updateList);
    if (category === 'size') setSizes(updateList);
  };

  const toggleWishlist = (id, e) => {
    e?.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((prod) => {
      if (purposes.length > 0 && !purposes.includes(prod.purpose)) return false;
      if (materials.length > 0 && !materials.includes(prod.material)) return false;
      if (sizes.length > 0 && !sizes.includes(prod.size)) return false;
      if (prod.price > maxPrice) return false;
      if (availability.inStock && !prod.inStock) return false;
      if (availability.outOfStock && prod.inStock) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.id - b.id; // Default featured
    });
  }, [purposes, materials, sizes, maxPrice, availability, sortBy]);

  // Open detail view for a specific product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedImageIdx(0);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="Exploreallproducts">
      {/* VIEW 1: PRODUCT LISTING & FILTERING VIEW */}
      {!selectedProduct ? (
        <div className="Exploreallproducts-container">
          {/* SIDEBAR FILTERS */}
          <aside className="Exploreallproducts-sidebar">
            <h2 className="Exploreallproducts-sidebarTitle">Refine</h2>

            {/* PURPOSE / USECASE */}
            <div className="Exploreallproducts-filterSection">
              <h4 className="Exploreallproducts-filterHeader">PURPOSE / USECASE</h4>
              {[
                'Gifting',
                'Home Decor',
                'Table Decor',
                'Pooja Room',
                'Car Dashboard',
                'Vastu'
              ].map((item) => (
                <label key={item} className="Exploreallproducts-checkboxLabel">
                  <input
                    type="checkbox"
                    checked={purposes.includes(item)}
                    onChange={() => handleCheckboxChange('purpose', item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* MATERIAL */}
            <div className="Exploreallproducts-filterSection">
              <h4 className="Exploreallproducts-filterHeader">MATERIAL</h4>
              {['Premium Resin', 'Pure Brass', 'Marble Dust', 'German Silver'].map((item) => (
                <label key={item} className="Exploreallproducts-checkboxLabel">
                  <input
                    type="checkbox"
                    checked={materials.includes(item)}
                    onChange={() => handleCheckboxChange('material', item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* PRICE */}
            <div className="Exploreallproducts-filterSection">
              <h4 className="Exploreallproducts-filterHeader">PRICE</h4>
              <div className="Exploreallproducts-priceSlider">
                <input
                  type="range"
                  min="0"
                  max="19900"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="Exploreallproducts-priceLabels">
                  <span>₹0</span>
                  <span>₹{maxPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* SIZE RANGE */}
            <div className="Exploreallproducts-filterSection">
              <h4 className="Exploreallproducts-filterHeader">SIZE RANGE</h4>
              {['1-5 inches', '6-10 inches', '11-15 inches'].map((item) => (
                <label key={item} className="Exploreallproducts-checkboxLabel">
                  <input
                    type="checkbox"
                    checked={sizes.includes(item)}
                    onChange={() => handleCheckboxChange('size', item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* AVAILABILITY */}
            <div className="Exploreallproducts-filterSection">
              <h4 className="Exploreallproducts-filterHeader">AVAILABILITY</h4>
              <label className="Exploreallproducts-checkboxLabel">
                <input
                  type="checkbox"
                  checked={availability.inStock}
                  onChange={(e) =>
                    setAvailability({ ...availability, inStock: e.target.checked })
                  }
                />
                <span>In stock</span>
              </label>
              <label className="Exploreallproducts-checkboxLabel">
                <input
                  type="checkbox"
                  checked={availability.outOfStock}
                  onChange={(e) =>
                    setAvailability({ ...availability, outOfStock: e.target.checked })
                  }
                />
                <span>Out of stock</span>
              </label>
            </div>

            {/* WHATSAPP CONSULTATION CARD */}
            <div className="Exploreallproducts-whatsappCard">
              <div className="Exploreallproducts-whatsappHeader">
                <FaWhatsapp className="Exploreallproducts-waIcon" />
                <span>NOT SURE WHICH?</span>
              </div>
              <p>Tell us the occasion and our team will help you choose.</p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="Exploreallproducts-waLink"
              >
                Ask on WhatsApp &rarr;
              </a>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="Exploreallproducts-mainContent">
            {/* TOP BAR / CONTROL BAR */}
            <div className="Exploreallproducts-topBar">
              <div className="Exploreallproducts-count">
                {filteredProducts.length} products
              </div>

              <div className="Exploreallproducts-controls">
                {/* GRID VIEW TOGGLES */}
                <div className="Exploreallproducts-gridIcons">
                  <button
                    className={`Exploreallproducts-gridBtn ${gridColumns === 2 ? 'active' : ''}`}
                    onClick={() => setGridColumns(2)}
                    title="2 Columns"
                  >
                    <BsGrid />
                  </button>
                  <button
                    className={`Exploreallproducts-gridBtn ${gridColumns === 3 ? 'active' : ''}`}
                    onClick={() => setGridColumns(3)}
                    title="3 Columns"
                  >
                    <BsGrid3X3GapFill />
                  </button>
                  <button
                    className={`Exploreallproducts-gridBtn ${gridColumns === 4 ? 'active' : ''}`}
                    onClick={() => setGridColumns(4)}
                    title="4 Columns"
                  >
                    <BsGridFill />
                  </button>
                </div>

                {/* SORT BY DROPDOWN */}
                <div className="Exploreallproducts-sortWrapper">
                  <label htmlFor="sortSelect">SORT</label>
                  <select
                    id="sortSelect"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className={`Exploreallproducts-grid grid-cols-${gridColumns}`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="Exploreallproducts-card"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="Exploreallproducts-cardImageWrapper">
                    <img src={product.image} alt={product.title} />

                    {product.tag && (
                      <span className="Exploreallproducts-tagBadge">{product.tag}</span>
                    )}

                    <button
                      className="Exploreallproducts-wishlistBtn"
                      onClick={(e) => toggleWishlist(product.id, e)}
                    >
                      {wishlist[product.id] ? (
                        <FaHeart className="filled" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>

                    <button className="Exploreallproducts-selectSizeBtn">
                      SELECT SIZE
                    </button>
                  </div>

                  <div className="Exploreallproducts-cardBody">
                    <h3 className="Exploreallproducts-cardTitle">{product.title}</h3>

                    <div className="Exploreallproducts-cardRating">
                      <div className="Exploreallproducts-stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="Exploreallproducts-ratingScore">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="Exploreallproducts-ratingCount">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    <div className="Exploreallproducts-cardPrice">
                      <span className="Exploreallproducts-currentPrice">
                        ₹{product.price.toLocaleString('en-IN')}.00
                      </span>
                      {product.originalPrice && (
                        <span className="Exploreallproducts-oldPrice">
                          ₹{product.originalPrice.toLocaleString('en-IN')}.00
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            <div className="Exploreallproducts-loadMoreWrapper">
              <button className="Exploreallproducts-loadMoreBtn">LOAD MORE</button>
            </div>
          </main>
        </div>
      ) : (
        /* VIEW 2: PRODUCT DETAILS PAGE VIEW (Ref 4 & Ref 5) */
        <div className="Exploreallproducts-detailView">
          {/* BREADCRUMB / BACK */}
          <div className="Exploreallproducts-breadcrumb">
            <span className="Exploreallproducts-backLink" onClick={() => setSelectedProduct(null)}>
              HOME
            </span>{" "}
            /{" "}
            <span className="Exploreallproducts-backLink" onClick={() => setSelectedProduct(null)}>
              LAKSHMI GANESH
            </span>{" "}
            / <span>{selectedProduct.title.toUpperCase()}</span>
          </div>

          <div className="Exploreallproducts-detailContainer">
            {/* LEFT: IMAGES & GALLERY */}
            <div className="Exploreallproducts-detailGallery">
              <div className="Exploreallproducts-mainImageWrapper">
                <img
                  src={selectedProduct.gallery?.[selectedImageIdx] || selectedProduct.image}
                  alt={selectedProduct.title}
                />
                {selectedProduct.tag && (
                  <span className="Exploreallproducts-trustBadge">
                    ● {selectedProduct.tag}
                  </span>
                )}

                {selectedProduct.gallery?.length > 1 && (
                  <>
                    <button
                      className="Exploreallproducts-galleryNav prev"
                      onClick={() =>
                        setSelectedImageIdx((prev) =>
                          prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
                        )
                      }
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="Exploreallproducts-galleryNav next"
                      onClick={() =>
                        setSelectedImageIdx((prev) =>
                          prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
                        )
                      }
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="Exploreallproducts-thumbnails">
                {(selectedProduct.gallery || [selectedProduct.image]).map((img, idx) => (
                  <div
                    key={idx}
                    className={`Exploreallproducts-thumb ${selectedImageIdx === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImageIdx(idx)}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: DETAILS & ACTIONS */}
            <div className="Exploreallproducts-detailInfo">
              <h1 className="Exploreallproducts-detailTitle">{selectedProduct.title}</h1>

              {/* RATING */}
              <div className="Exploreallproducts-detailRating">
                <div className="Exploreallproducts-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="Exploreallproducts-ratingValue">
                  {selectedProduct.rating.toFixed(1)}
                </span>
                <a href="#reviews" className="Exploreallproducts-reviewsLink">
                  {selectedProduct.reviewsCount} reviews
                </a>
              </div>

              {/* PRICE ROW */}
              <div className="Exploreallproducts-detailPriceRow">
                <span className="Exploreallproducts-detailPrice">
                  ₹{selectedProduct.price.toLocaleString('en-IN')}.00
                </span>
                {selectedProduct.originalPrice && (
                  <span className="Exploreallproducts-detailOldPrice">
                    ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}.00
                  </span>
                )}
                <span className="Exploreallproducts-discountBadge">8% off</span>
              </div>

              {/* OFFER BANNER */}
              <div className="Exploreallproducts-offerBanner">
                <div className="Exploreallproducts-offerTag">
                  <BsTag />
                  <span>Get it for ₹5,504 with offers</span>
                </div>
                <span className="Exploreallproducts-offerArrow">&rarr;</span>
              </div>

              {/* GIFT OPTION */}
              <label className="Exploreallproducts-giftOption">
                <input
                  type="checkbox"
                  checked={isGift}
                  onChange={(e) => setIsGift(e.target.checked)}
                />
                <span className="Exploreallproducts-giftText">
                  <FaGift /> MAKE IT A GIFT
                </span>
                <span className="Exploreallproducts-optionalTag">Optional</span>
              </label>

              {/* QUANTITY & ADD TO CART */}
              <div className="Exploreallproducts-actionRow">
                <div className="Exploreallproducts-quantityControl">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                    <FaMinus />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)}>
                    <FaPlus />
                  </button>
                </div>

                <button className="Exploreallproducts-addToCartBtn">ADD TO CART</button>
              </div>

              {/* BUY NOW BUTTON */}
              <button className="Exploreallproducts-buyNowBtn">
                BUY NOW <span className="Exploreallproducts-buyIcons">⚡</span> &gt;
              </button>

              {/* SECURE CHECKS */}
              <div className="Exploreallproducts-trustPoints">
                <span>
                  <FaCheck /> Cash on Delivery
                </span>
                <span>
                  <FaCheck /> 7-day returns
                </span>
                <span>
                  <FaCheck /> Secure checkout
                </span>
              </div>

              {/* WHATSAPP ORDER LINK */}
              <div className="Exploreallproducts-waOrderLink">
                <FaWhatsapp className="waIcon" />
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  Prefer to talk? Order on WhatsApp
                </a>
              </div>

              {/* CHECK DELIVERY TIME */}
              <div className="Exploreallproducts-deliveryBox">
                <div className="Exploreallproducts-delHeader">
                  <FaTruck /> CHECK DELIVERY TIME
                </div>
                <div className="Exploreallproducts-pincodeRow">
                  <div className="Exploreallproducts-pincodeInput">
                    <FiMapPin className="pinIcon" />
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter Pincode"
                    />
                  </div>
                  <button
                    className="Exploreallproducts-checkPinBtn"
                    onClick={() =>
                      setDeliveryInfo(
                        `Delivery to ${pincode} updated! Expected by 30 Jul – 1 Aug`
                      )
                    }
                  >
                    CHECK
                  </button>
                </div>
                <div className="Exploreallproducts-delStatus">
                  <FaCheck className="greenCheck" /> {deliveryInfo}
                </div>
              </div>

              {/* BUY MORE, SAVE MORE TIERS */}
              <div className="Exploreallproducts-tiersContainer">
                <div className="Exploreallproducts-tiersHeader">BUY MORE, SAVE MORE</div>
                <div className="Exploreallproducts-tiersGrid">
                  <div className="Exploreallproducts-tierCard active">
                    <span className="Exploreallproducts-qtyLabel">1 piece</span>
                    <span className="Exploreallproducts-tierPrice">₹6,099/pc</span>
                    <span className="Exploreallproducts-tierSub">Standard</span>
                  </div>

                  <div className="Exploreallproducts-tierCard">
                    <span className="Exploreallproducts-popularBadge">POPULAR</span>
                    <span className="Exploreallproducts-qtyLabel">2-3 pcs</span>
                    <span className="Exploreallproducts-tierPrice">₹5,794/pc</span>
                    <span className="Exploreallproducts-tierSub">Save 5%</span>
                  </div>

                  <div className="Exploreallproducts-tierCard">
                    <span className="Exploreallproducts-qtyLabel">4-9 pcs</span>
                    <span className="Exploreallproducts-tierPrice">₹5,611/pc</span>
                    <span className="Exploreallproducts-tierSub">Save 8%</span>
                  </div>

                  <div className="Exploreallproducts-tierCard">
                    <span className="Exploreallproducts-bestValueBadge">BEST VALUE</span>
                    <span className="Exploreallproducts-qtyLabel">10+ pcs</span>
                    <span className="Exploreallproducts-tierPrice">₹5,489/pc</span>
                    <span className="Exploreallproducts-tierSub">Save 10%</span>
                  </div>
                </div>

                <div className="Exploreallproducts-tierFooter">
                  ✨ Add 1 more piece and save 5% on each
                </div>

                <div className="Exploreallproducts-bulkRow">
                  <div>
                    <strong>Ordering more than 10?</strong>
                    <p>Bulk, gifting & corporate pricing</p>
                  </div>
                  <button className="Exploreallproducts-talkToUsBtn">Talk to us &rarr;</button>
                </div>
              </div>

              {/* ACCORDIONS */}
              <div className="Exploreallproducts-accordions">
                <div className="Exploreallproducts-accordionItem">
                  <div
                    className="Exploreallproducts-accordionHeader"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 'about' ? null : 'about')
                    }
                  >
                    <span>About the product</span>
                    <span>{openAccordion === 'about' ? '-' : '+'}</span>
                  </div>
                  {openAccordion === 'about' && (
                    <div className="Exploreallproducts-accordionBody">
                      Detailed craftsmanship using {selectedProduct.material}. Perfect for{' '}
                      {selectedProduct.purpose}. Handcrafted with precision and long-lasting polish.
                    </div>
                  )}
                </div>

                <div className="Exploreallproducts-accordionItem">
                  <div
                    className="Exploreallproducts-accordionHeader"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')
                    }
                  >
                    <span>Shipping & returns</span>
                    <span>{openAccordion === 'shipping' ? '-' : '+'}</span>
                  </div>
                  {openAccordion === 'shipping' && (
                    <div className="Exploreallproducts-accordionBody">
                      Free shipping across India. Easy 7-day hassle-free return policy. Transit damaged items replaced instantly.
                    </div>
                  )}
                </div>
              </div>

              {/* BRAND PROMISES GRID */}
              <div className="Exploreallproducts-promisesGrid">
                <div className="Exploreallproducts-promiseCard">
                  <FaGift className="icon" />
                  <div>
                    <strong>Signature packaging</strong>
                    <p>Gift-ready & secure</p>
                  </div>
                </div>

                <div className="Exploreallproducts-promiseCard">
                  <FaShieldAlt className="icon" />
                  <div>
                    <strong>Certified authentic</strong>
                    <p>Certificate + buy-back</p>
                  </div>
                </div>

                <div className="Exploreallproducts-promiseCard">
                  <FaGem className="icon" />
                  <div>
                    <strong>Fine hand-detailing</strong>
                    <p>Crisp, intricate finish</p>
                  </div>
                </div>

                <div className="Exploreallproducts-promiseCard">
                  <FaRibbon className="icon" />
                  <div>
                    <strong>Looked after</strong>
                    <p>Blessed & well-tracked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STICKY BOTTOM BAR FOR MOBILE/QUICK BUY */}
          <div className="Exploreallproducts-stickyBottom">
            <div className="Exploreallproducts-stickyInfo">
              <img
                src={selectedProduct.gallery?.[0] || selectedProduct.image}
                alt="thumb"
              />
              <span className="Exploreallproducts-stickyTitle">{selectedProduct.title}</span>
            </div>
            <div className="Exploreallproducts-stickyAction">
              <span className="Exploreallproducts-stickyPrice">
                ₹{selectedProduct.price.toLocaleString('en-IN')}.00
              </span>
              <button className="Exploreallproducts-stickyBtn">ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exploreallproducts;