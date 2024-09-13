import React, { useState, useEffect } from 'react';
import './ManagerInfo.css';

// Sample data
const sampleManagers = [
  {
    name: 'Alice Johnson',
    contact: 'alice.johnson@example.com',
    department: 'Housekeeping',
    role: 'Head Manager',
    phoneNumber: '+1 (123) 456-7890',
    shiftTimings: '8 AM - 4 PM'
  },
  {
    name: 'Bob Brown',
    contact: 'bob.brown@example.com',
    department: 'Front Desk',
    role: 'Assistant Manager',
    phoneNumber: '+1 (987) 654-3210',
    shiftTimings: '2 PM - 10 PM'
  },
  {
    name: 'Carol White',
    contact: 'carol.white@example.com',
    department: 'Food & Beverage',
    role: 'Operations Manager',
    phoneNumber: '+1 (555) 123-4567',
    shiftTimings: '10 AM - 6 PM'
  }
  // Add more sample data as needed
];

const ManagerInfo = () => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    // Fetch manager data from an API or use sample data
    // Example: fetch('/api/managers').then(res => res.json()).then(data => setManagers(data));
    setManagers(sampleManagers); // Replace with API call
  }, []);

  return (
    <div className="manager-container">
      <h1>Manager Information</h1>
      <div className="manager-info">
        {managers.map((manager, index) => (
          <div className="manager-card" key={index}>
            <h2>{manager.name}</h2>
            <p><strong>Contact:</strong> {manager.contact}</p>
            <p><strong>Department:</strong> {manager.department}</p>
            <p><strong>Role:</strong> {manager.role}</p>
            <p><strong>Phone Number:</strong> {manager.phoneNumber}</p>
            <p><strong>Shift Timings:</strong> {manager.shiftTimings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerInfo;
