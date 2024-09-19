import React, { useState } from 'react';
import './DashboardHome.css'; // Import the CSS file
import NewCustomerForm from './NewCustomerForm'; 
import RoomsPage from './RoomsPage';
import AllEmployeeInfo from './AllEmployeeInfo';
import CheckOutInfo from './CheckOutInfo';
import DepartmentInfo from './DepartmentInfo';
import ManagerInfo from './ManagerInfo';
import UpdateStatus from './UpdateStatus';
import UpdateRoomStatus from './UpdateRoomStatus';
import PickUpService from './PickUpService';
import BookingInfo from './BookingInfo'; // Adjust path if necessary

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
          <li><a href="#" onClick={() => handleNavigation('bookinginfo')}>Booking Info</a></li>
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
        {activeSection === 'newCustomer' && <NewCustomerForm />}
        {activeSection === 'rooms' && <RoomsPage />}
        {activeSection === 'department' && <DepartmentInfo />}
        {activeSection === 'employeeInfo' && <AllEmployeeInfo />}
        {activeSection === 'customerInfo' && <div>Customer Info Content</div>}
        {activeSection === 'managerInfo' && <ManagerInfo />}
        {activeSection === 'checkOut' && <CheckOutInfo />}
        {activeSection === 'updateStatus' && <UpdateStatus />}
        {activeSection === 'updateRoomStatus' && <UpdateRoomStatus />}
        {activeSection === 'pickupService' && <PickUpService />}
        {activeSection === 'searchRoom' && <div>Search Room Content</div>}
        {activeSection === 'bookinginfo' && <BookingInfo />}
        {activeSection === 'logout' && <div>Logging out...</div>}
      </main>
    </div>
  );
};

export default DashboardHome;
