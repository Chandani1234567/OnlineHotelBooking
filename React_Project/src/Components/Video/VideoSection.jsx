import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import LightButton from '../Buttons/LightButton';

import withAnimation from '../../hoc/withAnimation';

const VideoSection = () => {
  return (
    <div className="container-xxl py-5 px-0">
      <div className="row g-0">
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5">
            <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
            <h1 className="text-white mb-4">Welcome Our Luxurious Hotel</h1>
            <p className="text-white mb-4">
              Where luxury meets comfort. Enjoy impeccable service, elegant rooms, and top-notch amenities designed for
              your ultimate relaxation. Your unforgettable stay begins here.
            </p>
          
             <PrimaryButton href="#">Our Rooms</PrimaryButton>
             <LightButton href="#">Book A Room</LightButton>
          </div>
        </div>
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="#"
              data-bs-target="#videoModal"
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
