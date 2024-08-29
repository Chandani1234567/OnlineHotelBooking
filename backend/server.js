const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const Booking = require("./models/Booking.js");

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"]
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = "mongodb://127.0.0.1:27017/HotelParagon";//Connection String

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error("DB Connection Error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/api", (req, res) => {
  res.json({ "fruits": ["apple", "orange", "banana"] });
});

// Index Route
app.get("/Bookings", async (req, res) => {
  try {
    const allListings = await Booking.find({});
    res.render("Bookings/index.ejs", { allListings });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).send("Server Error");
  }
});

// New Route
app.get("/Bookings/new", (req, res) => {
  res.render("Bookings/new.ejs");
});

// Create Booking Route
app.post("/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body.Booking);
    await newBooking.save();
    res.status(201).json(newBooking); // Respond with the created booking
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).send("Server Error");
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
