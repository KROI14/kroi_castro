import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact container">
            
            <div className="wrapper">
                <div className="ic-container">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4>Pasig City, Philippines</h4>
            </div>
            <div className="wrapper">
                <div className="ic-container">
                    <i className="fa-solid fa-phone"></i>
                </div>
                <h4>+639274630467</h4>
            </div>
            <div className="wrapper">
                <div className="ic-container">
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <h4>kevin.roi.castro@gmail.com</h4>
            </div>
            
        </div>
    )
}

export default Contact