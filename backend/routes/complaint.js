// const express = require("express");
// const Complaint = require("../models/Complaint");
// const multer = require("multer");
// const auth = require("../middlewares/auth");
// const router = express.Router();
// const User = require("../models/User");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// router.post("/", auth, upload.single("image"), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const image = req.file ? req.file.path : null;
//     const newComplaint = new Complaint({
//       title,
//       description,
//       image,
//       user: req.user.user_id,
//     });
//     await newComplaint.save();
//     res.status(201).json(newComplaint);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({}).populate("user", "name").exec();
//     res.status(200).json(complaints);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const { status } = req.body;
//     const updatedComplaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );
//     res.json(updatedComplaint);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const multer = require("multer");
const Complaint = require("../models/Complaint");
const auth = require("../middlewares/auth");
const router = express.Router();
const User = require("../models/User");

// Multer Configuration (Ensure 'uploads/' folder exists)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create Complaint
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    console.log("Received Token User:", req.user); // Debugging step

    const { title, description } = req.body;
    const image = req.file ? req.file.path : null;

    const newComplaint = new Complaint({
      title,
      description,
      image,
      user: req.user.user_id, // Ensure `user_id` is extracted correctly
    });

    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    console.error("Error saving complaint:", err);
    res.status(500).json({ error: err.message });
  }
});

// Fetch All Complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find({}).populate("user", "name").exec();
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Complaint Status
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedComplaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
