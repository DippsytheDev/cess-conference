import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CESS Conference 6.0</h3>
            <p className="footer-description">
              Energy and Environment Nexus - Building the future through innovation and community impact. 
              Join us in creating lasting solutions for our planet and future generations.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Conference Guide</a></li>
              <li><a href="#">Travel Information</a></li>
              <li><a href="#">Accommodation</a></li>
              <li><a href="#">Sponsorship</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📧 cessconferencex.0@gmail.com</p>
              <p>📞 +234 XXX XXX XXXX</p>
              <p>📍 UNILAG, Lagos, Nigeria</p>
              <p>📅 July 28-30th, 2025</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 CESS Conference 6.0. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <h4>Stay Updated</h4>
          <p>Get the latest updates about CESS Conference 6.0 and sustainability news.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 