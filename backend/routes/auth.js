// auth.js

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js'; // Ensure correct import path

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || 'Aanchal'; // Load secret key from environment or default

// Admin signup route
// Admin signup route
router.post("/admins", async (req, res) => {
  const { secretKey, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  if (secretKey !== SECRET_KEY) {
    return res.status(400).json({ message: "Invalid secret key" });
  }

  try {
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    admin = new Admin({ secretKey, email, password: hashedPassword }); // Include secretKey here
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error during admin registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      const token = jwt.sign({ id: admin._id }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
    } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

export default router;
