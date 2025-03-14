import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComplaintList = () => {
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