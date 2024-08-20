import React from 'react';

const RoomPricing = ({ pricing }) => {
  return (
    <>
      <h2>Pricing</h2>
      <p><b>Per Night:</b> {pricing.perNight}</p>
      <p><b>Weekly Discount:</b> {pricing.weeklyDiscount}</p>
    </>
  );
};

export default RoomPricing;
