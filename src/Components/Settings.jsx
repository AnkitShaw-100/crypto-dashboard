import React, { useState } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="p-6 bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 text-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center">Settings</h1>
                <div className="flex flex-col gap-6">
                    <div className="mb-8">
                        <label className="text-lg font-medium opacity-80">Username</label>
                        <input 
                            type="text" 
                            className="w-full p-3 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="text-lg font-medium opacity-80">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-3 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="text-lg font-medium opacity-80">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-3 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="text-lg font-medium opacity-80">Profile Picture</label>
                        <input 
                            type="file" 
                            className="w-full p-3 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="text-lg font-medium opacity-80">Theme</label>
                        <select 
                            value={theme} 
                            onChange={(e) => setTheme(e.target.value)} 
                            className="w-full p-3 mt-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div className="mb-8 flex items-center">
                        <input 
                            type="checkbox" 
                            checked={notifications} 
                            onChange={(e) => setNotifications(e.target.checked)} 
                            className="mt-2"
                        />
                        <label className="ml-2 text-lg font-medium opacity-80">Enable Notifications</label>
                    </div>
                    <button className="w-full p-3 bg-blue-500 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all duration-300">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
