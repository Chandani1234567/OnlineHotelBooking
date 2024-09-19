import mongoose from 'mongoose';
import Booking from '../models/Booking.js'; // Adjust path as necessary
import initData from './data.js'; // Assuming data.js uses default export

const MONGO_URL = "mongodb+srv://aamankumar4958:UdPYCAnM3erkZ3W3@cluster0.akoiaax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB");

    const initDB = async () => {
      await Booking.deleteMany({});
      await Booking.insertMany(initData.data); // Using the default export
      console.log("Data was initialized");
    };

    await initDB();
  } catch (err) {
    console.error("Error connecting to DB or initializing data:", err);
  } finally {
    mongoose.connection.close(); // Ensure the connection is closed after the script completes
  }
}

main();
