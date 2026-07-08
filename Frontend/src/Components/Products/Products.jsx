import React, { useState } from 'react';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaPlus, 
  FaMinus, 
  FaTimes, 
  FaStar, 
  FaLock, 
  FaWhatsapp, 
  FaFacebookF, 
  FaPinterestP, 
  FaTwitter, 
  FaTelegramPlane 
} from 'react-icons/fa';
import './Products.css';

// --- Local Asset Image Imports ---
// Replace these paths with your actual saved file names
import imgIdol1 from '../../assets/Lord_Vishnu.webp';
import imgIdol2 from '../../assets/Lord-Jagannath.webp';
import imgIdol3 from '../../assets/Lord-Shiva.webp';
import imgIdol4 from '../../assets/Lord-Buddha.webp';
import imgIdol5 from '../../assets/Lord-Hanuman.webp';
import imgIdol6 from '../../assets/Lord-Tirupati-Balaji-Venkateswara-24-Karat-Gold-Silver-Plated-Idol.webp';
import imgIdol7 from '../../assets/Lord-Ganesha.webp';
import imgIdol8 from '../../assets/Lord-Jagannath.webp';
import imgIdol9 from '../../assets/Lord-Shiva.webp';

const initialProducts = [
  {
    id: 1,
    title: "10 inch silver coated Dhanalaxmi idol | Silver Lakshmi Murti Standing on Lotus | Lakshmi Idol on Lotus | Lakshmi Idol for Pooja | Diwali Dhanteras gift",
    price: 8949,
    oldPrice: 20000,
    saveAmount: 11051,
    image: imgIdol1,
    inStock: true,
  },
  {
    id: 2,
    title: "12 inch Original Gold & Silver Coated Premium Krishna Idol | Beautiful Idol of Krishna | Shree Krishna Murti | Mandir Murti Pooja Item",
    price: 19999,
    oldPrice: 40000,
    saveAmount: 20001,
    image: imgIdol2,
    inStock: true,
  },
  {
    id: 3,
    title: "24k Pure 5 inch Gold Coated Hanuman Idol for Pooja Room | Sitting Bajrangbali Murti for Home | Hanuman Murti for Office Car Dashboard | Hanuman Statue for Diwali House Warming | Hanuman Murti for Wedding Gift",
    price: 2349,
    oldPrice: 4200,
    saveAmount: 1851,
    image: imgIdol3,
    inStock: true,
  },
  {
    id: 4,
    title: "3 Inch Ganesh Murti on Lotus | Authentic Gold Coated Ganesh Idol For Home | Sitting Ganesh Statue | Small Size Ganesh Murti | House Warming Gift",
    price: 2099,
    oldPrice: 5000,
    saveAmount: 2901,
    image: imgIdol4,
    inStock: true,
  },
  {
    id: 5,
    title: "3 inch Gold Coated Krishna Idol | Blue Baby Krishna Murti | Lord Krishna Idol Blue | Baby Krishna Crawling with Makhan Idol | Multicolour",
    price: 1499,
    oldPrice: 3000,
    saveAmount: 1501,
    image: imgIdol5,
    inStock: true,
  },
  {
    id: 6,
    title: "3 inch Laxmi Murti on Lotus| Gold Coated Lakshmi Idol | Dhan Laxmi Hindu Goddess | Lakshmi devi idol| Hindu Goddess of Wealth for Mandir | Lakshmi Maa Sculpture",
    price: 2049,
    oldPrice: 5000,
    saveAmount: 2951,
    image: imgIdol6,
    inStock: true,
  },
  {
    id: 7,
    title: "3-inch Pure Gold Coated Vastu Panchmukhi Hanuman Idol for Door Entrance | Five Face Bajrang Bali Murti for Mandir | Bajrangbali Murti Gold | Home Office Decor | Hanuman Murti for Temple",
    price: 2949,
    oldPrice: 9999,
    saveAmount: 7050,
    image: imgIdol7,
    inStock: true,
  },
  {
    id: 8,
    title: "4 inch Hanuman Murti Idol | Silver Coated Hanumanji Murti for Temple | Small Size Bajrangbali Murti Statue for Pooja Room| Standing Hanuman Statue | Hindu God of Devotion",
    price: 1320,
    oldPrice: 2400,
    saveAmount: 1080,
    image: imgIdol8,
    inStock: true,
  },
  {
    id: 9,
    title: "6 Inch Silver Ganesh Idol For Home on Singhasan | Lord Ganesh Murti | Hindu God of Luck | Home Decor Gift | Pooja Room Gift | Housewarming Gift | Singhasan Ganesh",
    price: 10599,
    oldPrice: 19999,
    saveAmount: 9400,
    image: imgIdol9,
    inStock: false,
  }
];

