import React from 'react';
import RoomBox from './RoomBox';

const rooms = [
  {
    imgSrc: 'img/room-1.jpg',
    price: 'Rs.1200/Night',
    name: 'Junior Suite',
    stars: 5,
    features: [
      { icon: 'fa-bed', text: '1 Bed' },
      { icon: 'fa-bath', text: '1 Bath' },
      { icon: 'fa-wifi', text: ' No Wifi' }
    ],
    delay: '0.1s',
    roomType: 'juniorSuite',
    description: "Experience unparalleled luxury and comfort in our Junior Suite room. Enjoy spacious accommodations, modern amenities. Your private sanctuary awaits for a truly memorable stay."
  },
  {
    imgSrc: 'img/room-2.jpg',
    price: 'Rs.1500/Night',
    name: 'Executive Suite',
    stars: 5,
    features: [
      { icon: 'fa-bed', text: '2 Bed' },
      { icon: 'fa-bath', text: '1 Bath' },
      { icon: 'fa-wifi', text: 'Wifi' }
    ],
    delay: '0.3s',
    roomType: 'executiveSuite',
    description: "Elevate your stay in our Executive Suite. Enjoy spacious elegance, modern amenities, and personalized service. Experience luxury and comfort like never before. Your refined retreat awaits."
  },
  {
    imgSrc: 'img/room-3.jpg',
    price: 'Rs.2000/Night',
    name: 'Super Deluxe',
    stars: 5,
    features: [
      { icon: 'fa-bed', text: '3 Bed' },
      { icon: 'fa-bath', text: '3 Bath' },
      { icon: 'fa-wifi', text: 'Wifi' }
    ],
    delay: '0.6s',
    roomType: 'superDeluxRoom',
    description: "Unwind in style in our Super Deluxe room, featuring elegant decor, modern amenities, and personalized service. Experience ultimate comfort and relaxation for a truly memorable stay."
  }
];

const RoomList = () => {
  return (
    <section id="rooms">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-uppercase fontColor fontWeight">Our Rooms</h6>
            <h1 className="mb-5">Explore Our <span className="fontColor fontWeight text-uppercase">Rooms</span></h1>
          </div>
          <div className="row g-4">
            {rooms.map((room, index) => (
              <RoomBox
                key={index}
                imgSrc={room.imgSrc}
                price={room.price}
                name={room.name}
                stars={room.stars}
                features={room.features}
                delay={room.delay}
                roomType={room.roomType}
                description={room.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomList;
