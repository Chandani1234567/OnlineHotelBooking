import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const apartment = [
    { image: 'img/ap.jpeg', title: 'Rooms and Apartment', description: 'A spacious room with modern amenities, featuring a king-size bed, a cozy sitting area, and a stunning city view.' },
    { image: 'img/ap1.jpeg', title: 'Rooms and Apartment', description: 'Experience opulence in this top-floor penthouse featuring high-end finishes, a private terrace, and panoramic city views.' },
    { image: 'img/ap3.jpeg', title: 'Rooms and Apartment', description: 'Elegantly furnished with contemporary décor, this room offers a queen-size bed, a work desk, and a serene garden view.' },
    { image: 'img/ap2.jpeg', title: 'Rooms and Apartment', description: 'Enjoy the benefits of modern upgrades in this newly renovated one-bedroom apartment, complete with contemporary finishes.' },
    { image: 'img/ap4.jpeg', title: 'Rooms and Apartment', description: 'A spacious apartment with a full kitchen, a living room, a dining area, and a master bedroom with a king-size bed.' },
    { image: 'img/ap5.jpeg', title: 'Rooms and Apartment', description: 'A room with a breathtaking ocean view, featuring a king-size bed, a private balcony, and modern amenities.' },
];

const Apartment = () => {
  return (
    <div className="section">
      <div className="wrapper">
        {apartment.map((card, index) => (
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

export default Apartment;
