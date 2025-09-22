import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const auth={
    email:"admin@gmail.com",
    password:"admin123"
}

const Login = () => {
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(auth.email===email && auth.password===password){
        localStorage.setItem("isAuthenticated", "true");
        navigate("/admin/dashboard");
        
    }else{
        console.log("Invalid Creadentials")
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
      >
        <p className="text-center">Welcome to Dashboar</p>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <span>admin@gmail.com</span>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-4 rounded"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
        />
        <span>admin123@</span>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
