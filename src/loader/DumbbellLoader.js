import React from 'react';
import './DumbbellLoader.css'; // Import the CSS file for styling
import img from '../images/dlogo.gif'

const DumbbellLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="dumbbell-container">
        <img className="dumbbell" src={img} alt="Dumbbell Loader" />
      </div>
    </div>
  );
};

export default DumbbellLoader;
