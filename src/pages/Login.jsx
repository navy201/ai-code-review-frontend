import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        formData
      );

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful!");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950">
      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Login
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 rounded-lg mb-4 bg-zinc-800 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg mb-6 bg-zinc-800 text-white"
        />

        <button
          onClick={loginUser}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;