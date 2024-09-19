import React from 'react';
import './Dashboard.css'; // Assuming you want to keep the CSS in a separate file

const Dashboard = () => {
  return (
    <div>
      <header className="header">
        <div className="left">
          <a href="/">Hotel Management</a>
        </div>
        <div className="right">
        <a href="/dashboardhome">Admin</a>
          <a href="#">Reception</a>
        </div>
      </header>
      <div className="content">
        <h1></h1>
        <img src="img/pic1.jpg" alt="The Taj Group Welcomes You" />
      </div>
    </div>
  );
};

export default Dashboard;
