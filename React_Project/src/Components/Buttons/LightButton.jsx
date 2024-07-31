import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const LightButton = ({ children, to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
    >
      {children}
    </Link>
  );
};

export default LightButton;
