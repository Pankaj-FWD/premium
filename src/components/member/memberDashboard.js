import React, { useState, useEffect } from 'react';
import Sidebar from './memberSidebar';
import '../admin/dashboard.css'

const MemberDashboard = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Welcome to the User Dashboard</h2>
        <p>Current time: {currentTime}</p>
      </div>
    </div>
  );
};

export default MemberDashboard;
