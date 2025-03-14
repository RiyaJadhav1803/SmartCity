import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use the full URL for the API endpoint
            const res = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
            alert('Registration successful!');
        } catch (err) {
            console.error(err.response?.data || err.message);
            alert('Registration failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <button type='submit'>Register</button>
        </form>
    );
};

export default Register;
