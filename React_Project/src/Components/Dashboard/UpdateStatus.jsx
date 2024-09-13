import React, { useState, useEffect } from 'react';
import './UpdateStatus.css';

// Sample data
const sampleStatuses = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Inactive' },
  { id: 3, name: 'Alice Johnson', status: 'Active' }
];

const UpdateStatus = () => {
  const [statuses, setStatuses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    // Fetch status data from an API or use sample data
    // Example: fetch('/api/statuses').then(res => res.json()).then(data => setStatuses(data));
    setStatuses(sampleStatuses); // Replace with API call
  }, []);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selected = statuses.find(status => status.id === parseInt(e.target.value));
    setSelectedStatus(selected);
    setNewStatus(selected.status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update status in the backend
    // Example: fetch(`/api/statuses/${selectedStatus.id}`, { method: 'PUT', body: JSON.stringify({ status: newStatus }) });
    console.log(`Updated status for ${selectedStatus.name} to ${newStatus}`);
    alert(`Status updated for ${selectedStatus.name}`);
  };

  return (
    <div className="update-status-container">
      <h1>Update Status</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="status-select">Select Entity:</label>
          <select id="status-select" onChange={handleSelectChange} required>
            <option value="">Select...</option>
            {statuses.map(status => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        {selectedStatus && (
          <div className="form-group">
            <label htmlFor="status">New Status:</label>
            <input
              type="text"
              id="status"
              value={newStatus}
              onChange={handleStatusChange}
              required
            />
          </div>
        )}
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default UpdateStatus;
