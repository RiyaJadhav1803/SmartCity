require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'No token, authorization denied' });

    const token = authHeader.split(' ')[1]; // Remove "Bearer" prefix
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded; // Assign the decoded payload to req.user
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
