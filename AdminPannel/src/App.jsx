// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import ContactTable from "./Component/ContactTable/ContactTable";

import Order from "./pages/Order/Order";
import Pooja from "./pages/Pooja/Pooja";
import Testimonial from "./pages/Testimonial/Testimonial";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogView from "./pages/BlogView/BlogView";
import ShopManagement from "./pages/ShopManageView/ShopManageView";
import ShopListPage from "./pages/ShopListPage/ShopListPage";
import CategoryManage from "./pages/CategoryManage/CategoryManage";
import TeamMember from "./pages/TeamMember/TeamMember";
import EditProductPage from "./pages/EditProductPage/EditProductPage";

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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactTable />} />
          
          <Route path="/orders" element={<Order/>}/>
          <Route path="/pooja" element={<Pooja/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="/blog/post" element={<Blog/>}/>
          <Route path="/blog/view" element={<BlogView/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/sub/view" element={<ShopManagement/>}/>
          <Route path="/sub/list" element={<ShopListPage/>}/>
          <Route path="/category/add" element={<CategoryManage/>}/>
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/team/members-post" element={<TeamMember/>}/>

        </Route>

        

      </Routes>
    </BrowserRouter>
  );
};

export default App;