import React from 'react';

const ServiceItem = ({ icon, title, description, delay }) => {
  return (
    <div className={`col-lg-4 col-md-6 `} >
      <a className="service-item rounded" href="#">
        <div className="service-icon bg-transparent border rounded p-1">
          <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
            <i className={`fa ${icon} fa-2x fontColor`}></i>
          </div>
        </div>
        <h5 className="mb-3 fontWeight BlackColor">{title}</h5>
        <p className="text-body mb-0">{description}</p>
      </a>
    </div>
  );
};

export default ServiceItem;
