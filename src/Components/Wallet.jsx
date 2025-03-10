import React from "react";
import { FaArrowUp, FaArrowDown, FaBitcoin, FaDollarSign, FaHistory } from "react-icons/fa";

const Wallet = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-[92%] flex items-center justify-center">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white w-full max-w-3xl p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:bg-gray-700">
        
        {/* Wallet Header */}
        <h1 className="text-4xl font-bold mb-6 text-center">Wallet</h1>

        {/* Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mb-6">
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaBitcoin className="text-4xl text-yellow-400 mx-auto mb-2" />
            <p className="text-lg font-medium opacity-80">Total Balance</p>
            <p className="text-2xl font-bold">5.0 BTC</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <FaDollarSign className="text-4xl text-green-400 mx-auto mb-2" />
            <p className="text-lg font-medium opacity-80">Total Value</p>
            <p className="text-2xl font-bold">$250,000</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-green-700 shadow-lg flex items-center gap-2 justify-center">
            <FaArrowUp /> Deposit
          </button>
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700 shadow-lg flex items-center gap-2 justify-center">
            <FaArrowDown /> Withdraw
          </button>
        </div>

        {/* Transaction History Section */}
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaHistory /> Transaction History
        </h2>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-between text-lg font-medium opacity-80 mb-2">
            <span>Date</span>
            <span>Type</span>
            <span>Amount</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-green-400">
            <span>Mar 15, 2025</span>
            <span>Deposit</span>
            <span>+ 0.5 BTC</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-red-400 mt-2">
            <span>Mar 10, 2025</span>
            <span>Withdraw</span>
            <span>- 0.3 BTC</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-green-400 mt-2">
            <span>Mar 5, 2025</span>
            <span>Deposit</span>
            <span>+ 1.0 BTC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
