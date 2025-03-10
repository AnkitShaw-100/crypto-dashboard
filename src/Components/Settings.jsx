import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage, FaMoon, FaSun } from "react-icons/fa";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-4 md:p-8 bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 text-white w-full max-w-3xl p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="text-lg font-medium flex items-center gap-2 opacity-80">
              <FaUser /> Username
            </label>
            <input
              type="text"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-lg font-medium flex items-center gap-2 opacity-80">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-lg font-medium flex items-center gap-2 opacity-80">
              <FaLock /> Password
            </label>
            <input
              type="password"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              placeholder="Enter your password"
            />
          </div>

          {/* Profile Picture Upload */}
          <div>
            <label className="text-lg font-medium flex items-center gap-2 opacity-80">
              <FaImage /> Profile Picture
            </label>
            <input
              type="file"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
            />
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-lg font-medium">Dark Mode</span>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`p-2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                theme === "light" ? "bg-gray-500" : "bg-yellow-400"
              }`}
            >
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-lg font-medium">Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`p-2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                notifications ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {notifications ? "On" : "Off"}
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full mt-6 p-3 bg-blue-500 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all duration-300">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
