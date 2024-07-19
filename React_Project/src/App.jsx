import React from 'react';
import Header from './Components/Navbar/NavbarHeader';
import Carousel from './Components/Carousel';
import About from './Components/About/About.jsx';
import Video from './Components/Video/Video.jsx';
import Service from './Components/Service/Service.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import TeamSection from './Components/Team/TeamSection.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Rooms from './Components/Rooms/Rooms.jsx';
import Contact from './Components/Contact/Contact.jsx';

import 'animate.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <Carousel />
      <About />
      <Rooms />
      <Video />
      <Service />
      <Testimonials />
      <TeamSection />
      <Contact/>
     
      <Footer />
      
    </div>
  );
}

export default App;
