import React, { useState } from 'react';
import axios from 'axios';

const ComplaintForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/api/complaints', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Complaint submitted successfully!');
        } catch (err) {
            console.error(err);
            alert('Failed to submit complaint.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder='Title' 
                required 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder='Description' 
                required
            />
            <input 
                type='file' 
                onChange={(e) => setImage(e.target.files[0])} 
            />
            <button type='submit'>Submit Complaint</button>
        </form>
    );
};

export default ComplaintForm;
