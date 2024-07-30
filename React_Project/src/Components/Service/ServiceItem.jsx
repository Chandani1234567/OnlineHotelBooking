import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon, title, description, delay, link }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <Link to={link} className="service-item rounded">
        <div className="service-icon bg-transparent border rounded p-1">
          <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
            <i className={`fa ${icon} fa-2x fontColor`}></i>
          </div>
        </div>
        <h5 className="mb-3 fontWeight BlackColor">{title}</h5>
        <p className="text-body mb-0">{description}</p>
      </Link>
    </div>
  );
};

export default ServiceItem;
