import React from 'react';

const RoomContact = ({ contact }) => {
  return (
    <>
      <h2>Contact</h2>
      <p><b>Phone:</b> {contact.phone}</p>
      <p><b>Email:</b> {contact.email}</p>
    </>
  );
};

export default RoomContact;
