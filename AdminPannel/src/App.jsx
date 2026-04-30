// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";

/* Temporary Pages Until You Create Real Pages */



const OrderManagement = () => <h1>Order Management</h1>;
const Accounts = () => <h1>Login / Account</h1>;
const CartSystem = () => <h1>Cart System</h1>;
const NewsPosting = () => <h1>News Posting</h1>;
const PoojaEssential = () => <h1>Pooja Essential</h1>;
const EnquiryManagement = () => <h1>Enquiry Management</h1>;
const Terms = () => <h1>Terms & Conditions</h1>;
const Privacy = () => <h1>Privacy Policy</h1>;
const Settings = () => <h1>Settings</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLayout />}>

          {/* ✅ Correct */}
          <Route index element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          

        </Route>

        

      </Routes>
    </BrowserRouter>
  );
};

export default App;