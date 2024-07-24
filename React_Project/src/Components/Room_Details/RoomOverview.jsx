import React from 'react';

const RoomOverview = ({ overview }) => {
  return (
    <>
      <h2>Overview</h2>
      <img src={overview.image} alt="Room Image" className="floting" />
      <p>{overview.description}</p>
      <p><b>Room Size:</b> {overview.roomSize}</p>
      <p><b>Bed Type:</b> {overview.bedType}</p>
      <p><b>View:</b> {overview.view}</p>
      <br />
    </>
  );
};

export default RoomOverview;
