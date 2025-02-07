import React from "react";
import Graph from "../assets/Graph.png";
import Tabs from "../assets/Tabs.png";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Body = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-[92vh]">
      {/* Portfolio Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-5 mx-auto w-[66vw] h-[14vh] p-6 rounded-2xl transition-all duration-300 hover:bg-gray-700 shadow-xl flex justify-between items-center">
        <div>
          <p className="text-lg font-medium opacity-80">Total Portfolio</p>
          <p className="text-3xl font-bold">$113,312.24</p>
        </div>
        <div>
          <p className="text-lg font-medium opacity-80">Wallet Balance</p>
          <p className="text-3xl font-bold">22.3940100 BTC</p>
        </div>
        <div className="flex gap-6">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-green-700 shadow-lg flex items-center gap-2">
            <FaArrowUp /> Deposit
          </button>
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700 shadow-lg flex items-center gap-2">
            <FaArrowDown /> Withdraw
          </button>
        </div>
      </div>

      {/* Graph & Transactions */}
      <div className="flex justify-center mt-5 gap-6">
        <div className="bg-gray-800 text-white w-[39%] h-[38vh] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-medium opacity-80">Current Price</p>
              <p className="text-3xl font-bold">$11,312.24</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 flex items-center gap-2">
                <FaArrowUp /> Buy
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-red-700 flex items-center gap-2">
                <FaArrowDown /> Sell
              </button>
            </div>
          </div>
          <div className="mt-4">
            <img className="h-6 opacity-80" src={Tabs} alt="Tabs" />
            <img
              className="w-full h-[18vh] mt-2 rounded-lg"
              src={Graph}
              alt="Graph"
            />
          </div>
        </div>

        <div className="bg-gray-800 text-white w-[39%] h-[38vh] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <p className="text-lg font-medium opacity-80">Deposit</p>
            <p className="text-2xl font-semibold text-green-400">
              + $81,123.10
            </p>
          </div>
          <div>
            <p className="text-lg font-medium opacity-80">BTC Sell</p>
            <p className="text-2xl font-semibold text-red-400">
              -1.248513391 BTC
            </p>
          </div>
          <div>
            <p className="text-lg font-medium opacity-80">Last Trade</p>
            <p className="text-2xl font-semibold text-green-400">+ $1,124.99</p>
          </div>
        </div>
      </div>

      {/* Recent Activity & Notifications */}
      <div className="bg-gray-800 text-white mt-5 w-4/5 mx-auto p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-medium opacity-80">Recent Activity</p>
            <ul className="mt-2 space-y-1 text-sm opacity-90">
              <li>
                Bought <span className="font-bold">0.5 BTC</span> -{" "}
                <span className="text-green-400">$5,000</span>
              </li>
              <li>
                Sold <span className="font-bold">0.2 BTC</span> -{" "}
                <span className="text-red-400">$2,000</span>
              </li>
              <li>
                Deposited <span className="text-green-400">$1,000</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium opacity-80">Notifications</p>
            <ul className="mt-2 space-y-1 text-sm opacity-90">
              <li>
                Price Alert: <span className="font-bold">BTC</span> reached{" "}
                <span className="text-yellow-400">$11,000</span>
              </li>
              <li>
                New Deposit of <span className="text-green-400">$1,000</span>
              </li>
              <li>
                Withdrawal of <span className="text-red-400">$500</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
