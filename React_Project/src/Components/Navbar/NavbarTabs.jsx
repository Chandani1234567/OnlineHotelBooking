import React from "react";
import NavbarAuth from "./NavbarAuth/client/NavbarAuth";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 text-Warning text-uppercase">Hotelier</h1>
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
              Pages
            </a>
            <div className="dropdown-menu rounded-0 m-0">
              <a href="#team" className="dropdown-item">
                Our Team
              </a>
              <a href="#testimonial" className="dropdown-item">
                Testimonial
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
          <NavbarAuth />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
