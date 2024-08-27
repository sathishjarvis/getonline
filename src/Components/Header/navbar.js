import React, { useState} from 'react';
import logo from '../../Image/onepeacelogo.png'
import { Link } from 'react-router-dom';
import {  FaTimes, FaBars } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo"><img src={logo} alt='one peace logo'/></Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMenu}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-links" onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar