import React from 'react';

const ContactInfo = ({ type, email }) => (
    <div className="col-md-4">
        <h6 className="section-title text-start fontColor text-uppercase">{type}</h6>
        <p><i className="fa fa-envelope-open fontColor me-2"></i>{email}</p>
    </div>
);

export default ContactInfo;
