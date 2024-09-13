import React, { useState } from 'react';
import './DashboardHome.css';
import NewCustomerForm from './NewCustomerForm'; // Import the new form component
import RoomsPage from './RoomsPage';
import AllEmployeeInfo from './AllEmployeeInfo';
import CheckOutInfo from './CheckOutInfo';
import DepartmentInfo from './DepartmentInfo';
import ManagerInfo from './ManagerInfo';
import UpdateStatus from './UpdateStatus';
import UpdateRoomStatus from './UpdateRoomStatus';
import PickUpService from './PickUpService';

const DashboardHome = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h1>Hotel Booker's</h1>
        <ul>
          <li><a href="#" onClick={() => handleNavigation('newCustomer')}>New customer form</a></li>
          <li><a href="#" onClick={() => handleNavigation('rooms')}>Rooms</a></li>
          <li><a href="#" onClick={() => handleNavigation('department')}>Department</a></li>
          <li><a href="#" onClick={() => handleNavigation('employeeInfo')}>All Employee Info</a></li>
          <li><a href="#" onClick={() => handleNavigation('customerInfo')}>Customer info</a></li>
          <li><a href="#" onClick={() => handleNavigation('managerInfo')}>Manager info</a></li>
          <li><a href="#" onClick={() => handleNavigation('checkOut')}>Check out</a></li>
          <li><a href="#" onClick={() => handleNavigation('updateStatus')}>Update status</a></li>
          <li><a href="#" onClick={() => handleNavigation('updateRoomStatus')}>Update Room Status</a></li>
          <li><a href="#" onClick={() => handleNavigation('pickupService')}>Pick up service</a></li>
          <li><a href="#" onClick={() => handleNavigation('searchRoom')}>Search Room</a></li>
          <li><a href="#" onClick={() => handleNavigation('logout')}>Logout</a></li>
        </ul>
      </div>
      <main className="dashboard-main-content">
        {activeSection === 'welcome' && (
          <>
            <h2>Welcome to Hotel Booker's Dashboard</h2>
            <p>Select an option from the sidebar to view more details.</p>
          </>
        )}
        {activeSection === 'newCustomer' && <NewCustomerForm />} {/* Render the NewCustomerForm here */}
        {activeSection === 'rooms' && <RoomsPage />}
        {activeSection === 'department' && <DepartmentInfo/>}
        {activeSection === 'employeeInfo' && <AllEmployeeInfo />}
        {activeSection === 'customerInfo' && <CheckOutInfo />}
        {activeSection === 'managerInfo' && <ManagerInfo />}
        {activeSection === 'checkOut' && <CheckOutInfo />}
        {activeSection === 'updateStatus' && <UpdateStatus />}
        {activeSection === 'updateRoomStatus' && <UpdateRoomStatus />}
        {activeSection === 'pickupService' && <PickUpService />}
        {activeSection === 'searchRoom' && <div>Search Room Content</div>}
        {activeSection === 'logout' && <div>Logout Content</div>}
      </main>
    </div>
  );
};

export default DashboardHome;
