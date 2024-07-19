import React from 'react';

const SocialLinks = () => {
  return (
    <div className="col-lg-5 px-5 text-end">
      <div className="d-inline-flex align-items-center py-2 ">
        <a className="me-3 fontColor fontWeight" href=""><i className="fab fa-facebook-f"></i></a>
        <a className="me-3 fontColor fontWeight" href=""><i className="fab fa-twitter"></i></a>
        <a className="me-3 fontColor fontWeight" href=""><i className="fab fa-linkedin-in"></i></a>
        <a className="me-3 fontColor fontWeight" href=""><i className="fab fa-instagram"></i></a>
        <a className="me-3 fontColor fontWeight" href=""><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
}

export default SocialLinks;
