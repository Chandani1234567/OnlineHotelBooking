import React from 'react';
import RoomBox from './RoomBox';
import 'animate.css/animate.min.css';
import withAnimation from '../../hoc/withAnimation';


const Rooms = () => {
  const rooms = [
    {
      imgSrc: 'img/room-1.jpg',
      price: 'Rs.1000/Night',
      name: 'Junior Suite',
      stars: 5,
      features: [
        { icon: 'fa-bed', text: '1 Bed' },
        { icon: 'fa-bath', text: '1 Bath' },
        { icon: 'fa-wifi', text: 'No Wifi' },
      ],
      delay: '0.1s'
    },
    {
      imgSrc: 'img/room-2.jpg',
      price: 'Rs.1500/Night',
      name: 'Executive Suite',
      stars: 5,
      features: [
        { icon: 'fa-bed', text: '1 Bed' },
        { icon: 'fa-bath', text: '1 Bath' },
        { icon: 'fa-wifi', text: 'Wifi' },
      ],
      delay: '0.3s'
    },
    {
      imgSrc: 'img/room-3.jpg',
      price: 'Rs.2000/Night',
      name: 'Super Deluxe',
      stars: 5,
      features: [
        { icon: 'fa-bed', text: '2 Bed' },
        { icon: 'fa-bath', text: '1 Bath' },
        { icon: 'fa-wifi', text: 'Wifi' },
      ],
      delay: '0.6s'
    },
  ];

  return (
    <section id="rooms">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center " >
            <h6 className="section-title text-center text-uppercase fontColor fontWeight">Our Rooms</h6>
            <h1 className="mb-5 fontWeight">
              Explore Our <span className="fontColor fontWeight text-uppercase">Rooms</span>
            </h1>
          </div>
          <div className="row g-4">
            {rooms.map((room, index) => (
              <RoomBox key={index} {...room} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

//export default Rooms;
export default withAnimation(Rooms, 'animate__fadeInUp');
