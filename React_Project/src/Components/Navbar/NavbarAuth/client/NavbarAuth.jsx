import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Supabase from "../server/supabaseClient"; // Adjust path if needed
import "./NavbarAuth.css";

const NavbarAuth = () => {
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

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleForm = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  const handleLogout = async () => {
    await Supabase.auth.signOut();
    setLoggedIn(false);
    window.location.reload(); // Reload the page after logout
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
