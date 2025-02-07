import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Wallet = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-[92vh] flex items-center justify-center">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white w-full max-w-2xl p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-center">Wallet</h1>
        <div className="text-center mb-6">
          <p className="text-lg font-medium opacity-80">Total Balance</p>
          <p className="text-3xl font-bold">5.0 BTC</p>
          <p className="text-lg font-medium opacity-80 mt-4">Total Value</p>
          <p className="text-3xl font-bold">$250,000</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-green-700 shadow-lg flex items-center gap-2 justify-center">
            <FaArrowUp /> Deposit
          </button>
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700 shadow-lg flex items-center gap-2 justify-center">
            <FaArrowDown /> Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
