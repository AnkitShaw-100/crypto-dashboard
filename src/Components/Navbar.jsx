import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link id="DashBoard" to="/" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link id="settings" to="/settings" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faCog} />
        </Link>
        <Link id="user" to="/user" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
