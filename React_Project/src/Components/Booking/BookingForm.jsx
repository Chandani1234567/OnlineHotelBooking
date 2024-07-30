import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';

const BookingForm = () => {
  const location = useLocation();
  const { roomType } = location.state || {}; // Get the room type from navigation state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkinDate: null,
    checkoutDate: null,
    select1: '',
    select2: '',
    select3: roomType || '', // Set default room type if provided
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <DatePicker
                selected={formData.checkinDate}
                onChange={(date) => handleDateChange(date, 'checkinDate')}
                className="form-control"
                id="checkin"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <label htmlFor="checkin">Check In</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <DatePicker
                selected={formData.checkoutDate}
                onChange={(date) => handleDateChange(date, 'checkoutDate')}
                className="form-control"
                id="checkout"
                dateFormat="dd/MM/yyyy"
                minDate={formData.checkinDate ? formData.checkinDate : new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <label htmlFor="checkout">Check Out</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <select
                className="form-select"
                id="select1"
                value={formData.select1}
                onChange={handleInputChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label htmlFor="select1">Select Adult</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <select
                className="form-select"
                id="select2"
                value={formData.select2}
                onChange={handleInputChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label htmlFor="select2">Select Child</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <select
                className="form-select"
                id="select3"
                value={formData.select3}
                onChange={handleInputChange}
              >
                <option value="juniorSuite">Junior Suite</option>
                <option value="executiveSuite">Executive Suite</option>
                <option value="superDeluxRoom">Super Deluxe</option>
              </select>
              <label htmlFor="select3">Select A Room</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Special Request"
                id="message"
                style={{ height: '100px' }}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="message">Special Request</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn BackgroundColor text-white w-100 py-3" type="submit">
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
