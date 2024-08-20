import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Header from './Components/Navbar/NavbarHeader';
import Carousel from './Components/Carousel/Carousel';
import About from './Components/About/About';
import Video from './Components/Video/Video';
import Service from './Components/Service/Service';
import Testimonials from './Components/Testimonials/Testimonials';
import TeamSection from './Components/Team/TeamSection';
import Footer from './Components/Footer/Footer';
import Rooms from './Components/Rooms/Rooms';
import Contact from './Components/Contact/Contact';
import Book_a_room from './Components/Booking/Book_a_room';
import Explore from './Components/Explore/Explore';
import Room from './Components/Room_Details/Room';

// Import styles
import 'animate.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => (
  <>
    <Carousel />
    <About />
    <Rooms />
    <Video />
    <Service />
    <Testimonials />
  </>
);

const App = () => {
 
  return (
    <Router>
      <div className="container-xxl bg-white p-0">
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-room" element={<Book_a_room />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/room/:roomType" element={<Room />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
