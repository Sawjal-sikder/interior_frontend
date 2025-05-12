import React, { useEffect } from "react";
import Home from "./pages/home";
import Login from "./pages/auth/Login";
import Signup from "./pages/Signup";
import { Routes, Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./component/protection/ProtectedRoute";
import SuperuserRoute from "./component/protection/SuperuserRoute";
import Service_list from "./pages/service/Service_list";
import Product_list from "./pages/product/Product_list";
import Protfolio_list from "./pages/protfolio/Protfolio_list";
import Project_list from "./pages/project/Project_list";
import Dynamic_Title from "./component/DynamicTitle";
import Gallary_list from "./pages/gallary/Gallary_list";
function App() {
  return (
    <>
      <Dynamic_Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <SuperuserRoute>
              <Dashboard />
            </SuperuserRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/service/" element={<Service_list />} />
        <Route path="/product/" element={<Product_list />} />
        <Route path="/protfolio/" element={<Protfolio_list />} />
        <Route path="/project/" element={<Project_list />} />
        <Route path="/gallary/" element={<Gallary_list />} />
      </Routes>
    </>
  );
}

export default App;
