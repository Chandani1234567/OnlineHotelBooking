import React from "react";
import WithAnimation from "../../hoc/WithAnimation";

import ContactInfo from "./NavbarContactInfo";
import SocialLinks from "./NavbarSocialLinks";
import Navbar from "./NavbarTabs";

import "./Navbar.css";

const Header = () => {
  return (
    <div className="container-fluid bg-dark px-0 ">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1
              className="m-0  text-uppercase fontColor fontWeight fontFamily"
              id="head1"
            >
              Paragon
            </h1>
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <ContactInfo />
            <SocialLinks />
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
