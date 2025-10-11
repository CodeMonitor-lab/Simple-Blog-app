import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toastMsg from "@/utils/toastMsg";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userValidate = () => {
    if (!email.trim() || !password.trim()) {
      toastMsg.info("All fields are required!");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userValidate()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password }
      );

      const data = response.data;
      if (data) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("name", data.name || email);
        toastMsg.success("Admin Login Successful");
        navigate("/admin/dashboard");
      } else {
        toastMsg.error("Login Failed!");
      }
    } catch (error) {
      if (error.response) {
        toastMsg.error(error.response.data.message || "Login failed!");
      } else if (error.request) {
        toastMsg.error("No response from server!");
      } else {
        toastMsg.error("Something went wrong!");
      }
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-96"
      >
        <p className="text-center mb-2">Welcome to Dashboard</p>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 rounded focus:outline-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded focus:outline-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded w-full transition`}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
