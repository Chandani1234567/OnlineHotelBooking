import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const RoomBox = ({ imgSrc, price, name, stars, features, delay, roomType, description, amenities, imgAmenity }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState(roomType); // Set dynamic roomType by default

  const handleBookNow = (event) => {
    event.preventDefault();
    navigate('https://react-project-6rl2.onrender.com//book-a-room', { state: { roomType: selectedRoomType } });
  };
  
  const handleViewDetail = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
            <button className="btn btn-sm BackgroundColor rounded py-2 px-4 text-white" onClick={handleViewDetail}>
              View Detail
            </button>
            <button className="btn btn-sm btn-dark rounded py-2 px-4" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name} Amenities</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <ul>
                  {amenities.map((amenity, index) => (
                    <li key={index}><b>{amenity.title}:</b> {amenity.detail}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomBox;
