import React, { useState } from 'react';
import './RoomsPage.css'; // Import the CSS file

const roomsData = [
  // Junior Suite rooms
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    roomType: 'Junior Suite',
    price: 1200,
    availability: index % 2 === 0, // Alternating availability for demonstration
    description: 'Experience unparalleled luxury and comfort in our Junior Suite room. Enjoy spacious accommodations, modern amenities. Your private sanctuary awaits for a truly memorable stay.',
  })),
  // Executive Suite rooms
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 21,
    roomType: 'Executive Suite',
    price: 1500,
    availability: index % 2 === 0, // Alternating availability for demonstration
    description: 'Elevate your stay in our Executive Suite. Enjoy spacious elegance, modern amenities, and personalized service. Experience luxury and comfort like never before. Your refined retreat awaits.',
  })),
  // Super Deluxe rooms
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 41,
    roomType: 'Super Deluxe',
    price: 2000,
    availability: index % 2 === 0, // Alternating availability for demonstration
    description: 'Unwind in style in our Super Deluxe room, featuring elegant decor, modern amenities, and personalized service. Experience ultimate comfort and relaxation for a truly memorable stay.',
  })),
];

const groupRoomsByType = (rooms) => {
  return rooms.reduce((acc, room) => {
    const roomType = room.roomType;
    if (!acc[roomType]) {
      acc[roomType] = [];
    }
    acc[roomType].push(room);
    return acc;
  }, {});
};

const RoomsPage = () => {
  const [rooms] = useState(roomsData);
  const groupedRooms = groupRoomsByType(rooms);

  return (
    <div className="rooms-page">
      <h2>Rooms Management</h2>
      <div className="rooms-list">
        {Object.entries(groupedRooms).map(([roomType, roomsList]) => (
          <div key={roomType} className="room-type-section">
            <h3>{roomType}</h3>
            <hr className="divider" />
            <div className="room-boxes">
              {roomsList.map((room) => (
                <div
                  key={room.id}
                  className={`room-box ${room.availability ? 'available' : 'unavailable'}`}
                >
                  <p className="room-number">Room {room.id}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
