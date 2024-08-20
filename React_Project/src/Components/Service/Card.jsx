// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
