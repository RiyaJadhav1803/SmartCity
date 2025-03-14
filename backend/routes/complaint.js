const express = require('express');
const Complaint = require('../models/Complaint');
const multer = require('multer');
const auth = require('../middlewares/auth');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage });

router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.path : null; 
        const newComplaint = new Complaint({
            title, 
            description, 
            image, 
            user: req.user.id 
        });
        await newComplaint.save();
        res.status(201).json(newComplaint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const complaints = await Complaint.find().populate('user', 'name');
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updatedComplaint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
