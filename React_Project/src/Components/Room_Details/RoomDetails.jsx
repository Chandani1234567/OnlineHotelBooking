import React from 'react';
import RoomOverview from './RoomOverview';
import RoomAmenities from './RoomAmenities';
import RoomPricing from './RoomPricing';
import RoomLocation from './RoomLocation';
import RoomContact from './RoomContact';
import './RoomDetails.css'; 

const RoomDetails = (props) => {
  const { room } = props;

  return (
    <div className="container">
      <RoomOverview overview={room.overview} />
      <RoomAmenities amenities={room.amenities} />
      <RoomPricing pricing={room.pricing} />
      <RoomLocation location={room.location} />
      <RoomContact contact={room.contact} />
    </div>
  );
};

export default RoomDetails;
