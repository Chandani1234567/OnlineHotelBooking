import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Supabase from "../Navbar/NavbarAuth/server/supabaseClient";
import Login from "../Navbar/NavbarAuth/client/Login";
import Signup from "../Navbar/NavbarAuth/client/Signup";
import PrimaryButton from "../Buttons/PrimaryButton";
import LightButton from "../Buttons/LightButton";
import WithAnimation from "../../hoc/WithAnimation";

const VideoSection = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await Supabase.auth.getSession();
      setLoggedIn(!!session);
    };
    checkUser();
  }, []);

  const closeLogin = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const openLogin = (e) => {
    e.preventDefault();
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  const handleBookNowClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    if (!loggedIn) {
      openLogin(event);
    } else {
      navigate("/book-a-room");
    }
  };

  return (
    <div className="container-xxl py-5 px-0">
      <div className="row g-0">
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5">
            <h6 className="section-title text-start text-white text-uppercase mb-3">
              Luxury Living
            </h6>
            <h1 className="text-white mb-4">Welcome Our Luxurious Hotel</h1>
            <p className="text-white mb-4">
              Where luxury meets comfort. Enjoy impeccable service, elegant
              rooms, and top-notch amenities designed for your ultimate
              relaxation. Your unforgettable stay begins here.
            </p>

            <PrimaryButton href="/rooms">Our Rooms</PrimaryButton>
            <LightButton href="/book-a-room" onClick={handleBookNowClick}>
              Book A Room
            </LightButton>
          </div>
        </div>
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="#"
              data-bs-target="#videoModal"
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
      {/* Render Login or Signup overlay based on state */}
      {showLogin && <Login closeLogin={closeLogin} toggleForm={toggleForm} />}
      {showSignup && <Signup closeLogin={closeLogin} toggleForm={toggleForm} />}
    </div>
  );
};

export default WithAnimation(VideoSection, "animate__fadeInUp");
