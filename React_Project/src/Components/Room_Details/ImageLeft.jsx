import React from 'react';
import './ImageLeft.css'; // Ensure this path is correct

const ImageLeft = () => {
  return (
    <div className="container">
      <h2>Overview</h2>
      <img src="img/room-1.jpg" alt="Executive Junior Suite" className="floating" />
      <p>The Executive Junior Suite is designed to provide guests with an elegant, comfortable, and spacious retreat. Combining luxury with practicality, this suite is ideal for both business and leisure travelers.</p>
      <p><b>Room Size:</b> 50 sqm</p>
      <p><b>Bed Type:</b> King-size bed</p>
      <p><b>View:</b> City skyline view</p><br />

      <h2>Amenities</h2>
      <img src="img/bath1.jpeg" alt="Bathroom" className="floating1" />
      <ul>
        <li><b>Wi-Fi:</b> Free high-speed internet</li>
        <li><b>Entertainment:</b> 40" LED TV with satellite channels</li>
        <li><b>Workspace:</b> Executive desk and ergonomic chair</li>
        <li><b>Bathroom:</b> Bathroom with Jacuzzi and rain shower</li>
        <li><b>Minibar:</b> Fully stocked minibar</li>
        <li><b>Climate Control:</b> Individually controlled air conditioning</li>
        <li><b>Extras:</b> Bathrobes, slippers, luxury toiletries</li>
      </ul>

      <h2>Pricing</h2>
      <p><b>Per Night:</b> Rs.1200</p>
      <p><b>Weekly Discount:</b> 10% off for stays of 7 nights or more</p>

      <h2>Location</h2>
      <img src="img/city1.jpeg" alt="City View" className="floating2" />
      <p><b>Hotel Address:</b></p>
      <p>Sector-1, Block-d, NSTI Noida</p>
      <p><b>Nearby Attractions:</b></p>
      <ul>
        <li>City Museum (0.5 km)</li>
        <li>Central Park (1 km)</li>
        <li>Shopping Mall (2 km)</li>
        <li>Mansa Devi Temple (3 km)</li>
      </ul>

      <h2>Contact</h2>
      <p><b>Phone:</b> +012 345 6789</p>
      <p><b>Email:</b> ourhotel@gmail.com</p>
    </div>
  );
};

export default ImageLeft;
