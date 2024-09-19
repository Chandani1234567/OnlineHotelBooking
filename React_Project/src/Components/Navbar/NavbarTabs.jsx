import React from "react";
import { Link } from "react-router-dom";
import NavbarAuth from "./NavbarAuth/client/NavbarAuth";
import "./Navbar.css"; // Ensure you import the CSS file

const Navbar = () => {
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
          {/* Add login/signup component if needed */}
          <NavbarAuth />
        </div>

        <Link to="/login" className="nav-item nav-link">
          <i className="fas fa-user-shield admin-icon"></i> Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
