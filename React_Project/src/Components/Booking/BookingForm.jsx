import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";
import Login from "../Navbar/NavbarAuth/client/Login";
import Signup from "../Navbar/NavbarAuth/client/Signup";

const BookingForm = () => {
  const location = useLocation();
  const { roomType } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkinDate: null,
    checkoutDate: null,
    select1: "",
    select2: "",
    select3: roomType || "",
    message: "",
  });

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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

  const checkLoggedIn = () => {
    const token = localStorage.getItem("authToken");
    return token ? true : false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkLoggedIn()) {
      setShowLogin(true);
    } else {
      try {
        const response = await axios.post("http://localhost:5000/bookings", {
          Booking: formData,
        });
        console.log("Booking successful:", response.data);
        // Optionally, you can clear the form or redirect the user
      } catch (error) {
        console.error("Error booking:", error);
      }
    }
  };

  const handleLoginClose = () => setShowLogin(false);
  const handleSignupClose = () => setShowSignup(false);

  const toggleForm = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <>
      <div className="booking-form">
  <form onSubmit={handleSubmit}>
    <div className="row g-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-6">
        <DatePicker
          selected={formData.checkinDate}
          onChange={(date) => handleDateChange(date, "checkinDate")}
          className="form-control"
          id="checkin"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Check In"
        />
      </div>
      <div className="col-md-6">
        <DatePicker
          selected={formData.checkoutDate}
          onChange={(date) => handleDateChange(date, "checkoutDate")}
          className="form-control"
          id="checkout"
          dateFormat="dd/MM/yyyy"
          minDate={formData.checkinDate ? formData.checkinDate : new Date()}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Check Out"
        />
      </div>
      <div className="col-md-6">
        <select
          className="form-select"
          id="select1"
          value={formData.select1}
          onChange={handleInputChange}
        >
          <option value="">Select Adult</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="col-md-6">
        <select
          className="form-select"
          id="select2"
          value={formData.select2}
          onChange={handleInputChange}
        >
          <option value="">Select Child</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="col-12">
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
      </div>
      <div className="col-12">
        <textarea
          className="form-control"
          placeholder="Special Request"
          id="message"
          style={{ height: "100px" }}
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="col-12">
        <button
          className="btn BackgroundColor text-white w-100 py-3"
          type="submit"
        >
          Book Now
        </button>
      </div>
    </div>
  </form>
</div>

      {showLogin && (
        <Login closeLogin={handleLoginClose} toggleForm={toggleForm} />
      )}
      {showSignup && (
        <Signup
          closeLogin={handleSignupClose}
          toggleForm={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default BookingForm;
