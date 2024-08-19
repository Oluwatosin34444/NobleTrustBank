import React from 'react';
import './about-us.css';
// import img1 from './images/Aboutus.png'

const AboutUs = () => {
  return (
    <div className='about-us-container' id="about us">
      <div className="about-us-image">
      <img src ="/images/Aboutus.png"/>
    </div>
    <div className="TextForAboutUs">
      <h3>ABOUT NOBLETRUST BANK</h3>
      <p id="TextAroundImage">At NobleTrust Bank, we are dedicated to making banking simpler, smarter and more convenient for our customers. Our banking app is designed to provide you with everything you need to manage your finances on the go. With secure, 24/7 account access, you can check your balance, transfer money, pay bills, and much more, all from your phone or tablet. With NobleTrust Bank, you'll have the power of banking at your fingertips
      </p>

    </div>
      
    </div>
  );
};

export default AboutUs;