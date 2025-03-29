import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <Link to="/">
                    <img src="assets/logo.png" alt="Logo" style={styles.logoImage} />
                </Link>
            </div>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/login" style={styles.link}>Login</Link></li>
                <li><Link to="/register" style={styles.link}>Register</Link></li>
                <li><Link to="/complaints" style={styles.link}>Complaint List</Link></li>
                <li><Link to="/submit-complaint" style={styles.link}>Submit Complaint</Link></li>
                <li><Link to="/admin" style={styles.link}>Admin Dashboard</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        
        padding: '10px 20px',
        // backgroundColor: '#333',
        color: '#fff',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
        height: '70px', // Adjust the size as needed
        marginLeft: '10rem',
        // marginle/ft:
        // mixBlendMode: 'multiply', // Space between logo and links
    },
    brand: {
        margin: 0, 
        fontSize: '1.5rem',
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        gap: '15px',
    },
    link: {
        color: '#000',       
        textDecoration: 'none',
        // padding: '5px 10px',
        borderRadius: '2px',
        transition: 'background 0.3s',
    }
};

export default Navbar;
