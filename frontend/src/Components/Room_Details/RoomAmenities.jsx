import React from 'react';

const RoomAmenities = ({ amenities }) => {
  return (
    <>
      <h2>Amenities</h2>
      <img src={amenities.image} alt="Bathroom Image" className="floting1" />
      <ul>
        {amenities.list.map((item, index) => (
          <li key={index}><b>{item.title}:</b> {item.description}</li>
        ))}
      </ul>
    </>
  );
};

export default RoomAmenities;
