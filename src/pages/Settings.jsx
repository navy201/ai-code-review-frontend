import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {
  User,
  Palette,
  Bell,
  ShieldCheck,
  Trash2,
} from "lucide-react";


function Settings() {
  const [active, setActive] = useState("account");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const handleSave = async () => {
  const token = localStorage.getItem("access");
  const [theme, setTheme] = useState("dark");
  const [accentColor, setAccentColor] = useState("cyan");

  try {
    const response = await axios.put(
      "http://127.0.0.1:8000/api/profile/",
      {
        first_name: fullName,
        email: email,
        username: username,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(response.data.message);

  } catch (error) {
    console.log(error.response?.data);
    alert("Failed to update profile");
  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">⚙️ Settings</h1>

        <div className="grid md:grid-cols-4 gap-6">

          {/* Left Menu */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 space-y-3">

            <button
              onClick={() => setActive("account")}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
            >
              <User /> Account
            </button>

            <button
              onClick={() => setActive("appearance")}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
            >
              <Palette /> Appearance
            </button>

            <button
              onClick={() => setActive("notifications")}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
            >
              <Bell /> Notifications
            </button>

            <button
              onClick={() => setActive("security")}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
            >
              <ShieldCheck /> Security
            </button>

            <button
              onClick={() => setActive("danger")}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400"
            >
              <Trash2 /> Danger Zone
            </button>
          </div>

          {/* Right Content */}
          <div className="md:col-span-3 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

            {active === "account" && (
              <>
                <h2 className="text-2xl font-bold mb-6">👤 Account</h2>

                <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full p-3 rounded-xl bg-slate-800 mb-4"
/>

                <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 rounded-xl bg-slate-800 mb-4"
/>

                <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="w-full p-3 rounded-xl bg-slate-800 mb-6"
/> 
<button
    onClick={handleSave}
    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
>
    Save Changes
</button>
              </>
            )}

            {active === "appearance" && (
  <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700 shadow-lg">
    <h2 className="text-2xl font-bold text-white mb-6">
      🎨 Appearance
    </h2>

    {/* Theme */}
    <div className="mb-8">
      <label className="block text-zinc-300 mb-3 font-medium">
        Theme
      </label>

      <div className="flex gap-4">
        <button
          onClick={() => setTheme("light")}
          className={`px-5 py-3 rounded-xl transition ${
            theme === "light"
              ? "bg-cyan-500 text-white"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          ☀️ Light
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`px-5 py-3 rounded-xl transition ${
            theme === "dark"
              ? "bg-cyan-500 text-white"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          🌙 Dark
        </button>
      </div>
    </div>

    {/* Accent Color */}
    <div className="mb-8">
      <label className="block text-zinc-300 mb-3 font-medium">
        Accent Color
      </label>

      <div className="flex gap-4 flex-wrap">
        {[
          { name: "cyan", color: "bg-cyan-500" },
          { name: "blue", color: "bg-blue-500" },
          { name: "purple", color: "bg-purple-500" },
          { name: "green", color: "bg-green-500" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => setAccentColor(item.name)}
            className={`w-12 h-12 rounded-full ${item.color}
              ${
                accentColor === item.name
                  ? "ring-4 ring-white"
                  : ""
              }`}
          ></button>
        ))}
      </div>
    </div>

    <button onClick={() => setActive("appearance")}>
  Appearance
</button>
  </div>
)}

            {active === "notifications" && (
              <>
                <h2 className="text-2xl font-bold mb-6">🔔 Notifications</h2>

                <label className="flex justify-between mb-4">
                  <span>Email Notifications</span>
                  <input type="checkbox" />
                </label>

                <label className="flex justify-between mb-4">
                  <span>Review Completed</span>
                  <input type="checkbox" />
                </label>

                <label className="flex justify-between">
                  <span>Security Alerts</span>
                  <input type="checkbox" />
                </label>
              </>
            )}

            {active === "security" && (
              <>
                <h2 className="text-2xl font-bold mb-6">🔒 Security</h2>

                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 rounded-xl bg-slate-800 mb-4"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 rounded-xl bg-slate-800 mb-6"
                />

                <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl">
                  Update Password
                </button>
              </>
            )}

            {active === "danger" && (
              <>
                <h2 className="text-2xl font-bold text-red-400 mb-6">
                  🗑 Danger Zone
                </h2>

                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl">
                  Delete Account
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;