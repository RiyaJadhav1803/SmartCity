import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.brand}></h2>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Login</Link></li>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
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
        color: '#fff',
        textDecoration: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background 0.3s',
    }
};

export default Navbar;