const Products = () => {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const [stockFilter, setStockFilter] = useState({ inStock: false, outOfStock: false });
  const [priceRange, setPriceRange] = useState(155000);
  const [sortOption, setSortOption] = useState("Alphabetically, A-Z");

  const [cartItem, setCartItem] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailQuantity, setDetailQuantity] = useState(1);

  // Filter & Sort Computations
  let filteredProducts = [...initialProducts];

  if (stockFilter.inStock || stockFilter.outOfStock) {
    filteredProducts = filteredProducts.filter(p => {
      if (stockFilter.inStock && p.inStock) return true;
      if (stockFilter.outOfStock && !p.inStock) return true;
      return false;
    });
  }

  filteredProducts = filteredProducts.filter(p => p.price <= priceRange);

  if (sortOption === "Alphabetically, A-Z") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "Alphabetically, Z-A") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortOption === "Price, low to high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "Price, high to low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleAddToCart = (product) => {
    setCartItem(product);
    setCartQuantity(1);
    setIsCartOpen(true);
  };

  return (
    <div className="ProductsContainer">
      <h1 className="ProductsHeaderTitle">Pooja Essentials</h1>
      
      <div className="ProductsMainLayout">
        {/* Left Fixed Sidebar View */}
        <aside className="ProductsSidebar">
          <h2 className="ProductsFilterHeading">Filters</h2>
          <hr className="ProductsDivider" />

          {/* Availability Block */}
          <div className="ProductsFilterSection">
            <button 
              className="ProductsFilterToggleBtn" 
              onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
            >
              <span>Availability</span>
              {isAvailabilityOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`ProductsFilterContent ${isAvailabilityOpen ? 'isOpen' : ''}`}>
              <label className="ProductsCheckboxLabel">
                <input 
                  type="checkbox" 
                  checked={stockFilter.inStock}
                  onChange={(e) => setStockFilter({...stockFilter, inStock: e.target.checked})} 
                />
                <span>In stock ({initialProducts.filter(p => p.inStock).length})</span>
              </label>
              <label className="ProductsCheckboxLabel">
                <input 
                  type="checkbox" 
                  checked={stockFilter.outOfStock}
                  onChange={(e) => setStockFilter({...stockFilter, outOfStock: e.target.checked})} 
                />
                <span>Out of stock ({initialProducts.filter(p => !p.inStock).length})</span>
              </label>
            </div>
          </div>
          <hr className="ProductsDivider" />

          {/* Price Range Area */}
          <div className="ProductsFilterSection">
            <button 
              className="ProductsFilterToggleBtn" 
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              <span>Price</span>
              {isPriceOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`ProductsFilterContent ${isPriceOpen ? 'isOpen' : ''}`}>
              <div className="ProductsPriceSliderWrapper">
                <input 
                  type="range" 
                  min="0" 
                  max="155000" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))} 
                  className="ProductsSliderRange"
                />
                <div className="ProductsPriceInputRow">
                  <div className="ProductsPriceFieldBox">
                    <span>₹</span>
                    <input type="number" value="0" readOnly />
                  </div>
                  <span className="ProductsPriceToText">to</span>
                  <div className="ProductsPriceFieldBox">
                    <span>₹</span>
                    <input 
                      type="number" 
                      value={priceRange} 
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Scrollable Content Workspace */}
        <main className="ProductsGridArea">
          <div className="ProductsToolbar">
            <span className="ProductsCountText">{filteredProducts.length} products</span>
            <div className="ProductsSortDropdownWrapper">
              <span className="ProductsSortLabel">Sort by</span>
              <button className="ProductsSortDropdownBtn" onClick={() => setIsSortOpen(!isSortOpen)}>
                {sortOption} <FaChevronDown className="ProductsSortChevron" />
              </button>
              
              {isSortOpen && (
                <ul className="ProductsSortMenu">
                  {["Featured", "Most relevant", "Best selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, old to new", "Date, new to old"].map((opt) => (
                    <li 
                      key={opt} 
                      className={sortOption === opt ? "isActive" : ""}
                      onClick={() => { setSortOption(opt); setIsSortOpen(false); }}
                    >
                      {opt} {sortOption === opt && "✓"}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="ProductsGrid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="ProductsCard">
                <div className="ProductsCardImageWrapper">
                  <img src={product.image} alt="Idol" className="ProductsCardImage" />
                  
                  {!product.inStock && <span className="ProductsSoldOutBadge">SOLD OUT</span>}
                  
                  {product.inStock && (
                    <span 
                      className="ProductsSaveBadge"
                      onClick={() => setSelectedProduct(product)}
                    >
                      SAVE RS. {product.saveAmount.toLocaleString('en-IN')}.00
                    </span>
                  )}
                  
                  {product.inStock && (
                    <button className="ProductsHoverAddToCartBtn" onClick={() => handleAddToCart(product)}>
                      <FaPlus /> Add to cart
                    </button>
                  )}
                </div>
                
                <div className="ProductsCardInfo">
                  <h3 className="ProductsCardTitle">{product.title}</h3>
                  <div className="ProductsCardPriceRow">
                    <span className="ProductsCurrentPrice">Rs. {product.price.toLocaleString('en-IN')}.00</span>
                    <span className="ProductsOldPrice">Rs. {product.oldPrice.toLocaleString('en-IN')}.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Floating Elements */}
      <div className="ProductsStickyReviewsTab">
        <span>★ Reviews</span>
      </div>

      <a href="https://wa.me/#" target="_blank" rel="noreferrer" className="ProductsWhatsAppFloat">
        <FaWhatsapp />
      </a>

      {/* Slide-out Drawer Panel */}
      <div className={`ProductsCartDrawerBackdrop ${isCartOpen ? 'isOpen' : ''}`} onClick={() => setIsCartOpen(false)}>
        <div className="ProductsCartDrawer" onClick={(e) => e.stopPropagation()}>
          <div className="ProductsCartDrawerHeader">
            <h3><span className="ProductsCartIconBag">👜</span> {cartQuantity} item</h3>
            <button className="ProductsCloseDrawerBtn" onClick={() => setIsCartOpen(false)}><FaTimes /></button>
          </div>
          
          {cartItem && (
            <div className="ProductsCartDrawerBody">
              <div className="ProductsCartDrawerItemRow">
                <img src={cartItem.image} alt="Cart item" className="ProductsCartDrawerImg" />
                <div className="ProductsCartDrawerItemDetails">
                  <p className="ProductsCartItemTitle">{cartItem.title}</p>
                  <div className="ProductsQuantitySelector">
                    <button onClick={() => setCartQuantity(Math.max(1, cartQuantity - 1))}><FaMinus /></button>
                    <input type="text" value={cartQuantity} readOnly />
                    <button onClick={() => setCartQuantity(cartQuantity + 1)}><FaPlus /></button>
                    <button className="ProductsRemoveItemBtn" onClick={() => setCartItem(null)}>Remove</button>
                  </div>
                </div>
                <div className="ProductsCartDrawerItemPrices">
                  <span className="ProductsDrawerCurrPrice">Rs. {cartItem.price.toLocaleString('en-IN')}.00</span>
                  <span className="ProductsDrawerOldPrice">Rs. {cartItem.oldPrice.toLocaleString('en-IN')}.00</span>
                </div>
              </div>

              <div className="ProductsCrossSellSection">
                <h4>YOU MAY ALSO LIKE</h4>
                {initialProducts.slice(0, 2).map(item => (
                  <div key={item.id} className="ProductsCrossSellCard">
                    <img src={item.image} alt="Suggested" />
                    <div>
                      <h5>{item.title.substring(0, 24)}...</h5>
                      <button onClick={() => handleAddToCart(item)}>+ Add to cart</button>
                    </div>
                    <p>Rs. {item.price.toLocaleString('en-IN')}.00</p>
                  </div>
                ))}
              </div>

              <div className="ProductsCartDrawerFooter">
                <div className="ProductsFooterNotesWrapper">
                  <span className="ProductsAddNoteLink">Add order note</span>
                  <span className="ProductsTaxCalculationNotice">Shipping & taxes calculated at checkout</span>
                </div>
                <button className="ProductsCheckoutBtn">
                  <FaLock /> CHECKOUT • RS. {(cartItem.price * cartQuantity).toLocaleString('en-IN')}.00
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay Modal Popups */}
      {selectedProduct && (
        <div className="ProductsModalBackdrop" onClick={() => setSelectedProduct(null)}>
          <div className="ProductsModalContent" onClick={(e) => e.stopPropagation()}>
            <button className="ProductsModalCloseBtn" onClick={() => setSelectedProduct(null)}><FaTimes /></button>
            <div className="ProductsModalFlexLayout">
              <div className="ProductsModalImageContainer">
                <img src={selectedProduct.image} alt="Detail view" className="ProductsModalMainImg" />
              </div>
              <div className="ProductsModalInfoContainer">
                <span className="ProductsModalBrandTag">999 SILVER COATED</span>
                <h2 className="ProductsModalTitleText">{selectedProduct.title}</h2>
                <div className="ProductsModalPriceBlock">
                  <span className="ProductsModalPrice">Rs. {selectedProduct.price.toLocaleString('en-IN')}.00</span>
                  <span className="ProductsModalOldPrice">Rs. {selectedProduct.oldPrice.toLocaleString('en-IN')}.00</span>
                  <span className="ProductsModalSaveBadge">SAVE RS. {selectedProduct.saveAmount.toLocaleString('en-IN')}.00</span>
                </div>
                <p className="ProductsTaxLabel">Tax included.</p>
                
                <div className="ProductsModalRatingRow">
                  <div className="ProductsStars">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="ProductsStarFilled" />)}
                  </div>
                  <span className="ProductsReviewsCountText">31 reviews</span>
                </div>

                <div className="ProductsModalOrderConfig">
                  <span className="ProductsConfigLabel">Quantity:</span>
                  <div className="ProductsQuantitySelector spaceTop">
                    <button onClick={() => setDetailQuantity(Math.max(1, detailQuantity - 1))}><FaMinus /></button>
                    <input type="text" value={detailQuantity} readOnly />
                    <button onClick={() => setDetailQuantity(detailQuantity + 1)}><FaPlus /></button>
                  </div>
                </div>

                <button className="ProductsModalActionAddToCart" onClick={() => { handleAddToCart(selectedProduct); setSelectedProduct(null); }}>
                  ADD TO CART
                </button>
                <button className="ProductsModalActionBuyNow">BUY IT NOW</button>

                <div className="ProductsTrustBadgesBlock">
                  <p>Free Shipping • Safe Shopping</p>
                  <ul>
                    <li>• Free Cash on Delivery</li>
                    <li>• Secure Online payment methods</li>
                  </ul>
                </div>

                <div className="ProductsShareBlockRow">
                  <span>Share</span>
                  <FaFacebookF />
                  <FaPinterestP />
                  <FaTwitter />
                  <FaTelegramPlane />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;