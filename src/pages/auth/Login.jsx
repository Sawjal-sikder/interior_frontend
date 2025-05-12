import React, { useState } from "react";
import api from "../../services/api";
import { saveTokens } from "../../../auth";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";

const Login = () => {


  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/api/login/", formData);
      saveTokens(data);
      navigate("/dashboard"); // Redirect to the dashboard after successful login
    } catch (error) {
      alert(error.response.data.detail);
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="login-form max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <div className="form-group mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username} // Bind the input value to formData.username
            onChange={handleChange} // Bind the onChange event to handleChange
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password} // Bind the input value to formData.password
            onChange={handleChange} // Bind the onChange event to handleChange
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <div className="flex items-center gap-x-2 py-3 justify-end text-sm">
          <p>You don't have account</p>
        <Link to="/signup" className="text-blue-700 font-bold">Sign Up</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
