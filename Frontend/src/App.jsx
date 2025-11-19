import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import FreshCollection from "./Pages/FreshCollection/FreshCollection";
import AllIdols from "./Pages/AllIdols/AllIdols";
import FestiveFilter from "./Pages/FestiveFilter/FestiveFilter";
import ShopSec from "./Pages/ShopSec/ShopSec";
<<<<<<< HEAD
=======

>>>>>>> cf2fd696970e1cded8ef0fbf1df449d1b4d95460
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

<<<<<<< HEAD
=======

import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Termandcondition from './Components/Termandcondition/Termandcondition'
import About from "./Pages/About/About";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

>>>>>>> cf2fd696970e1cded8ef0fbf1df449d1b4d95460

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
<<<<<<< HEAD
=======

>>>>>>> cf2fd696970e1cded8ef0fbf1df449d1b4d95460
          <Route path="/shop" element={<ShopSec />} />
          <Route path="/fresh/collection" element={< FreshCollection/>} />
          <Route path="/all/idol" element={<AllIdols />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/details" element={<BlogDetailsSection/>} />
<<<<<<< HEAD
          <Route path="best-sellers" element={<BestSelling/>} />
          <Route path="/pooja/essentials" element={<PoojaEssentials/>} />
          <Route path="/home/decor" element={<HomeDecor/>} />
          <Route path="/track/order" element={<TrackOrder/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/check/out" element={<CheckOutSection/>} />
          <Route path="/order/confirm" element={<OrderConfirm/>} />
          <Route path="/order/history" element={<OrdersTable/>} />


          

          








=======
          <Route path="/best-sellers" element={<BestSelling/>} />
          

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />



          <Route path="/fresh/collection" element={< FreshCollection/>} />
          <Route path="/all/idol" element={<AllIdols />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termandcondition" element={<Termandcondition/>} />
          

>>>>>>> cf2fd696970e1cded8ef0fbf1df449d1b4d95460
        </Routes>
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
