import React from 'react';
import Images from '../About/Images';
import BookingForm from './BookingForm';
import "./Booking.css";
import withAnimation from '../../hoc/withAnimation';

const Book_a_room = () => {
  return (
    <section id="BookRoom">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center fontColor fontWeight text-uppercase">Room Booking</h6>
            <h1 className="mb-5 fontWeight">Book A <span className="fontColor fontWeight text-uppercase">Luxury Room</span></h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Images />
            </div>
            <div className="col-lg-6">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withAnimation(Book_a_room, 'animate__fadeInUp');
