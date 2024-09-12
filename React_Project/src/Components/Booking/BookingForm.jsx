import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";
import axios from "axios";

const BookingForm = () => {
  const location = useLocation();
  const { roomType } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // New field
    idProofNumber: "", // New field
    idProofType: "", // New field
    checkinDate: null,
    checkoutDate: null,
    select1: "",
    select2: "",
    select3: roomType || "",
    message: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone, // New field
      idProofNumber: formData.idProofNumber, // New field
      idProofType: formData.idProofType, // New field
      checkinDate: formData.checkinDate,
      checkoutDate: formData.checkoutDate,
      adults: parseInt(formData.select1),
      children: parseInt(formData.select2) || 0,
      roomType: formData.select3,
      message: formData.message,
    };

    console.log(bookingData);

    try {
      const response = await axios.post(
        "http://localhost:5000/bookings",
        bookingData
      );

      if (response.status === 201) {
        alert("Booking successful!");

        // Reset the form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "", // Reset phone
          idProofNumber: "", // Reset ID proof number
          idProofType: "", // Reset ID proof type
          checkinDate: "",
          checkoutDate: "",
          select1: "",
          select2: "",
          select3: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Error submitting booking:", err);

      const errorMessage =
        err.response?.data?.message || "An error occurred. Please try again.";
      alert(`An error occurred: ${errorMessage}`);
    }
  };

  return (
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
            <select
              className="form-select"
              id="idProofType"
              value={formData.idProofType}
              onChange={handleInputChange}
            >
              <option value="">Select ID Proof Type</option>
              <option value="Aadhar Card">Aadhar Card</option>
              <option value="PAN Card">PAN Card</option>
            </select>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="idProofNumber"
              placeholder="ID Proof Number"
              value={formData.idProofNumber}
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
          <div className="col-md-6">
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
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
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
  );
};

export default BookingForm;
