import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css/animate.min.css';

const RoomBox = ({ imgSrc, price, name, stars, features, delay, roomType, description }) => {
  const navigate = useNavigate();

  const handleBookNow = (event) => {
    event.preventDefault();
    navigate('/book-a-room');
  };

  const handleViewDetail = (event) => {
    event.preventDefault();
    navigate(`/room/${roomType}`);
  };

  return (
    <div className="col-lg-4 col-md-6" style={{ animationDelay: delay }}>
      <div className="room-item shadow rounded overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={imgSrc} alt={name} />
          <small className="position-absolute start-0 top-100 translate-middle-y BackgroundColor text-white rounded py-1 px-3 ms-4">
            {price}
          </small>
        </div>
        <div className="p-4 mt-2">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{name}</h5>
            <div className="ps-2">
              {[...Array(stars)].map((_, i) => (
                <small key={i} className="fa fa-star fontColor"></small>
              ))}
            </div>
          </div>
          <div className="d-flex mb-3">
            {features.map((feature, i) => (
              <small key={i} className={`border-end ${i < features.length - 1 ? 'me-3 pe-3' : ''}`}>
                <i className={`fa ${feature.icon} fontColor me-2`}></i>
                {feature.text}
              </small>
            ))}
          </div>
          <p className="text-body mb-3">{description}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm BackgroundColor rounded py-2 px-4 text-white" href="/room" onClick={handleViewDetail}>
              View Detail
            </button>
            <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBox;
