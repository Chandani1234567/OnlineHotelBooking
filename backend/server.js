const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const Booking = require("./models/Booking.js");

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

const MONGO_URL = "mongodb+srv://aamankumar4958:UdPYCAnM3erkZ3W3@cluster0.akoiaax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";//Connection String

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error("DB Connection Error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/api", (req, res) => {
  res.json({ "fruits": ["apple", "orange", "banana"] });
});



app.post('/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send({ message: 'Booking successful!' });
  } catch (err) {
    // Check if the error is a duplicate key error (E11000)
    if (err.code === 11000) {
      return res.status(400).send({ message: 'This email has already been used for a booking.' });
    }
    res.status(500).send({ message: 'Server error. Please try again later.' });
  }
});





app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
