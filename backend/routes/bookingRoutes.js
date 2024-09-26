// BookingRoutes.js
import express from 'express';
const router = express.Router();
import Booking from '../models/Booking.js'; // Adjust the path as per your project structure

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send({ message: 'Booking successful!' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send({ message: 'This email has already been used for a booking.' });
    }
    res.status(500).send({ message: 'Server error. Please try again later.' });
  }
});


export default router;
