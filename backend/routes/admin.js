// adminRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admindata');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });

        if (!admin || admin.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_KEY, {
            expiresIn: '1h'
        });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Admin login error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
