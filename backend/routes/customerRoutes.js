import express from "express";
import CustomerBooking from "../models/CustomerBooking.js";

const router = express.Router();

// Route to handle customer form submission
router.post("/customer", async (req, res) => {
  try {
    const newCustomerBooking = new CustomerBooking(req.body); // Create new customer booking
    await newCustomerBooking.save(); // Save the booking to the DB
    res.status(201).json(newCustomerBooking); // Respond with created customer booking
  } catch (err) {
    console.error("Error creating customer booking:", err);
    res.status(500).send("Server Error");
  }
});

// Route to fetch all customer bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await CustomerBooking.find(); // Fetch all customer bookings
    res.json(bookings); // Respond with the bookings data
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).send("Server Error");
  }
});

export default router;
