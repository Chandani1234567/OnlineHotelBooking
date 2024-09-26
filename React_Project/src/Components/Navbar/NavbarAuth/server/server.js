import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import config from 'config';
import dotenv from 'dotenv';
import User from './models/User.js'; // Ensure this path is correct

dotenv.config(); // Ensure dotenv is configured early

const app = express();

const JWT_SECRET = "Y8yChgRFGO+niH3Nz7+Nvp/P86VUFVRbmoUEAbCU5JE="

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // Include credentials if you're sending cookies or tokens
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers in requests
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
const mongoURI = config.get('mongoURI');
if (!mongoURI) {
    console.error('MONGO_URI is not defined. Please check your config/default.json file.');
    process.exit(1); // Exit the application if mongoURI is not defined
}

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit if the connection fails
    });


// User Authentication Routes
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Create and send the JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    res.json({ message: 'Logout successful' });
});



app.post('/reset-password', async (req, res) => {
    const { email } = req.body;
    res.send('Password reset functionality');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
