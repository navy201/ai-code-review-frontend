import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      await axios.post(
        "https://ai-code-review-backend-cmhd.onrender.com/api/register/",
        formData
      );

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert("Registration Failed!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950">

      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">

        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Register
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
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
          onClick={registerUser}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg font-semibold"
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;