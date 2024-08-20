import React from 'react';
import { useParams } from 'react-router-dom';

import RoomOverview from './RoomOverview';
import RoomAmenities from './RoomAmenities';
import RoomPricing from './RoomPricing';
import RoomLocation from './RoomLocation';
import RoomContact from './RoomContact';
import './RoomDetails.css'; 

const roomData = {
  juniorSuite: {
    overview: {
      image: "/img/room-1.jpg",
      description: "The Executive Junior Suite is designed to provide guests with an elegant, comfortable, and spacious retreat. Combining luxury with practicality, this suite is ideal for both business and leisure travelers.",
      roomSize: "50 sqm",
      bedType: "King-size bed",
      view: "City skyline view"
    },
    amenities: {
      image: "/img/bath1.jpeg",
      list: [
        { title: "Wi-Fi", description: "Free high-speed internet" },
        { title: "Entertainment", description: "40\" LED TV with satellite channels" },
        { title: "Workspace", description: "Executive desk and ergonomic chair" },
        { title: "Bathroom", description: "Bathroom with Jacuzzi and rain shower" },
        { title: "Minibar", description: "Fully stocked minibar" },
        { title: "Climate Control", description: "Individually controlled air conditioning" },
        { title: "Extras", description: "Bathrobes, slippers, luxury toiletries" }
      ]
    },
    pricing: {
      perNight: "Rs.1200",
      weeklyDiscount: "10% off for stays of 7 nights or more"
    },
    location: {
      image: "/img/city1.jpeg",
      address: "Sector-1, Block-d, NSTI Noida",
      attractions: [
        "City Museum (0.5 km)",
        "Central Park (1 km)",
        "Shopping Mall (2 km)",
        "Mansa Devi Temple (3 km)"
      ]
    },
    contact: {
      phone: "+012 345 6789",
      email: "ourhotel@gmail.com"
    }
  },

  executiveSuite: {
    overview: {
      image: "/img/room-2.jpg",
      description: "The Executive Suite is designed for those who seek luxury, comfort, and convenience. It offers an expansive space with a blend of modern amenities and elegant decor, making it perfect for business travelers and leisure guests alike.",
      roomSize: "60 sqm",
      bedType: "King-size bed",
      view: "City skyline view"
    },
    amenities: {
      image: "/img/bath2.jpeg",
      list: [
        { title: "Wi-Fi", description: "Free high-speed internet" },
        { title: "Entertainment", description: "55\" LED TV with satellite channels" },
        { title: "Workspace", description: "Executive desk and ergonomic chair" },
        { title: "Bathroom", description: "Bathroom with Jacuzzi and rain shower" },
        { title: "Minibar", description: "Fully stocked minibar" },
        { title: "Climate Control", description: "Individually controlled air conditioning" },
        { title: "Extras", description: "Bathrobes, slippers, luxury toiletries" },
        { title: "Safety", description: "In-room safe"},
        { title: "Extras", description: "Bathrobes, slippers, luxury toiletries"}
      ]
    },
    pricing: {
      perNight: "Rs.1500",
      weeklyDiscount: "10% off for stays of 7 nights or more"
    },
    location: {
      image: "/img/city1.jpeg",
      address: "Sector-1, Block-d, NSTI Noida",
      attractions: [
        "City Museum (0.5 km)",
        "Central Park (1 km)",
        "Shopping Mall (2 km)",
        "Mansa Devi Temple (3 km)"
      ]
    },
    contact: {
      phone: "+012 345 6789",
      email: "ourhotel@gmail.com"
    }
  },

  superDeluxRoom: {
    overview: {
      image: "/img/room-3.jpg",
      description: "Experience unparalleled luxury and comfort in our Luxury Suite, designed to provide you with the ultimate relaxation during your stay. This suite offers spacious accommodations, stunning views, and a range of high-end amenities to ensure a memorable stay.",
      roomSize: "80 sqm",
      bedType: "King-size bed",
      view: "City skyline view"
    },
    amenities: {
      image: "/img/bath3.jpeg",
      list: [
        { title: "Wi-Fi", description: "Free high-speed internet" },
        { title: "Entertainment", description: "55\" LED TV with satellite channels" },
        { title: "Workspace", description: "Executive desk and ergonomic chair" },
        { title: "Bathroom", description: "Bathroom with Jacuzzi and rain shower" },
        { title: "Minibar", description: "Fully stocked minibar" },
        { title: "Coffee/Tea", description: "Espresso machine and kettle"},
        { title: "Climate Control", description: "Individually controlled air conditioning" },
        { title: "Extras", description: "Bathrobes, slippers, luxury toiletries" },
        { title: "Safety", description: "In-room safe"},
        { title: "Extras", description: "Bathrobes, slippers, luxury toiletries"}
      ]
    },
    pricing: {
      perNight: "Rs.2000",
      weeklyDiscount: "10% off for stays of 7 nights or more"
    },
    location: {
      image: "/img/city1.jpeg",
      address: "Sector-1, Block-d, NSTI Noida",
      attractions: [
        "City Museum (0.5 km)",
        "Central Park (1 km)",
        "Shopping Mall (2 km)",
        "Mansa Devi Temple (3 km)"
      ]
    },
    contact: {
      phone: "+012 345 6789",
      email: "ourhotel@gmail.com"
    }
  }
};

const RoomDetails = () => {
  const { roomType } = useParams();
  const room = roomData[roomType];

  if (!room) {
    return <p>Room not found!</p>;
  }

  return (
    <div className="container">
      <RoomOverview overview={room.overview} />
      <RoomAmenities amenities={room.amenities} />
      <RoomPricing pricing={room.pricing} />
      <RoomLocation location={room.location} />
      <RoomContact contact={room.contact} />
    </div>
  );
};

export default RoomDetails;
