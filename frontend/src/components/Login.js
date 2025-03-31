import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'; // Import the CSS file
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      alert("Login successful!");
      console.log("Token:", res.data.token);
      localStorage.setItem("token", res.data.token);
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }
      navigate("/complaints");
    } catch (err) {
      console.error(err.response?.data?.msg || "Login failed!");
      alert(err.response?.data?.msg || "Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login to Your Account</h2>
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <div className="options">
        <label className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            required
          />
          Remember Me
        </label>
        {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
      </div>
      <button type="submit">Login</button>
      <p className="signup-link">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
