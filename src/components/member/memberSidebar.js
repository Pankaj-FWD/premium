import React from "react";
import { FaChartBar, FaBox, FaLock, FaUser, FaEllipsisH } from "react-icons/fa";
import '../admin/dashboard.css'
import { useNavigate,useLocation } from "react-router-dom"; 

const MemberSidebar = () => {

  const navigate = useNavigate(); // Get the history object from React Router
  const location = useLocation();
  const handleResetPasswordClick = () => {
    // Redirect to the Reset Password page
    navigate(`${location.pathname}/reset-password`);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaChartBar /> Dashboard
        </li>
        <li>
          <FaUser /> Profile
        </li>
        <li>
          <FaBox /> Products
        </li>
        <li onClick={handleResetPasswordClick}>
          <FaLock /> Reset Password
        </li>
        <li>
          <FaEllipsisH /> More
        </li>
        {/* Add more sidebar items with icons */}
      </ul>
    </div>
  );
};

export default MemberSidebar;
