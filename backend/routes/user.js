const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        const newUserCreated = await User.create({ name, email, password });
        console.log(newUserCreated);

        res.json({
            msg: "Registration successful",
            token: await newUserCreated.generateToken(),
            user_id: newUserCreated._id.toString()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email });
        console.log(userFound);
        
        if (userFound) {
            const match = await bcrypt.compare(password, userFound.password);
            console.log(match);
            if (match) {
                res.status(200).json({
                    msg: "Login successful",
                    token: await userFound.generateToken(),
                    user_id: userFound._id.toString()
                });
            } else {
                res.status(401).json({ msg: "Invalid email or password" });
            }
        } else {
            res.status(401).json({ msg: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
