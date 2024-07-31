import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const cardData = [
  {
    image: 'img/food-3.jpg',
    title: 'FOODS',
    description: 'JAPONEESA SUSHI COCINA.',
    link: '/details/food-3'
  },
  {
    image: 'img/food-4.jpg',
    title: 'FOODS',
    description: 'JUMBO PRAWN FRY WITH JAPANESE CURRY.',
    link: '/details/food-4'
  },
  {
    image: 'img/food-5.jpg',
    title: 'FOODS',
    description: 'TOMI HIBACHI JAPANESE GRILL & SUSHI MIKATA JAPANESE STEAKHOUSE.',
    link: '/details/food-5'
  },
  {
    image: 'img/food-6.jpg',
    title: 'FOODS',
    description: 'TOMI HIBACHI JAPANESE GRILL & SUSHI.',
    link: '/details/food-6'
  },
  {
    image: 'img/food-7.jpg',
    title: 'FOODS',
    description: 'RAMEN NOODLES.',
    link: '/details/food-7'
  },
  {
    image: 'img/food-8.jpg',
    title: 'FOODS',
    description: 'TEMPURA SHRIMP RICE.',
    link: '/details/food-8'
  }
];

const Gym = () => {
  return (
    <div className="section">
      <div className="wrapper">
        {cardData.map((card, index) => (
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

export default Gym;
