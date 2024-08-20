import React from 'react';
import 'animate.css/animate.min.css';


const Images = () => (
  <div className="row g-3">
    <div className="col-6 text-end">
      <img
        className="img-fluid rounded w-75 animate__animated animate__zoomIn animate__delay-2s"
        data-wow-delay="0.5s"
        src="img/about-1.jpg"
        alt="about-1"
        style={{ marginTop: '25%' }}
      />
    </div>
    <div className="col-6 text-start">
      <img
        className="img-fluid rounded w-100 animate__animated animate__zoomIn animate__delay-2s"
        src="img/about-2.jpg"
        alt="about-2"
      />
    </div>
    <div className="col-6 text-end">
      <img
        className="img-fluid rounded w-50 animate__animated animate__zoomIn animate__delay-2s"
        src="img/about-3.jpg"
        alt="about-3"
      />
    </div>
    <div className="col-6 text-start">
      <img
        className="img-fluid rounded w-75 animate__animated animate__zoomIn animate__delay-2s"
        src="img/about-4.jpg"
        alt="about-4"
      />
    </div>
  </div>
);

export default Images;
