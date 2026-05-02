// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import ContactTable from "./Component/ContactTable/ContactTable";
import BlogPost from "./Component/BlogPost/BlogPost";
import Order from "./pages/Order/Order";
import Pooja from "./pages/Pooja/Pooja";
import Testimonial from "./pages/Testimonial/Testimonial";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLayout />}>

          {/* ✅ Correct */}
          <Route index element={<Dashboard />} />
          <Route path="/contact" element={<ContactTable />} />
          <Route path="/blog/post" element={<BlogPost />} />
          <Route path="/orders" element={<Order/>}/>
          <Route path="/pooja" element={<Pooja/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>

        </Route>

        

      </Routes>
    </BrowserRouter>
  );
};

export default App;