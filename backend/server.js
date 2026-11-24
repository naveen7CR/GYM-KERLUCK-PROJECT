require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5001;

// 🔥 CORS OPEN FOR ALL (Local testing fix)
app.use(cors());
app.use(express.json());

// Rate Limiter
const enquiryLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: "Too many enquiries from this IP, please try again later." }
});

// Database Schema
const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, match: /^[6-9]\d{9}$/ },
    plan: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Kerluck Backend is running!' });
});

// POST: Create an enquiry
app.post('/api/enquiries', enquiryLimiter, async (req, res) => {
    try {
        const { name, phone, plan, message } = req.body;
        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and phone are required.' });
        }
        const newEnquiry = new Enquiry({ name, phone, plan, message });
        await newEnquiry.save();
        res.status(201).json({ success: true, message: 'Enquiry submitted successfully!' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid phone number.' });
        }
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

// GET: Read enquiries (Admin only)
app.get('/api/enquiries', async (req, res) => {
    try {
        const adminKey = req.query['x-admin-key'] || req.headers['x-admin-key'];

        if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
            return res.status(401).json({ error: 'Unauthorized. Invalid admin key.' });
        }
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// Start Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
    });