import mongoose from 'mongoose';

// Define the Customer Booking schema
const customerBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    enum: ['Junior Suite', 'Executive Suite', 'Super Deluxe'], // Match room types
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  guests: {
    type: Number,
    required: true,
    min: 1
  },
  specialRequests: {
    type: String
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

const CustomerBooking = mongoose.model('CustomerBooking', customerBookingSchema);

// Use ES Module syntax
export default CustomerBooking;
