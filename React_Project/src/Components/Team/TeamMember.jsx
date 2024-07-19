import React from 'react';

const TeamMember = ({ imgSrc, name, designation, delay, linkedin, github, instagramLink }) => {
  return (
    <div className={`col-lg-3 col-md-6`} style={{ animationDelay: delay }}>
      <div className="rounded shadow overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={imgSrc} alt={name} />
          <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
            <a className="btn btn-square BackgroundColor mx-1" href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="btn btn-square BackgroundColor mx-1" href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a className="btn btn-square BackgroundColor mx-1" href={instagramLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-center p-4 mt-3">
          <h5 className="fw-bold mb-0">{name}</h5>
          <small>{designation}</small>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
