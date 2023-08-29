import React from "react";
import { FaChartBar, FaUsers, FaBox } from "react-icons/fa"; // Import the desired icons
import "./dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaChartBar /> Dashboard
        </li>
        <li>
          <FaUsers /> Users
        </li>
        <li>
          <FaBox /> Products
        </li>
        {/* Add more sidebar items with icons */}
      </ul>
    </div>
  );
};

export default Sidebar;
