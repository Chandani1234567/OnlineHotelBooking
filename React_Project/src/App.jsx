
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Header from './Components/Navbar/NavbarHeader';
import Carousel from './Components/Carousel/Carousel.jsx';
import About from './Components/About/About.jsx';
import Video from './Components/Video/Video.jsx';
import Service from './Components/Service/Service.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import TeamSection from './Components/Team/TeamSection.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Rooms from './Components/Rooms/Rooms.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Book_a_room from './Components/Booking/Book_a_room.jsx';
import Explore from './Components/Explore/Explore.jsx';
import Room from './Components/Room_Details/Room.jsx';
import Apartment from './Components/Service/Apartment.jsx';
import Restaurant from './Components/Service/Restaurant.jsx';
import Spa from './Components/Service/Spa.jsx';
import Sports from './Components/Service/Sports.jsx';
import Event from './Components/Service/Event.jsx';
import Gym from './Components/Service/Gym.jsx';
import AdminLoginForm from './Components/Admin/AdminLoginForm.jsx';
import AdminSignupForm from './Components/Admin/AdminSignupForm.jsx';

// Import styles
import 'animate.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from "axios";
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import DashboardHome from './Components/Dashboard/DashboardHome.jsx';

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
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("https://onlinehotelbooking.onrender.com");
      setArray(response.data.fruits);
      console.log(response.data.fruits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
          <Route path="https://react-project-6rl2.onrender.com/book-a-room" element={<Book_a_room />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/room/:roomType" element={<Room />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/event" element={<Event />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/login" element={<AdminLoginForm />} />
          <Route path="/signup" element={<AdminSignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardhome" element={<DashboardHome />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
