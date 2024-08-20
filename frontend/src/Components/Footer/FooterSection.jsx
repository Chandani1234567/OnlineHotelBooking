import React from 'react';

const FooterSection = ({ title, children, className }) => {
  return (
    <div className={className}>
      {title && <h6 className="section-title text-start fontColor text-uppercase mb-4">{title}</h6>}
      {children}
    </div>
  );
};

export default FooterSection;
