import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="m-0 text-Warning text-uppercase">Hotel</h1>
      </a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav mr-auto py-0">
          <a href="#home" className="nav-item nav-link active">Home</a>
          <a href="#about" className="nav-item nav-link">About</a>
          <a href="#service" className="nav-item nav-link">Services</a>
          <a href="#rooms" className="nav-item nav-link">Rooms</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu rounded-0 m-0">
              <a href="#team" className="dropdown-item">Our Team</a>
              <a href="#testimonial" className="dropdown-item">Testimonial</a>
            </div>
          </div>
          <a href="#contact" className="nav-item nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
