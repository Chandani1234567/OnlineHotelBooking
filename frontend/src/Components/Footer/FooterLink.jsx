import React from 'react';

const FooterLink = ({ href, children }) => {
  return (
    <a className="btn btn-link" href={href}>
      {children}
    </a>
  );
};

export default FooterLink;
