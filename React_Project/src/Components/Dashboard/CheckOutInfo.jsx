import React, { useState, useEffect } from 'react';
import './CheckOutInfo.css';

// Sample data
const sampleCheckOuts = [
  {
    guestName: 'Alice Johnson',
    bookingID: 'BK123456',
    roomNumber: '101',
    checkOutDateTime: '2024-09-05 11:00 AM',
    totalBill: '$250.00',
    paymentMethod: 'Credit Card'
  },
  {
    guestName: 'Bob Brown',
    bookingID: 'BK789012',
    roomNumber: '202',
    checkOutDateTime: '2024-09-05 12:30 PM',
    totalBill: '$180.00',
    paymentMethod: 'Cash'
  },
  // Add more sample data as needed
];

const CheckOutInfo = () => {
  const [checkOuts, setCheckOuts] = useState([]);

  useEffect(() => {
    // Fetch check-out data from an API or use sample data
    // Example: fetch('/api/checkouts').then(res => res.json()).then(data => setCheckOuts(data));
    setCheckOuts(sampleCheckOuts); // Replace with API call
  }, []);

  return (
    <div className="checkout-container">
      <h1>Check-Out Information</h1>
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Booking ID</th>
            <th>Room Number</th>
            <th>Check-Out Date & Time</th>
            <th>Total Bill</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {checkOuts.map((checkOut, index) => (
            <tr key={index}>
              <td>{checkOut.guestName}</td>
              <td>{checkOut.bookingID}</td>
              <td>{checkOut.roomNumber}</td>
              <td>{checkOut.checkOutDateTime}</td>
              <td>{checkOut.totalBill}</td>
              <td>{checkOut.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckOutInfo;
