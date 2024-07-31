import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const fitness = [
    { image: 'food-3.jpg', title: 'Event', description: 'JAPONEESA SUSHI COCINA.' },
    { image: 'food-4.jpg', title: 'FOODS', description: 'JUMBO PRAWN FRY WITH JAPANESE CURRY.' },
    { image: 'food-5.jpg', title: 'FOODS', description: 'TOMI HIBACHI JAPANESE GRILL & SUSHI MIKATA JAPANESE STEAKHOUSE.' },
    { image: 'food-6.jpg', title: 'FOODS', description: 'TOMI HIBACHI JAPANESE GRILL & SUSHI.' },
    { image: 'food-7.jpg', title: 'FOODS', description: 'RAMEN NOODLES.' },
    { image: 'food-8.jpg', title: 'FOODS', description: 'TEMBURA SHRIMP RICE.' },
];

const Spa = () => {
  return (
    <div className="section">
      <div className="wrapper">
        {fitness.map((card, index) => (
          <Link to={card.link} key={index}>
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Spa;
