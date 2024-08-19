

import React from 'react';
import './footer-a.css';

const Footer = () => {
    return (
        <div className="footercontainer">
            
            <div className="box1">
                <div className="logo">
                    <img src="images/logoforbank2.png" alt="Bank App Logo" />
                </div>
                <div className="group1">
                    <a href="https://www.facebook.com/yourprofile"><img src="/images/facebook.png"  alt="facebook" /></a>
                    <a href="https://www.instagram.com/yourprofile"><img src="images/instagram.png" alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/yourprofile"><img src="images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://twitter.com/yourprofile"><img src="images/x.png" alt="twitter" /></a>
                </div>
            </div>
            <div className="box2">
                <p><b>CONTACT US</b></p>
                <p>500 Terry Francine St, San Francisco</p>
                <p>+2347045274519</p>
                <p><a href="mailto:info@nobletrustbank.com">INFO@NOBLETRUSTBANK.COM</a></p>
            </div>
            <div className="box3">
                <p><b>HELPFUL LINKS</b></p>
                <p><a className="dropdown-item" href="#home">Home</a></p>
                <p><a className="dropdown-item" href="#about">About Us</a></p>
                <p><a className="dropdown-item" href="#services">Services</a></p>
                <p><a className="dropdown-item" href="#Contact">Contact Us</a></p>
            </div>
            <div className="box4">
                <p><b>DOWNLOAD APP ON</b></p>
                <a href="https://apps.apple.com/us/app/your-app-name/id1234567890" target="_blank" rel="noopener noreferrer"><img src="images/appstore.png" alt="App Store" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.example.yourApp" target="_blank" rel="noopener noreferrer"><img src="images/googlestore.png" alt="Google Play" /></a>
            </div>
        </div>
    );
};

export default Footer;
