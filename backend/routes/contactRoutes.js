import express from 'express';
import Contact from '../models/contactModel.js'; // Adjust the path if necessary
const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a new contact entry
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        // Save to the database
        await newContact.save();

        // Send a success response
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error('Error saving contact form:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
