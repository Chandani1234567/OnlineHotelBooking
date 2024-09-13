import React, { useState, useEffect } from 'react';
import './UpdateRoomStatus.css';

// Sample data
const sampleRooms = [
  { id: 1, roomNumber: '101', status: 'Available' },
  { id: 2, roomNumber: '102', status: 'Occupied' },
  { id: 3, roomNumber: '103', status: 'Under Maintenance' },
  { id: 4, roomNumber: '104', status: 'Reserved' },
  { id: 5, roomNumber: '105', status: 'Cleaning' } // Additional sample data
  // Add more sample data as needed
];

const UpdateRoomStatus = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    // Fetch room data from an API or use sample data
    // Example: fetch('/api/rooms').then(res => res.json()).then(data => setRooms(data));
    setRooms(sampleRooms); // Replace with API call
  }, []);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selected = rooms.find(room => room.id === parseInt(e.target.value));
    setSelectedRoom(selected);
    setNewStatus(selected.status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update room status in the backend
    // Example: fetch(`/api/rooms/${selectedRoom.id}`, { method: 'PUT', body: JSON.stringify({ status: newStatus }) });
    console.log(`Updated status for room ${selectedRoom.roomNumber} to ${newStatus}`);
    alert(`Room status updated for room ${selectedRoom.roomNumber}`);
  };

  return (
    <div className="update-room-status-container">
      <h1>Update Room Status</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="room-select">Select Room:</label>
          <select id="room-select" onChange={handleSelectChange} required>
            <option value="">Select...</option>
            {rooms.map(room => (
              <option key={room.id} value={room.id}>
                Room {room.roomNumber}
              </option>
            ))}
          </select>
        </div>
        {selectedRoom && (
          <div className="form-group">
            <label htmlFor="status">New Status:</label>
            <select
              id="status"
              value={newStatus}
              onChange={handleStatusChange}
              required
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Reserved">Reserved</option>
              <option value="Cleaning">Cleaning</option> {/* Additional status */}
              <option value="Out of Service">Out of Service</option> {/* Additional status */}
            </select>
          </div>
        )}
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default UpdateRoomStatus;
