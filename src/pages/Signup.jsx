import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const data = {
    username: form.username,
    email: form.email,
    password: form.password,
    confirm_password: form.confirmPassword,
  };

  try {
    await api.post('api/register/', data);
    alert('Registered! Now login.');
    navigate('/login/');
  } catch (err) {
    console.error("Registration error:", err.response?.data || err.message);

    if (err.response && err.response.status === 400) {
      const errorData = err.response.data;

      if (errorData.username) {
        alert(`Username: ${errorData.username.join(' ')}`);
      } else if (errorData.email) {
        alert(`Email: ${errorData.email.join(' ')}`);
      } else {
        alert('Registration failed. Please check your input and try again.');
      }
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
