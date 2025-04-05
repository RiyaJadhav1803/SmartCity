import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="assets/logo.png" alt="Logo" className="logoImage" />
        </Link>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/register" className="navLink">
            Register
          </Link>
        </li>
        <li>
          <Link to="/complaints" className="navLink">
            Complaint List
          </Link>
        </li>
        {/* <li><Link to="/submit-complaint" className="navLink">Submit Complaint</Link></li> */}
        {/* <li><Link to="/admin-login" className="navLink">Admin Dashboard</Link></li> */}
        {/* <li>
                    <button onClick={handleLogout} className="logoutButton">Logout</button>
                </li> */}
      </ul>
      <button onClick={handleLogout} className="logoutButton">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
