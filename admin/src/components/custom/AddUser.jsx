import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toastMsg from '@/utils/toastMsg'

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("isAuthenticated", "true");
    toastMsg.sucess("Signed in successfully!")
    navigate('/admin/profile');
    
  };

  return (
    <main>
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
        >
        <h2 className="text-xl font-bold mb-6 text-center">Super User</h2>
        <input
          type="text"
          placeholder="User name"
          className="border p-2 w-full mb-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        <select
          name="permission"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
          >
          <option value="" disabled> User Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
          Create New User
        </button>
      </form>
    </div>
    </main>
  );
};

export default AddUser;
