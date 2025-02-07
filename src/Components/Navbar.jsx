import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faCog,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a id="home" href="#home" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <p id="text1" className="text-white text-lg hidden sm:block">
          Dashboard
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <a
          id="notifications"
          href="#notifications"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a
          id="settings"
          href="#settings"
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faCog} />
        </a>
        <a id="user" href="#user" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
