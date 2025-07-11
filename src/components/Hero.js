import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('July 30, 2025 23:59:59').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text" style={{textAlign: 'center'}}>
            <h1 className="hero-title" style={{fontSize: '3.5rem', fontWeight: 900, letterSpacing: '2px'}}>
              CESS Conference 6.0
            </h1>
            <h2 className="hero-heading" style={{fontSize: '2rem', fontWeight: 700, color: '#4CAF50', marginBottom: '1.5rem'}}>
              Unlocking the Energy–Environment Nexus
            </h2>
            <p className="hero-description" style={{fontSize: '1.2rem', maxWidth: 700, margin: '0 auto 2rem auto'}}>
              The flagship event for students, professionals, and innovators in civil and environmental engineering. Join us for three days of learning, collaboration, and real-world impact.
            </p>
            <div className="hero-details" style={{justifyContent: 'center'}}>
              <div className="hero-detail">
                <span className="detail-icon">📅</span>
                <span>July 28-30th, 2025</span>
              </div>
              <div className="hero-detail">
                <span className="detail-icon">📍</span>
                <span>UNILAG, Lagos, Nigeria</span>
              </div>
              <div className="hero-detail">
                <span className="detail-icon">👥</span>
                <span>300+ Attendees</span>
              </div>
            </div>
            <div className="hero-cta" style={{justifyContent: 'center'}}>
              <a href="#register" className="btn btn-primary">Register Now</a>
            </div>
            <div className="hero-card" style={{margin: '2rem auto 0 auto', maxWidth: 400}}>
              <div className="card-content">
                <h3>Free Registration</h3>
                <p>Register for free before July 30th</p>
                <div className="countdown">
                  <span className="countdown-label">Registration closes in:</span>
                  <div className="countdown-timer">
                    <div className="timer-unit">
                      <span className="number">{countdown.days}</span>
                      <span className="label">Days</span>
                    </div>
                    <div className="timer-unit">
                      <span className="number">{countdown.hours}</span>
                      <span className="label">Hours</span>
                    </div>
                    <div className="timer-unit">
                      <span className="number">{countdown.minutes}</span>
                      <span className="label">Minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 