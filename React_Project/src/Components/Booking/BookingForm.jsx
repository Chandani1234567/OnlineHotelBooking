// BookingForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);

  const handleCheckinChange = (date) => {
    setCheckinDate(date);
  };

  const handleCheckoutChange = (date) => {
    setCheckoutDate(date);
  };

  return (
    <div className="booking-form">
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <DatePicker
                selected={checkinDate}
                onChange={handleCheckinChange}
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
                selected={checkoutDate}
                onChange={handleCheckoutChange}
                className="form-control"
                id="checkout"
               
                dateFormat="dd/MM/yyyy"
                minDate={checkinDate ? checkinDate : new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <label htmlFor="checkout">Check Out</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <select className="form-select" id="select1">
                <option value="1">Adult 1</option>
                <option value="2">Adult 2</option>
                <option value="3">Adult 3</option>
              </select>
              <label htmlFor="select1">Select Adult</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <select className="form-select" id="select2">
                <option value="1">Child 1</option>
                <option value="2">Child 2</option>
                <option value="3">Child 3</option>
              </select>
              <label htmlFor="select2">Select Child</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <select className="form-select" id="select3">
                <option value="1">Room 1</option>
                <option value="2">Room 2</option>
                <option value="3">Room 3</option>
              </select>
              <label htmlFor="select3">Select A Room</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
              <label htmlFor="message">Special Request</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn BackgroundColor text-white w-100 py-3" type="submit">Book Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
