import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a id="DashBoard" href="/" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faHome} />
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          id="settings"
          href="/settings"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faCog} />
        </a>
        <a id="user" href="/user" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
