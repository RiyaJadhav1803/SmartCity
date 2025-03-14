import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            alert('Login successful!');
            console.log('Token:', res.data.token);
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            console.error(err.response?.data?.msg || 'Login failed!');
            alert(err.response?.data?.msg || 'Login failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email' 
                required 
            />
            <input 
                type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password' 
                required 
            />
            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;
