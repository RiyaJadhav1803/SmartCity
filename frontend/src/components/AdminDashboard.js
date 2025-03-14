import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const res = await axios.get('/api/complaints');
                setComplaints(res.data);
            } catch (err) {
                console.error('Failed to fetch complaints', err);
            }
        };
        fetchComplaints();
    }, []);

    const updateStatus = async (id, status) => {
        try {
            await axios.put(`/api/complaints/${id}`, { status });
            setComplaints(complaints.map(c => c._id === id ? { ...c, status } : c));
        } catch (err) {
            console.error('Failed to update status', err);
        }
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
                        <button onClick={() => updateStatus(complaint._id, 'Resolved')}>Mark as Resolved</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;