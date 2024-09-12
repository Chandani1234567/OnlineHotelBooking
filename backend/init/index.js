const mongoose = require("mongoose");

const initData = require("./data.js");

const Booking = require("../models/Booking.js");

const MONGO_URL = "mongodb+srv://aamankumar4958:UdPYCAnM3erkZ3W3@cluster0.akoiaax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Booking.deleteMany({});
  await Booking.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
