
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrimaryButton = ({ children, href }) => {
  return (
    <a href={href} className="btn BackgroundColor text-white py-md-3 px-md-5 me-3 animated slideInLeft">
      {children}
    </a>
  );
};

export default PrimaryButton;
