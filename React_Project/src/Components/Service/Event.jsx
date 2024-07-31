import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const cardData = [
  {
    image: 'img/event.jpg',
    title: 'Event & Party',
    description: 'Japanese style',
  },
  {
    image: 'img/event1.jpg',
    title: 'Event & Party',
    description: 'Beautiful flowers on table in wedding day.',
  },
  {
    image: 'img/event2.jpg',
    title: 'Event & Party',
    description: 'Wedding hall interior before diner.',
  },
  {
    image: 'img/event3.jpg',
    title: 'Event & Party',
    description: 'Banquet decoration composition flowers, candles, candlesticks in hall restaurant. Luxury wedding reception. Table setting, setup. Trendy golden rich decor. Birthday, baptism, event. Details interior.',
  },
  {
    image: 'img/event4.jpg',
    title: 'Event & Party',
    description: 'Banquet and wedding cake table was set with a nice and tidy.',
  },
  {
    image: 'img/event5.jpeg',
    title: 'Event & Party',
    description: 'Group of People Gathering in Concert',
  }
];

const Event = () => {
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

export default Event;
