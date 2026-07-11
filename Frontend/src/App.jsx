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
import About from "./Pages/About/About";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Components/Termandcondition/Termandcondition";
import PoojaDetails from "./Pages/PoojaDetails/PoojaDetails";
import ShopDetails from "./Pages/ShopDetails/ShopDetails";
import LoginForm from "./Components/LoginForm/LoginForm";
import PoojaEssentialsMain from "./Pages/PoojaEssentialsMain/PoojaEssentialsMain";
import Prints from "./Pages/Prints/Prints";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Address from "./Components/Address/Address";
import OverView from "./Components/OverView/OverView";
import Order from "./Components/Order/Order";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import ContactUs from "./Components/ContactUs/ContactUs";
import Wishlist from "./Components/Whislist/Wishlist";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* General Routes */}
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
          <Route path="/poojadetails" element={<PoojaDetails />} />
         <Route path="/shopdetails/:id" element={<ShopDetails />} />
          <Route path="/poojamain" element={<PoojaEssentialsMain />} />
          <Route path="/wood" element={<Prints />} />   
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="/LoginForm" element={<LoginForm/>}/>

          {/* ================= NESTED ACCOUNT ROUTING BLOCK ================= */}
         <Route path="/account" element={<MainLayout />}>

  <Route index element={<div>Overview Page</div>} />

  <Route
    path="address"
    element={<Address />}
  />

  <Route
    path="overview"
    element={<OverView />}
  />
   <Route path="orders" element={<Order />} />

  <Route
    path="details"
    element={<AccountDetails />}
  />

  <Route
    path="contact"
    element={<ContactUs />} 
  />

</Route>
          {/* Layout Setup */}
         
        </Routes>
      </main>

      <Footer />
      <FloatingIcons />
    </>
  );
}

export default App;