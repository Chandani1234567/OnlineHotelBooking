import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrimaryButton = ({ children, href }) => {
  return (
    <Link to={href} className="btn BackgroundColor text-white py-md-3 px-md-5 me-3 animated slideInLeft">
      {children}
    </Link>
  );
};

export default PrimaryButton;
