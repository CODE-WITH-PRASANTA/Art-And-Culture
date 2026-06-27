import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FloatingIcons from "./Components/FloatingIcons/FloatingIcons";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
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
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm";
import About from "./Pages/About/About";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Components/Termandcondition/Termandcondition";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import CheckOut from "./Pages/CheckOut/CheckOut";
import PoojaDetails from "./Pages/PoojaDetails/PoojaDetails";
import ShopDetails from "./Pages/ShopDetails/ShopDetails";
import Carts from "./Pages/Carts/Carts";
import LoginForm from "./Components/LoginForm/LoginForm";
import BrassDiyas from "./Pages/BrassDiyas/BrassDiyas";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Address from "./Components/Address/Address";


function App() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopSec />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetailsSection />} />

          <Route path="/best-sellers" element={<BestSelling />} />

          <Route path="/fresh/collection" element={<FreshCollection />} />
          <Route path="/all/idol" element={<AllIdols />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />

          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termandcondition" element={<Terms />} />

          <Route path="/pooja-essentials" element={<PoojaEssentials />} />
          <Route path="/homedecor" element={<HomeDecor />} />
          <Route path="/trackorder" element={<TrackOrder />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderconfirm" element={<OrderConfirm />} />
          <Route path="/ordershistory" element={<OrderHistory />} />
          <Route path="/poojadetails" element={<PoojaDetails/>}/>
          <Route path="/cart" element={<Carts />} />
          <Route path="/shopdetails" element={<ShopDetails/>}/>
          <Route path="/cart" element={<Carts/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          
          <Route path="/brass-diyas" element={<BrassDiyas/>}/>

         {/* ================= Account Layout ================= */}

<Route path="/account" element={<MainLayout />}>

  <Route index element={<div>Overview Page</div>} />

  <Route
    path="address"
    element={<Address />}
  />

  <Route
    path="orders"
    element={<div>Orders Page</div>}
  />

  <Route
    path="details"
    element={<div>Account Details</div>}
  />

  <Route
    path="contact"
    element={<div>Contact Page</div>}
  />

</Route>
          
   
        </Routes>
      </main>

      <Footer />
      <FloatingIcons />
    </>
  );
}

export default App;