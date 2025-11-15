import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ShopSec from "./Pages/ShopSec/ShopSec";



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
        </Routes>
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
