import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-4 bg-gray-900 min-h-[92vh] flex items-center justify-center">
      <div className="bg-gray-800 text-white w-full max-w-xl p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>
        <div className="flex flex-col gap-4">
          <div className="mb-6">
            <label className="text-lg font-medium opacity-80">Username</label>
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium opacity-80">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium opacity-80">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg font-medium opacity-80">
              Profile Picture
            </label>
            <input
              type="file"
              className="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
            />
          </div>
          <button className="w-full p-2 bg-blue-500 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
