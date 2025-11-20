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
import About from "./Pages/About/About";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Components/Termandcondition/Termandcondition";


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
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/details" element={<BlogDetailsSection/>} />
          <Route path="/best-sellers" element={<BestSelling/>} />

          <Route path="/fresh/collection" element={< FreshCollection/>} />
          <Route path="/all/idol" element={<AllIdols />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termandcondition" element={<Terms />} />


          <Route path="/Pooja-essentials" element={<PoojaEssentials />} />
          <Route path="/HomeDecor" element={<HomeDecor />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/CheckOutSection" element={<CheckOutSection />} />
          <Route path="/OrderConfirm" element={<OrderConfirm />} />
          <Route path="/OrdersHistory" element={<OrdersTable />} />
          
        </Routes>
      </main> 

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
