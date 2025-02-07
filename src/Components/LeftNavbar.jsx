import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faWallet,
  faReceipt,
  faHeadset,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className="w-full md:w-1/6 h-screen bg-gray-800 text-white flex flex-col justify-between p-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <p className="text-2xl font-bold">@CryptoVerse</p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Link
            id="DashBoard"
            to="/"
            className="flex items-center gap-4 text-base no-underline text-white bg-gray-700 h-12 rounded-lg p-3 hover:bg-gray-600"
          >
            <FontAwesomeIcon icon={faBars} className="h-5" />
            <p>DashBoard</p>
          </Link>

          <Link
            to="/wallet"
            className="flex items-center gap-4 text-base no-underline text-white bg-gray-700 h-12 rounded-lg p-3 hover:bg-gray-600"
          >
            <FontAwesomeIcon icon={faWallet} className="h-5" />
            <p>Wallet</p>
          </Link>

          <Link
            id="transaction"
            to="/transaction"
            className="flex items-center gap-4 text-base no-underline text-white bg-gray-700 h-12 rounded-lg p-3 hover:bg-gray-600"
          >
            <FontAwesomeIcon icon={faReceipt} className="h-5" />
            <p>Transactions</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mb-4">
        <Link
          id="support"
          to="/Support"
          className="flex items-center gap-4 text-base no-underline text-white bg-gray-700 h-12 rounded-lg p-3 hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faHeadset} className="h-5" />
          <p>Support</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftNavbar;
