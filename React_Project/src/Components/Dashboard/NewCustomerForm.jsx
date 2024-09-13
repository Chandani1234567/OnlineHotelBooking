import React, { useState } from 'react';
import './NewCustomerForm.css'; // Import the CSS file

const NewCustomerForm = () => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic (send data to backend or database)
    console.log(booking);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Hotel Booking Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={booking.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={booking.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={booking.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="roomType">Room Type:</label>
        <select
          id="roomType"
          name="roomType"
          value={booking.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Select Room Type</option>
          <option value="single">Junior Suite</option>
          <option value="double">Executive Suite</option>
          <option value="suite">Super Deluxe</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="checkInDate">Check-In Date:</label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={booking.checkInDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkOutDate">Check-Out Date:</label>
        <input
          type="date"
          id="checkOutDate"
          name="checkOutDate"
          value={booking.checkOutDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={booking.guests}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="specialRequests">Special Requests:</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={booking.specialRequests}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default NewCustomerForm;
