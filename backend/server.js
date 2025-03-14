const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS for React frontend (running on port 3000)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to Database
connectDB();

// Routes
app.use('/api/users', require('./routes/user'));
app.use('/api/complaints', require('./routes/complaint'));

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port :${PORT}`);
});
