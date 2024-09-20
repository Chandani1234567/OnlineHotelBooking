import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AdminSchema = new mongoose.Schema({
  secretKey: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});



const Admin = mongoose.model("Admin", AdminSchema);

export default Admin; // Use ES module export



