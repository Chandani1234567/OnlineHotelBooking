import React from 'react';

const ContactInfo = () => {
  return (
    <div className="col-lg-7 px-5 text-start">
      <div className="h-100 d-inline-flex align-items-center py-2 me-4">
        <i className="fa fa-envelope fontColor fontWeight me-2"></i>
        <p className="mb-0">info@example.com</p>
      </div>
      <div className="h-100 d-inline-flex align-items-center py-2">
        <i className="fa fa-phone-alt fontColor fontWeight me-2"></i>
        <p className="mb-0">+012 345 6789</p>
      </div>
    </div>
  );
}

export default ContactInfo;
