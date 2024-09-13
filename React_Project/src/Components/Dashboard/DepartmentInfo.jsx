import React, { useState, useEffect } from 'react';
import './DepartmentInfo.css';

// Sample data with an additional department
const sampleDepartments = [
  {
    name: 'Housekeeping',
    head: 'Sarah Lee',
    headContact: 'sarah.lee@example.com',
    numberOfEmployees: 15,
    role: 'Responsible for maintaining cleanliness and hygiene of guest rooms and common areas.',
    shiftTimings: '8 AM - 4 PM / 4 PM - 12 AM'
  },
  {
    name: 'Front Desk',
    head: 'James Smith',
    headContact: 'james.smith@example.com',
    numberOfEmployees: 10,
    role: 'Handles guest check-in and check-out, reservations, and provides customer service.',
    shiftTimings: '24 Hours'
  },
  {
    name: 'Food & Beverage',
    head: 'Emily Johnson',
    headContact: 'emily.johnson@example.com',
    numberOfEmployees: 20,
    role: 'Manages food service and dining operations, including restaurant and room service.',
    shiftTimings: '6 AM - 2 PM / 2 PM - 10 PM'
  }
  // Add more sample data as needed
];

const DepartmentInfo = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch department data from an API or use sample data
    // Example: fetch('/api/departments').then(res => res.json()).then(data => setDepartments(data));
    setDepartments(sampleDepartments); // Replace with API call
  }, []);

  return (
    <div className="department-container">
      <h1>Department Information</h1>
      <div className="department-info">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <h2>{dept.name}</h2>
            <p><strong>Head:</strong> {dept.head} ({dept.headContact})</p>
            <p><strong>Number of Employees:</strong> {dept.numberOfEmployees}</p>
            <p><strong>Role:</strong> {dept.role}</p>
            <p><strong>Shift Timings:</strong> {dept.shiftTimings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentInfo;
