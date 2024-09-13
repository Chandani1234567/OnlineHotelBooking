// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const Booking = require("./models/Booking.js");

// const app = express();
// const corsOptions = {
//   origin: ["http://localhost:5173"]
// };

// app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); 

// const MONGO_URL = "mongodb+srv://aamankumar4958:UdPYCAnM3erkZ3W3@cluster0.akoiaax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";//Connection String

// mongoose.connect(MONGO_URL)
//   .then(() => console.log("Connected to DB"))
//   .catch(err => console.error("DB Connection Error:", err));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.get("/api", (req, res) => {
//   res.json({ "fruits": ["apple", "orange", "banana"] });
// });



// app.post('/bookings', async (req, res) => {
//   console.log(req.body);  // Inspect incoming data
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();
//     res.status(201).send({ message: 'Booking successful!' });
//   } catch (err) {
//     console.error("Error details:", err);  // Log the entire error object
//     if (err.code === 11000) {
//       return res.status(400).send({ message: 'This email has already been used for a booking.' });
//     }
//     res.status(500).send({ message: 'Server error. Please try again later.' });
//   }
// });



// app.listen(5000, () => {
//   console.log("Server is listening on port 5000");
// });












// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const bookingRoutes = require('./routes/bookingRoutes.js');
// const authRoutes = require('./routes/auth.js');

// const app = express();
// const PORT = process.env.PORT || 5001; // Use a different port, e.g., 5001

// dotenv.config();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173' // Adjust this to your frontend origin
// }));
// app.use(express.json());

// // MongoDB Connection
// const MONGO_URL = process.env.MONGO_CONN;
// mongoose.connect(MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000 // Increase timeout to 5 seconds
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err.message));

// // Set up routes
// app.use('/api/bookings', bookingRoutes); // Mount booking routes under /api/bookings
// app.use('/api/auth', authRoutes); // Mount auth routes under /api/auth

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.error(`Unhandled Rejection: ${err.message}`);
//   process.exit(1);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/bookingRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with the appropriate origin
app.use(cors({
  origin: '*'
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_CONN, {
  serverSelectionTimeoutMS: 5000, // Increase timeout to 5 seconds
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Use imported routes
app.use('/api', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
