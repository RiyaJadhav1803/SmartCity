import React, { useEffect, useState } from "react";
import axios from "axios";
import './ComplaintList.css'; // Import the CSS file

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

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

  return (
    <div>
      <h2>Complaints List</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p>Status: {complaint.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintList;
