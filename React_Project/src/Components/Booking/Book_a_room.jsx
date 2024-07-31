import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Supabase from "../Navbar/NavbarAuth/server/supabaseClient";
import Images from "../About/Images";
import BookingForm from "./BookingForm";
import "./Booking.css";
import WithAnimation from "../../hoc/WithAnimation";

const Book_a_room = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await Supabase.auth.getSession();
      if (session) {
        setLoggedIn(true);
      } else {
        navigate("/"); // Redirect to homepage if not logged in
      }
    };
    checkUser();
  }, [navigate]);

  // If not logged in, render nothing or a loading state
  if (!loggedIn) {
    return null; // Or you can render a loading spinner if you prefer
  }

  return (
    <section id="BookRoom">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title text-center fontColor fontWeight text-uppercase">
              Room Booking
            </h6>
            <h1 className="mb-5 fontWeight">
              Book A{" "}
              <span className="fontColor fontWeight text-uppercase">
                Luxury Room
              </span>
            </h1>
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

export default WithAnimation(Book_a_room, "animate__fadeInUp");
