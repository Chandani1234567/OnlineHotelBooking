import React from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "./NavbarAuth/client/NavbarAuth";
import "./Navbar.css"; // Ensure you import the CSS file

const Navbar = () => {
  // Function to check if user is logged in based on token existence
  const isUserLoggedIn = () => {
    return !!localStorage.getItem("authToken");
  };

  // Function to check if admin is logged in based on admin token
  const isAdminLoggedIn = () => {
    return !!localStorage.getItem("adminToken");
  };

  // Function to handle user logout
  const handleUserLogout = () => {
    localStorage.removeItem("authToken");
    // Redirect to login page after user logout
    window.location.href = "/login";
  };

  // Function to handle admin logout
  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    // Redirect to admin login page after admin logout
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 fontColor fontWeight text-uppercase">Paragon</h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav mr-auto py-0">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/services" className="nav-item nav-link">
            Services
          </Link>
          <Link to="/rooms" className="nav-item nav-link">
            Rooms
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              More
            </a>
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="/team" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-auth">
          {isUserLoggedIn() ? (
            <div className="user-logged-in">
              <p className="button" onClick={handleUserLogout}>
                Logout
              </p>
            </div>
          ) : (
            <NavbarAuth />
          )}
        </div>

        {/* Admin Section */}
        {isAdminLoggedIn() ? (
          <div className="admin-logged-in">
            <p className="button" onClick={handleAdminLogout}>
              Admin Logout
            </p>
          </div>
        ) : (
          <Link to="/login" className="nav-item nav-link">
            <i className="fas fa-user-shield admin-icon"></i> Admin
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
