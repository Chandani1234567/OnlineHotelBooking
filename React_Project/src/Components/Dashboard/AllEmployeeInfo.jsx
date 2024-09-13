import React, { useState, useEffect } from 'react';
import './AllEmployeeInfo.css';

// Sample data with additional fields
const sampleEmployees = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    schedule: '9 AM - 5 PM',
    joiningDate: '2022-01-15',
    status: 'Active',
    salary: '$80,000'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    schedule: '10 AM - 6 PM',
    joiningDate: '2021-11-22',
    status: 'On Leave',
    salary: '$95,000'
  },
  // Add more sample data as needed
];

const AllEmployeeInfo = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from an API or use sample data
    // Example: fetch('/api/employees').then(res => res.json()).then(data => setEmployees(data));
    setEmployees(sampleEmployees); // Replace with API call
  }, []);

  return (
    <div className="employee-container">
      <h1>All Employee Info</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Schedule</th>
            <th>Joining Date</th>
            <th>Status</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.schedule}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.status}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployeeInfo;
