import React, { useState, useEffect } from 'react';
import '../admin/dashboard.css'
import swal from 'sweetalert';
import MemberNavbar from './MemberNavbar';
import MemberSidebar from './memberSidebar';

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

  // useEffect(() => {
  //   swal({
  //     title: 'Successfully Login',
  //     text: 'Welcome to the User Dashboard!',
  //     icon: 'success',
  //   });
  // }, []);

  return (
    <>
    <MemberNavbar />
    <div className="dashboard-container">
      <MemberSidebar />
      <div className="dashboard-content">
        <h2>Welcome to the User Dashboard</h2>
        <p>Current time: {currentTime}</p>
      </div>
    </div>
    </>
  );
};

export default MemberDashboard;
