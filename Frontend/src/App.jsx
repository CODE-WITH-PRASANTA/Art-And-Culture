import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ShopSec from "./Pages/ShopSec/ShopSec";
import Termandcondition from "./Components/Termandcondition/Termandcondition";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy.jsx";




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
          <Route path="/Shop" element={<ShopSec />} />
          <Route path="/termandcondition" element={<Termandcondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
