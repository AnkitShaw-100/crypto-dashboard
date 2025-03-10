import React from "react";
import { FaChartLine, FaMoneyBillWave, FaPercentage, FaBalanceScale, FaArrowUp, FaArrowDown } from "react-icons/fa";
import SpiderMan from "../assets/spider_man.png";

const User = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-[92%] flex items-center justify-center flex-col">
      <div className="bg-gray-800 text-white w-full max-w-4xl p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-lg">
        
        {/* Profile Section */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={SpiderMan}
            alt="Trader Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">Ankit Shaw</h1>
            <p className="text-lg text-gray-400">Professional Crypto Trader</p>
            <p className="text-lg text-gray-400 opacity-80">ankitshaw@example.com</p>
          </div>
        </div>

        {/* Trading Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaChartLine className="text-3xl text-green-400 mx-auto" />
            <p className="text-lg font-medium opacity-80">Win Rate</p>
            <p className="text-2xl font-bold text-green-400">78%</p>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaMoneyBillWave className="text-3xl text-yellow-400 mx-auto" />
            <p className="text-lg font-medium opacity-80">Avg Trade Size</p>
            <p className="text-2xl font-bold text-yellow-400">$5,000</p>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaPercentage className="text-3xl text-blue-400 mx-auto" />
            <p className="text-lg font-medium opacity-80">Risk/Reward Ratio</p>
            <p className="text-2xl font-bold text-blue-400">1:2</p>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaBalanceScale className="text-3xl text-red-400 mx-auto" />
            <p className="text-lg font-medium opacity-80">Max Drawdown</p>
            <p className="text-2xl font-bold text-red-400">-12%</p>
          </div>
        </div>

        {/* Portfolio Allocation Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Portfolio Allocation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaArrowUp className="text-3xl text-green-500 mx-auto" />
            <p className="text-lg font-medium opacity-80">BTC Holdings</p>
            <p className="text-2xl font-bold">60%</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaArrowDown className="text-3xl text-blue-400 mx-auto" />
            <p className="text-lg font-medium opacity-80">ETH Holdings</p>
            <p className="text-2xl font-bold">30%</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaArrowUp className="text-3xl text-yellow-400 mx-auto" />
            <p className="text-lg font-medium opacity-80">Altcoins</p>
            <p className="text-2xl font-bold">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
