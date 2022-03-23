import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css';
import { useLocation } from 'react-router-dom';

const Navigation = ({ addedContent }) => {
    let { pathname } = useLocation();
    let isNotOnHome = pathname != "/";
    let nameSizeStyle =  isNotOnHome ? { marginTop: '30px'} : {} 
    
    return (
        <div className="nav-cont">
            <h5 className="name" style={ nameSizeStyle }>Kevin Castro</h5>
            { addedContent }
            <nav style={ isNotOnHome ? { marginTop: "5px" } : {} }>
                <Link to="/" className={`link-nav ${pathname == "/" ? "active" : ""}`}>
                    Home
                </Link>
                <Link to="about" className={`link-nav ${pathname == "/about" ? "active" : ""}`}>
                    About
                </Link>
                <Link to="projects" className={`link-nav ${pathname == "/projects" ? "active" : ""}`}>
                    Projects
                </Link>
                <Link to="contact" className={`link-nav ${pathname == "/contact" ? "active" : ""}`}>
                    Contact
                </Link>
            </nav>
        </div>
    )
}

export default Navigation;