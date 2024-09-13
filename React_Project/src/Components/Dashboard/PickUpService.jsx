import React, { useState, useEffect } from 'react';
import './PickUpService.css';

// Extended sample data
const sampleRequests = [
  { id: 1, guestName: 'Alice Johnson', roomNumber: '101', pickupTime: '2024-09-05T09:00:00', status: 'Pending' },
  { id: 2, guestName: 'Bob Smith', roomNumber: '102', pickupTime: '2024-09-05T10:30:00', status: 'Completed' },
  { id: 3, guestName: 'Charlie Brown', roomNumber: '103', pickupTime: '2024-09-05T12:00:00', status: 'Pending' },
  { id: 4, guestName: 'Diana Prince', roomNumber: '104', pickupTime: '2024-09-05T14:30:00', status: 'Canceled' },
  { id: 5, guestName: 'Edward Stark', roomNumber: '105', pickupTime: '2024-09-05T16:00:00', status: 'Pending' },
  { id: 6, guestName: 'Fiona Gallagher', roomNumber: '106', pickupTime: '2024-09-05T18:00:00', status: 'Completed' },
  { id: 7, guestName: 'George Michael', roomNumber: '107', pickupTime: '2024-09-05T20:00:00', status: 'Pending' },
  { id: 8, guestName: 'Hannah Montana', roomNumber: '108', pickupTime: '2024-09-05T21:30:00', status: 'Completed' },
  // Add more sample data as needed
];

const PickUpService = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState({});
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    // Fetch pickup service requests from an API or use sample data
    // Example: fetch('/api/pickup-requests').then(res => res.json()).then(data => setRequests(data));
    setRequests(sampleRequests); // Replace with API call
  }, []);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selected = requests.find(req => req.id === parseInt(e.target.value));
    setSelectedRequest(selected);
    setNewStatus(selected.status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update request status in the backend
    // Example: fetch(`/api/pickup-requests/${selectedRequest.id}`, { method: 'PUT', body: JSON.stringify({ status: newStatus }) });
    console.log(`Updated status for request ${selectedRequest.id} to ${newStatus}`);
    alert(`Pickup request status updated for request ${selectedRequest.id}`);
  };

  return (
    <div className="pickup-service-container">
      <h1>Pick Up Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="request-select">Select Request:</label>
          <select id="request-select" onChange={handleSelectChange} required>
            <option value="">Select...</option>
            {requests.map(request => (
              <option key={request.id} value={request.id}>
                Request {request.id} - {request.guestName} (Room {request.roomNumber})
              </option>
            ))}
          </select>
        </div>
        {selectedRequest && (
          <div className="form-group">
            <label htmlFor="status">New Status:</label>
            <select
              id="status"
              value={newStatus}
              onChange={handleStatusChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
        )}
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default PickUpService;
