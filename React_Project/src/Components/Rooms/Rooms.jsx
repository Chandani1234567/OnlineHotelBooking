import React from 'react';
import RoomBox from './RoomBox';
import './RoomBox.css';

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
    description: "Experience unparalleled luxury and comfort in our Junior Suite room. Enjoy spacious accommodations, modern amenities. Your private sanctuary awaits for a truly memorable stay.",
    amenities: [
      { title: 'Wi-Fi', detail: 'No Wifi' },
      { title: 'Entertainment', detail: '40" LED TV with satellite channels' },
      { title: 'Workspace', detail: 'Executive desk and ergonomic chair' },
      { title: 'Bathroom', detail: 'Bathroom with Jacuzzi and rain shower' },
      { title: 'Minibar', detail: 'Fully stocked minibar' },
      { title: 'Climate Control', detail: 'Individually controlled air conditioning' },
      { title: 'Extras', detail: 'Bathrobes, slippers, luxury toiletries' }
    ],
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
    description: "Elevate your stay in our Executive Suite. Enjoy spacious elegance, modern amenities, and personalized service. Experience luxury and comfort like never before. Your refined retreat awaits.",
    amenities: [
      { title: 'Wi-Fi', detail: 'Free high-speed internet' },
      { title: 'Entertainment', detail: '55" LED TV with satellite channels' },
      { title: 'Workspace', detail: 'Executive desk and ergonomic chair' },
      { title: 'Bathroom', detail: 'Bathroom with Jacuzzi and rain shower' },
      { title: 'Minibar', detail: 'Fully stocked minibar' },
      { title: 'Climate Control', detail: 'Individually controlled air conditioning' },
      { title: 'Safety', detail: 'In-room safe' },
      { title: 'Extras', detail: 'Bathrobes, slippers, luxury toiletries' }
    ],
    
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
    description: "Unwind in style in our Super Deluxe room, featuring elegant decor, modern amenities, and personalized service. Experience ultimate comfort and relaxation for a truly memorable stay.",
    amenities: [
      { title: 'Wi-Fi', detail: 'Free high-speed internet' },
      { title: 'Entertainment', detail: '55" LED TV with satellite channels' },
      { title: 'Workspace', detail: 'Executive desk and ergonomic chair' },
      { title: 'Bathroom', detail: 'Bathroom with Jacuzzi and rain shower' },
      { title: 'Minibar', detail: 'Fully stocked minibar' },
      { title: 'Coffee/Tea', detail: 'Espresso machine and kettle' },
      { title: 'Climate Control', detail: 'Individually controlled air conditioning' },
      { title: 'Safety', detail: 'In-room safe' },
      { title: 'Extras', detail: 'Bathrobes, slippers, luxury toiletries' }
    ],
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
          <div className="row g-4 scrollable-rooms">
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
                amenities={room.amenities}
                imgAmenity={room.imgAmenity}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomList;