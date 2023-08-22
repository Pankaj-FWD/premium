import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import './dashboard.css'
import swal from 'sweetalert';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Display a welcome message using swal
    swal({
      title: 'Successfully Login',
      text: 'Welcome to the Admin Dashboard!',
      icon: 'success',
    });
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Current time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Dashboard;
