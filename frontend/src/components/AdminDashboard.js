import React, { useState, useEffect } from "react";
import axios from "axios";
import './AdminDashboard.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/complaints`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComplaints(res.data);
      } catch (err) {
        console.error("Failed to fetch complaints", err);
      }
    };
    
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/complaints/${id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComplaints(
        complaints.map((c) => (c._id === id ? { ...c, status } : c))
      );
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login"); // Redirect to the admin login page
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p>Status: {complaint.status}</p>
            <button onClick={() => updateStatus(complaint._id, "Resolved")}>
              Mark as Resolved
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;

