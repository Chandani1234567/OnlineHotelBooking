import React from 'react';
import ServiceItem from './ServiceItem';
import withAnimation from '../../hoc/withAnimation';
import './Service.css';

const services = [
  {
    icon: 'fa-hotel',
    title: 'Rooms & Apartment',
    description: "Experience comfort and luxury in our modern rooms and spacious apartments with breathtaking views.",
    delay: '0.1s',
    link: '/apartment'
  },
  {
    icon: 'fa-utensils',
    title: 'Food & Restaurant',
    description: "Savor gourmet dishes and local favorites at our on-site restaurants, crafted with the freshest ingredients.",
    delay: '0.2s',
    link: '/restaurant'
  },
  {
    icon: 'fa-spa',
    title: 'Spa & Fitness',
    description: "Revitalize at our spa with rejuvenating treatments and stay active with cutting-edge fitness equipment and classes.",
    delay: '0.3s',
    link: '/spa'
  },
  {
    icon: 'fa-swimmer',
    title: 'Sports & Gaming',
    description: "Enjoy endless fun with our sports and gaming options, including tennis, swimming, and indoor games for all ages.",
    delay: '0.4s',
    link: '/sports'
  },
  {
    icon: 'fa-glass-cheers',
    title: 'Event & Party',
    description: "Host unforgettable events with our elegant venues and expert planning for perfect weddings and memorable moments.",
    delay: '0.5s',
    link: '/event'
  },
  {
    icon: 'fa-dumbbell',
    title: 'GYM & Yoga',
    description: "Stay fit with our fully equipped gym and serene yoga studio, offering everything you need for a healthy stay.",
    delay: '0.6s',
    link: '/gym'
  },
];

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center" data-wow-delay="0.1s">
          <h6 className="section-title text-center fontColor fontWeight text-uppercase"> Services</h6>
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
