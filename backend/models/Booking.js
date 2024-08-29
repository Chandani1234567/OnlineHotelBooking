const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Basic email validation
  },
  checkinDate: {
    type: Date,
    required: true,
  },
  checkoutDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value > this.checkinDate; // Check-out date must be after check-in date
      },
      message: "Check-out date must be after check-in date.",
    },
  },
  adults: {
    type: Number,
    required: true,
    min: [1, "At least one adult is required."],
  },
  children: {
    type: Number,
    default: 0,
  },
  roomType: {
    type: String,
    required: true,
    enum: ["juniorSuite", "executiveSuite", "superDeluxRoom"],
  },
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
