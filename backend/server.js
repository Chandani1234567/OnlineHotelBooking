
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import CustomerBooking from "./models/CustomerBooking.js"; 
import bookingRoutes from './routes/bookingRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with the appropriate origin
// app.use(cors({
//   origin: 'https://react-project-6rl2.onrender.com'
// }));

app.use(cors({
  origin: '*'
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// MongoDB connection
mongoose.connect(process.env.MONGO_CONN, {
  serverSelectionTimeoutMS: 5000, // Increase timeout to 5 seconds
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));




// Use imported routes
app.use('/api', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api', contactRoutes);


// Route for Customer Form submissions
app.post("/customer", async (req, res) => {
  try {
    const newCustomerBooking = new CustomerBooking(req.body); // Create a new customer booking
    await newCustomerBooking.save(); // Save the booking to the DB
    res.status(201).json(newCustomerBooking); // Respond with the created customer booking
  } catch (err) {
    console.error("Error creating customer booking:", err);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



