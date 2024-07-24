import React from "react";
import NavbarAuth from "./NavbarAuth/client/NavbarAuth";
import { Link } from "react-router-dom";

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
          <Link to="/" className="nav-item nav-link ">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/services" className="nav-item nav-link">Services</Link>
          <Link to="/rooms" className="nav-item nav-link">Rooms</Link>
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
              <Link to="/book-a-room" className="dropdown-item">
                Book A Room
              </Link>
            </div>
          </div>
          <a href="/contact" className="nav-item nav-link">
            Contact
          </a>
         
        </div>
      </div>
       <NavbarAuth />
    </nav>
  );
};

export default Navbar;
