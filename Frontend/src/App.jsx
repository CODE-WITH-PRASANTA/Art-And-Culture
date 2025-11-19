import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import FreshCollection from "./Pages/FreshCollection/FreshCollection";
import AllIdols from "./Pages/AllIdols/AllIdols";
import FestiveFilter from "./Pages/FestiveFilter/FestiveFilter";
import ShopSec from "./Pages/ShopSec/ShopSec";
import Blog from "./Pages/Blog/Blog";
import BlogDetailsSection from "./Components/BlogDetailsSection/BlogDetailsSection";
import BestSelling from "./Pages/BestSelling/BestSelling";
import PoojaEssentials from "./Pages/PoojaEssentials/PoojaEssentials";
import HomeDecor from "./Pages/HomeDecor/HomeDecor";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Faq from "./Pages/Faq/Faq";
import CheckOutSection from "./Components/CheckoutSection/CheckoutSection";
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm";
import OrdersTable from "./Components/OrdersTable/OrdersTable";


function App() {
  return (
    <>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Content */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopSec />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ShopSec />} />
          <Route path="/fresh/collection" element={< FreshCollection/>} />
          <Route path="/all/idol" element={<AllIdols />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/details" element={<BlogDetailsSection/>} />
          <Route path="best-sellers" element={<BestSelling/>} />
          <Route path="/pooja/essentials" element={<PoojaEssentials/>} />
          <Route path="/home/decor" element={<HomeDecor/>} />
          <Route path="/track/order" element={<TrackOrder/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/check/out" element={<CheckOutSection/>} />
          <Route path="/order/confirm" element={<OrderConfirm/>} />
          <Route path="/order/history" element={<OrdersTable/>} />


          

          








        </Routes>
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
