import React from 'react';
import TitleSection from './TitleSection';
import Counters from './Counter';
import Images from './Images';
import withAnimation from '../../hoc/withAnimation';

const About = () => {
  return (
    <section id="about">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <TitleSection />
              <Counters />
              <a className="btn  BackgroundColor text-white py-3 px-5 mt-2" href="explore.html">Explore More</a>
            </div>
            <div className="col-lg-6">
              <Images />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
