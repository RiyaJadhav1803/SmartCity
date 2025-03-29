import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        
            <section class="hero">
                <div class="hero-text">
                    <h1>Complaint Box</h1>
                    <p>Empowering citizens to create a better, smarter city! 
                        Our Smart City Digital Public Complaint System is designed
                         to make reporting and resolving public issues easier and
                          more efficient. Whether it's potholes, broken streetlights,
                           water leaks, or sanitation concerns, our platform ensures 
                           that your complaints are heard and addressed swiftly.</p>
                    {/* <button class="read-more">Read More</button> */}
                </div>
                <div class="hero-image">
                    <img src="assets/combox.png" alt="Smart City"></img>
                </div>
            </section>
            
        
    );
};


export default Home;
