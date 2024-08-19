import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
        <nav className="nav-one">
            <div className="logo">
                <img src= "/images/logoontheheader.png" width="125px" height="52px" alt="NobleTrust Bank Logo" />
            </div>
           
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about us">ABOUT US</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#contact us">CONTACT US</a></li>
            </ul>
 
            <div className="button">
              

                <Link to={'/login'}>  <button type="button" className="btn1">LOGIN</button></Link> 
                
                <Link to = {'/sign-up'}>   <button type="button" className="btn2">Get Started</button></Link>
               
            </div>
        </nav>
    </header>
     
    ) };
    export default Header;