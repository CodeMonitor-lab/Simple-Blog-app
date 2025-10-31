import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toastMsg from "@/utils/toastMsg";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();
  const validateUser = () =>{
    if(!name || !email || !password || !role){
      toastMsg.info("All filed reauired!")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateUser()) return;
    setLoading(true)

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`, {
        name,
        email,
        password,
        role
      });

      const data = response.data;

      if (data) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("name", data.name || name);
        setEmail("");
        setName("");
        setPassword("");
        setRole("");  
        toastMsg.success("User created successfully!");
        navigate("/admin/profile");
      } else {
        toastMsg.error("Error creating user");
      }
    } catch (error) {
      console.log("SignUp failed",error)
      const signUpError = error.response?.data?.message || "Failed to create user" ;
      toastMsg.error(signUpError);
    }finally{
      setLoading(false)
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-96"
      >
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
          Super User
        </h2>

        <input
          type="text"
          placeholder="User name"
          className="border p-2 w-full mb-4 rounded focus:outline-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <select
          name="permission"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border w-full p-2 mb-4 rounded focus:outline-blue-400"
        >
          <option value="" disabled>
            User Role
          </option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>

        <button
          type="submit"
          aria-label="Create User"
          disabled = {loading}
          className={`${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded w-full transition`} 
        >
         {loading ? "Creating...":"Create New User"} 
        </button>
      </form>
    </main>
  );
};

export default AddUser;
