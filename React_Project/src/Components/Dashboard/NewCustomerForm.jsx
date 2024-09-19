import React, { useState } from 'react';
import axios from 'axios';
import './NewCustomerForm.css'; // Import the CSS file

const NewCustomerForm = () => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '',
    specialRequests: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start the loading state
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Updated API endpoint to /customer
      const response = await axios.post('http://localhost:5000/customer', booking);
      setSuccessMessage('Booking successful!');
      setBooking({
        name: '',
        email: '',
        phone: '',
        address: '',
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
        guests: '',
        specialRequests: ''
      });
    } catch (error) {
      setErrorMessage('There was an error submitting the form.');
      console.error('Error submitting the booking form:', error);
    } finally {
      setLoading(false); // End the loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Hotel Booking Form</h2>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

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
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={booking.address}
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
          <option value="Junior Suite">Junior Suite</option>
          <option value="Executive Suite">Executive Suite</option>
          <option value="Super Deluxe">Super Deluxe</option>
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

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default NewCustomerForm;
