import React from 'react';
import ServiceItem from './ServiceItem';
import withAnimation from '../../hoc/withAnimation';

import './Service.css';

const services = [
  {
    icon: 'fa-hotel',
    title: 'Rooms & Apartment',
    description: "Experience the ultimate in comfort and luxury with our meticulously designed rooms and spacious apartments. Each space is equipped with modern amenities, plush furnishings, and breathtaking views to ensure a relaxing stay.",
    delay: '0.1s'
  },
  {
    icon: 'fa-utensils',
    title: 'Food & Restaurant',
    description: "Savor the finest culinary delights at our on-site restaurants. From gourmet dishes to local favorites, our chefs use the freshest ingredients to create memorable dining experiences. Enjoy a variety of cuisines in an elegant and welcoming atmosphere.",
    delay: '0.2s'
  },
  {
    icon: 'fa-spa',
    title: 'Spa & Fitness',
    description: "Revitalize your mind and body at our state-of-the-art spa and fitness center. Indulge in a range of rejuvenating treatments and massages, or stay active with our cutting-edge fitness equipment and classes. Your wellness journey starts here.",
    delay: '0.3s'
  },
  {
    icon: 'fa-swimmer',
    title: 'Sports & Gaming',
    description: "Stay entertained with our wide array of sports and gaming options. Whether you're looking to play tennis, swim, or enjoy indoor games, our facilities provide endless fun and excitement for guests of all ages.",
    delay: '0.4s'
  },
  {
    icon: 'fa-glass-cheers',
    title: 'Event & Party',
    description: "Host your special events and parties with us for an unforgettable experience. Our elegant venues and expert planning services cater to weddings, corporate events, and social gatherings, ensuring every detail is perfect and every moment memorable.",
    delay: '0.5s'
  },
  {
    icon: 'fa-dumbbell',
    title: 'GYM & Yoga',
    description: "Achieve your fitness goals in our fully equipped gym and serene yoga studio. Whether you're lifting weights, running on the treadmill, or finding your zen in a yoga class, we offer everything you need to stay fit and healthy during your stay.",
    delay: '0.6s'
  }
];

const Service = () => {
  return (
  
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center" data-wow-delay="0.1s">
            <h6 className="section-title text-center fontColor fontWeight  text-uppercase"> Services</h6>
            <h1 className="mb-5 fontWeight fontFamily">Explore Our <span className="fontColor fontFamily fontWeight text-uppercase">Services</span></h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
  
  );
};

export default withAnimation(Service, 'animate__fadeInUp');
