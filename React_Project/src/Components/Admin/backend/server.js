import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error('MONGO_URI is not defined.');
    process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Admin Schema
const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
});

const Admin = mongoose.model('Admin', adminSchema);

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.admin = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

// Admin Signup
app.post('/admin/signup', async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const adminExists = await Admin.findOne({ email });
        if (adminExists) return res.status(400).send('Admin already exists');
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ email, password: hashedPassword, name });
        await admin.save();
        res.send('Admin registered successfully');
    } catch (err) {
        res.status(400).send('Error registering admin');
    }
});

// Admin Login
app.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).send('Admin does not exist');
        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) return res.status(400).send('Invalid password');
        const allowedAdmins = ['Aanchal', 'Vinita', 'Khushboo', 'Chandani'];
        if (!allowedAdmins.includes(admin.name)) return res.status(403).send('Access restricted to specific admins');
        const token = jwt.sign({ _id: admin._id, name: admin.name }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send('Error logging in');
    }
});

// Fetch Profile Data
app.get('/admin/profile', verifyToken, (req, res) => {
    res.json(req.admin);
});

// Logout (Client-side handle)
app.post('/admin/logout', (req, res) => {
    res.json({ message: 'Logout successful' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
