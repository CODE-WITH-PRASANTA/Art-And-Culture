// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import ContactTable from "./Component/ContactTable/ContactTable";
import BlogPost from "./Component/BlogPost/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLayout />}>

          {/* ✅ Correct */}
          <Route index element={<Dashboard />} />
          <Route path="contact" element={<ContactTable />} />
          <Route path="/blog/post" element={<BlogPost />} />

        </Route>

        

      </Routes>
    </BrowserRouter>
  );
};

export default App;