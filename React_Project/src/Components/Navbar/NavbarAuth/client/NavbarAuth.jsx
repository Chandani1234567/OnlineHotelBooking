import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";
import "./NavbarAuth.css";

const NavbarAuth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Check user authentication status on component mount and whenever the token changes
  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem("authToken");
      setLoggedIn(!!token);
    };
    checkUser();
  }, []); // Empty dependency array means this runs once on component mount

  const closeLogin = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  const handleLogout = async () => {
    try {
      // Make sure the URL is correct and matches your server configuration
      await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true, // Include credentials if needed
        }
      );
      localStorage.removeItem("authToken");
      setLoggedIn(false);
      window.location.reload(); // Reload the page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <button
        className="LoginButton"
        id="form-open"
        onClick={loggedIn ? handleLogout : openLogin}
      >
        <i className="fas fa-user">{loggedIn ? " LOGOUT" : " LOGIN"}</i>
      </button>

      {showLogin && <Login closeLogin={closeLogin} toggleForm={toggleForm} />}
      {showSignup && <Signup closeLogin={closeLogin} toggleForm={toggleForm} />}
    </>
  );
};

export default NavbarAuth;
