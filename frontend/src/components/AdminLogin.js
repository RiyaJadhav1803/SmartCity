import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/admin/login", {
                username,
                password,
            });
            localStorage.setItem("adminToken", response.data.token);
            navigate("/admin-dashboard");
        } catch (err) {
            setError("Invalid credentials");
            console.error("Login failed:", err);
        }
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
