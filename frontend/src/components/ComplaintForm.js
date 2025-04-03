import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ComplaintForm.css'; // Import the CSS file

const ComplaintForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent empty submission
    if (!title.trim() || !description.trim()) {
      alert("Title and description are required!");
      return;
    } 

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    if (image instanceof File) {
      formData.append("image", image);
    } 

    const token = localStorage.getItem("token");

    console.log("Submitting Complaint with Token:", token); // Debugging

    if (!token) {
      alert("Token not found! Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/complaints",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );     

      alert(response.data.message || "Complaint submitted successfully!");
      setTitle("");
      setDescription("");
      
      setImage(null); // Reset form after submission
      navigate("/complaints");

    } catch (err) {
      console.error("Submission Error:", err.response?.data || err);
      alert(err.response?.data?.message || "Failed to submit complaint.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a Complaint</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Submit Complaint</button>
    </form>
  );
  
};

export default ComplaintForm;
