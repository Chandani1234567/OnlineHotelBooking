import React, { useState, useEffect } from "react";
import Supabase from "../Navbar/NavbarAuth/server/supabaseClient";
import Login from "../Navbar/NavbarAuth/client/Login";
import Signup from "../Navbar/NavbarAuth/client/Signup";
import PrimaryButton from "../Buttons/PrimaryButton";
import LightButton from "../Buttons/LightButton";
import WithAnimation from "../../hoc/WithAnimation";
import "./Carousel.css";

const Carousel = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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

  const handleBookClick = (e) => {
    if (!loggedIn) {
      openLogin(e);
    } else {
      window.location.replace("/book-a-room");
    }
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3">
                  Luxury Living
                </h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown fontWeight">
                  Discover A Brand Luxurious Hotel
                </h1>
                <PrimaryButton to="/rooms" className="animated flipOutX">
                  Our Rooms
                </PrimaryButton>
                <LightButton href="/book-a-room" onClick={handleBookClick}>
                  Book A Room
                </LightButton>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                  Luxury Living
                </h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown fontWeight">
                  Discover A Brand Luxurious Hotel
                </h1>
                <PrimaryButton to="/rooms" className="animated flipOutX">
                  Our Rooms
                </PrimaryButton>
                <LightButton href="/book-a-room" onClick={handleBookClick}>
                  Book A Room
                </LightButton>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {showLogin && <Login closeLogin={closeLogin} toggleForm={toggleForm} />}
      {showSignup && <Signup closeLogin={closeLogin} toggleForm={toggleForm} />}
    </div>
  );
};

export default WithAnimation(Carousel, "animate__slideInDown");
