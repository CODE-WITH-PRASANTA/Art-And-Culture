import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
<<<<<<< HEAD
import Shop from "./Pages/Shop/Shop";
import FreshCollection from "./Pages/FreshCollection/FreshCollection";
import AllIdols from "./Pages/AllIdols/AllIdols";
import FestiveFilter from "./Pages/FestiveFilter/FestiveFilter";
=======
import ShopSec from "./Pages/ShopSec/ShopSec";
import Termandcondition from "./Components/Termandcondition/Termandcondition";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy.jsx";


>>>>>>> ed951190db47a2a2f7d75c7c90bff7d9731cd9ee


function App() {
  return (
    <>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Content */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/shop" element={<Shop />} />
          <Route path="/fresh/collection" element={< FreshCollection/>} />
          <Route path="/all/idol" element={<AllIdols />} />
          <Route path="/festive/filter" element={<FestiveFilter />} />
          


=======
          <Route path="/Shop" element={<ShopSec />} />
          <Route path="/termandcondition" element={<Termandcondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
>>>>>>> ed951190db47a2a2f7d75c7c90bff7d9731cd9ee
        </Routes>
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
