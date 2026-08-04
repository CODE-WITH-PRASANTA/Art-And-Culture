// src/App.jsx

import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "../Layout/AdminLayout";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
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
import FreshCollectionList from "./pages/FreshCollectionList/FreshCollectionList";
import LoginForm from "./pages/LoginForm/LoginForm";
import Protected from "./pages/Protected/Protected";

// Components
import ContactTable from "./Component/ContactTable/ContactTable";
import Categories from "./Component/Categories/Categories";
import Atttributes from "./Component/Attributes/Attributes";
import Attributes from "./Component/Attributes/Attributes";
import Addnewcategory from "./Component/Addnewcategory/Addnewcategory";
import Orders from "./pages/Orders/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= DEFAULT REDIRECT ================= */}

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* ================= LOGIN PAGE ================= */}

        <Route
          path="/login"
          element={<LoginForm />}
        />

        {/* ================= ADMIN PANEL ================= */}

        <Route
          path="/admin"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          {/* ================= DASHBOARD ================= */}

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          {/* ================= CONTACT ================= */}

          <Route
            path="contact-table"
            element={<ContactTable />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          {/* ================= ORDERS ================= */}

          <Route
            path="order"
            element={<Order />}
          />

           <Route
            path="orders"
            element={<Orders />}
          />


          {/* ================= POOJA ================= */}

          <Route
            path="pooja"
            element={<Pooja />}
          />

          {/* ================= TESTIMONIAL ================= */}

          <Route
            path="testimonial"
            element={<Testimonial />}
          />

          {/* ================= BLOG ================= */}

          <Route
            path="blog/post/:id?"
            element={<Blog />}
          />

          <Route
            path="blog/view"
            element={<BlogView />}
          />

          {/* ================= SHOP ================= */}

          <Route
            path="sub/view/:id?"
            element={<ShopManagement />}
          />

          <Route
            path="sub/list"
            element={<ShopListPage />}
          />

          {/* ================= CATEGORY MANAGEMENT ================= */}

          {/* <Route
            path="category/add"
            element={<CategoryManage />}
          /> */}

          {/* ================= CATEGORIES ================= */}

          <Route
            path="category/add"
            element={<Categories />}
          />
          <Route
            path="newcategory/add"
            element={<Addnewcategory />}
          />

          {/* ================= TEAM ================= */}

          <Route
            path="team/members-post"
            element={<TeamMember />}
          />


           <Route
            path="category/attribute"
            element={<Attributes />}
          />
         

          {/* ================= FRESH COLLECTION ================= */}

          <Route
            path="fresh-collection"
            element={<FreshCollectionList />}
          />
        </Route>

        {/* ================= INVALID ROUTE ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;