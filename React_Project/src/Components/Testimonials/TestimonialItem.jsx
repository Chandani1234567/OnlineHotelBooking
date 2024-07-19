import React from 'react';

const TestimonialItem = ({ quote, imgSrc, name, profession }) => {
  return (
    <div className="testimonial-item position-relative bg-white rounded overflow-hidden p-4"> {/* Added p-4 class for padding */}
      <p>{quote}</p>
      <div className="d-flex align-items-center mt-3"> {/* Added mt-3 for spacing */}
        <img className="img-fluid flex-shrink-0 rounded" src={imgSrc} alt={name} style={{ width: '45px', height: '45px' }} />
        <div className="ps-3">
          <h6 className="fw-bold mb-1">{name}</h6>
          <small>{profession}</small>
        </div>
      </div>
      <i className="fa fa-quote-right fa-3x fontColor position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    </div>
  );
};

export default TestimonialItem;
