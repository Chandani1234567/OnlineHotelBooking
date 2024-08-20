import React from 'react';

const FooterSocialLink = ({ href, iconClass }) => {
  return (
    <a className="btn btn-outline-light btn-social" href={href}>
      <i className={iconClass}></i>
    </a>
  );
};

export default FooterSocialLink;
