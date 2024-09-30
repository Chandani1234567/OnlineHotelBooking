import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Dashboard.css'; // Assuming you want to keep the CSS in a separate file

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div>
      <header className="header">
        <div className="left">
          <Link to="/">Hotel Management</Link>
        </div>
        <div className="right">
          <Link to="/dashboardhome">Admin</Link>
          <Link to="#">Reception</Link>
        </div>
      </header>
      <div className="content">
        <img src="img/pic1.jpg" alt="The Taj Group Welcomes You" />
      </div>
    </div>
  );
};

export default Dashboard;
