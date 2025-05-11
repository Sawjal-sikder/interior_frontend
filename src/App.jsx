import React, { useEffect } from "react";
import Home from "./pages/home";
import Login from "./pages/auth/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./component/protection/ProtectedRoute";
import SuperuserRoute from "./component/protection/SuperuserRoute";

function App() {
  // Set page title on mount
  useEffect(() => {
    document.title = "Commitment Service";
  }, []);

  return (
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
    </Routes>
  );
}

export default App;
