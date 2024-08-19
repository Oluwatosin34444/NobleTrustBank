import React from 'react';
import './hero-section.css';

const HeroSection = () => {
  return (
    
    <main>
      <section id="home">
        <div className="content">
          <div className="content-left">
            <h1>Welcome to the Future of Banking.</h1>
            <h2>Experience Hassle-Free Transactions</h2>
            <p>
              You can bank anytime, anywhere, manage your accounts, make transactions, 
              and keep track of your finances at your fingertips. What are you waiting for? 
              Download the NobleTrust Bank app today and experience convenience like never before.
            </p>
            <button type="button" className="button2">Get Started</button>
          </div>

          <div className="content-right">
            <img 
              src="/images/picnforhero.png" 
              width="612px" 
              height="612px" 
              alt="NobleTrust Bank Logo" 
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
