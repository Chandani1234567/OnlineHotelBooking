
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
