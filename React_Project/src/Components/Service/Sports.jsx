import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const cardData = [
  {
    image: 'img/sport.jpeg',
    title: 'Sports & Gaming',
    description: 'Young Kids Playing Football on the Field.',
  },
  {
    image: 'img/sport1.jpeg',
    title: 'Sports & Gaming',
    description: 'Photo Of Men Playing Soccer During Daytime.',
  },
  {
    image: 'img/sport2.jpeg',
    title: 'Sports & Gaming',
    description: 'Group of Men Playing Soccer',
  },
  {
    image: 'img/sport3.jpeg',
    title: 'Sports & Gaming',
    description: 'A Group of Kids Playing on Green Grass Field.',
  },
  {
    image: 'img/sport4.jpeg',
    title: 'Sports & Gaming',
    description: 'Childrens Team Building on Green Grassland .',
  },
  {
    image: 'img/sport5.jpeg',
    title: 'Sports & Gaming',
    description: 'Childrens Team Building on Green Grassland.',
  }
];

const Sports = () => {
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

export default Sports;
