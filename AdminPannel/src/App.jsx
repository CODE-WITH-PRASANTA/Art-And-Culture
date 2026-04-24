// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";



import Dashboard from "./pages/Dashboard/Dashboard";

/* Temporary Pages Until You Create Real Pages */


const ContactManagement = () => <h1>Contact Management</h1>;
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

        {/* Admin Layout */}
        <Route path="/" element={<AdminLayout />}>


          {/* Default Route */}
          <Route index element={<Navigate to="/dashboard" />} />

          {/* Temporary Routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<ContactManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="cart" element={<CartSystem />} />
          <Route path="news" element={<NewsPosting />} />
          <Route path="pooja" element={<PoojaEssential />} />
          <Route path="enquiry" element={<EnquiryManagement />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="settings" element={<Settings />} />

        </Route>

        {/* Not Found */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;