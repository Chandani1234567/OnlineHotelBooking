import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";
import "./NavbarAuth.css";

const NavbarAuth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem("authToken");
      setLoggedIn(!!token);
    };
    checkUser();
  }, []);

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
      await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("authToken");
      setLoggedIn(false);
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <a
        id="form-open"
        onClick={loggedIn ? handleLogout : openLogin}
        className="auth-button"
      >
        <FontAwesomeIcon icon={loggedIn ? faSignOutAlt : faUser} />
        {loggedIn ? "LOGOUT" : "User"}
      </a>

      {showLogin && <Login closeLogin={closeLogin} toggleForm={toggleForm} />}
      {showSignup && <Signup closeLogin={closeLogin} toggleForm={toggleForm} />}
    </>
  );
};

export default NavbarAuth;
