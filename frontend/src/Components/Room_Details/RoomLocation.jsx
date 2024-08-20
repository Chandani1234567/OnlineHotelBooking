import React from 'react';

const RoomLocation = ({ location }) => {
  return (
    <>
      <h2>Location</h2>
      <img src={location.image} alt="City Image" className="floting2" />
      <p><b>Hotel Address:</b></p>
      <p>{location.address}</p>
      <p><b>Nearby Attractions:</b></p>
      <ul>
        {location.attractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>
    </>
  );
};

export default RoomLocation;
