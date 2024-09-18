// BookingRoutes.js
import express from 'express';
const router = express.Router();
import Booking from '../models/Booking.js'; // Adjust the path as per your project structure

// POST /api/bookings - Create a new booking
router.post('/', async (req, res) => { // Remove /api from here
  console.log(req.body); // Inspect incoming data
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send({ message: 'Booking successful!' });
  } catch (err) {
    console.error('Error details:', err); // Log the entire error object
    if (err.code === 11000) {
      return res.status(400).send({ message: 'This email has already been used for a booking.' });
    }
    res.status(500).send({ message: 'Server error. Please try again later.' });
  }
});

export default router;
