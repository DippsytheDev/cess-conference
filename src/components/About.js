import React from 'react';
import './About.css';

const SDG_GOALS = [
  '1. No Poverty',
  '2. Zero Hunger',
  '3. Good Health and Well-being',
  '4. Quality Education',
  '5. Gender Equality',
  '6. Clean Water and Sanitation',
  '7. Affordable and Clean Energy',
  '8. Decent Work and Economic Growth',
  '9. Industry, Innovation and Infrastructure',
  '10. Reduced Inequalities',
  '11. Sustainable Cities and Communities',
  '12. Responsible Consumption and Production',
  '13. Climate Action',
  '14. Life Below Water',
  '15. Life on Land',
  '16. Peace, Justice and Strong Institutions',
  '17. Partnerships for the Goals',
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About CESS Conference 6.0</h2>
          <p className="section-subtitle">
            <strong>Theme:</strong> Energy and Environment Nexus<br/>
            <span style={{ color: '#4CAF50', fontWeight: 600 }}>July 28-30th, 2025 | UNILAG, Lagos, Nigeria</span>
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="about-section">
              <h3>Who Should Attend?</h3>
              <p>
                Forward-thinkers, innovators, students, and professionals in civil and environmental engineering, as well as anyone passionate about sustainability and real-world impact.
              </p>
            </div>
            <div className="about-section">
              <h3>What to Expect</h3>
              <ul className="themes-list">
                <li><strong>Day 1 – Virtual Conference:</strong> Dynamic sessions with top industry minds shaping the future of civil and environmental engineering.</li>
                <li><strong>Day 2 – Community Impact Project:</strong> Student-led projects creating tangible impacts within local communities.</li>
                <li><strong>Day 3 – Grand Finale:</strong> Panel discussions, CC6 Nexus innovation challenge, awards, recognitions, and more.</li>
              </ul>
            </div>
            <div className="about-section">
              <h3>Why You Should Register</h3>
              <ul className="themes-list">
                <li>✔️ Quality networking with students and professionals</li>
                <li>✔️ Career-defining opportunities</li>
                <li>✔️ Live Q&A sessions and expert insights</li>
                <li>✔️ Internship leads, giveaways, food, and fun!</li>
              </ul>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">6.0</div>
              <div className="stat-label">Conference Edition</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Days</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">UNILAG</div>
              <div className="stat-label">Host</div>
            </div>
          </div>
        </div>
        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h4>Networking</h4>
            <p>Connect with students, professionals, and industry leaders.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💡</div>
            <h4>Innovation</h4>
            <p>Participate in the CC6 Nexus innovation challenge and showcase your ideas.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h4>Community Impact</h4>
            <p>Be part of student-led projects making a real difference in local communities.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎁</div>
            <h4>Fun & Giveaways</h4>
            <p>Enjoy food, prizes, and memorable experiences throughout the event.</p>
          </div>
        </div>
        <div className="about-sdgs">
          <h3>Relevant Sustainable Development Goals (SDGs)</h3>
          <ul className="sdg-list">
            {SDG_GOALS.map(goal => (
              <li key={goal}><span className="sdg-icon">🌱</span>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About; 