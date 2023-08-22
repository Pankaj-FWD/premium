import React from 'react';
import '../admin/dashboard.css'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Products</li>
        {/* Add more sidebar items */}
      </ul>
    </div>
  );
};

export default Sidebar;
