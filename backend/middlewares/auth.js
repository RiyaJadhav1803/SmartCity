// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token)
//     return res.status(401).json({ message: "No token, authorization denied" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

//imp to show all complaints

// module.exports = (req, res, next) => {
//   try {
//     const token = req.header("Authorization").replace("Bearer ", "");
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     console.log("Authenticated User:", req.user);
//     next();
//   } catch (err) {
//     console.error("Authentication Error:", err);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// };

// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const authHeader = req.header("Authorization");
//     console.log("Auth Header Received:", authHeader);

//     if (!authHeader) {
//       return res.status(401).json({ error: "No token provided" });
//     }

//     const token = authHeader.replace("Bearer ", "");
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded Token:", decoded);

//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("Authentication Error:", err);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// };
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    console.log("Auth Header Received:", authHeader);

    if (!authHeader) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.replace("Bearer ", "");
    console.log("Extracted Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("Authentication Error:", err.message);
    res.status(401).json({ error: "Unauthorized" });
  }
};
