import React, { useState } from 'react';
import './Registration.css';

const initialFormData = {
  fullName: '',
  whatsapp: '',
  email: '',
  role: '',
  institution: '',
  department: '',
  level: '',
  heardFrom: '',
  days: [],
  accessibility: '',
  contactPermission: '',
};

const levels = [
  '100 LEVEL',
  '200 LEVEL',
  '300 LEVEL',
  '400 LEVEL',
  '500 LEVEL',
  '600 LEVEL',
];

const Registration = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'days') {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, days: [...prev.days, value] };
        } else {
          return { ...prev, days: prev.days.filter((d) => d !== value) };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Registration submitted successfully!');
  };

  return (
    <section id="register" className="registration">
      <div className="registration-container">
        <div className="registration-header">
          <h2 className="section-title">Register Now</h2>
          <p className="section-subtitle">
            Secure your spot at CESS Conference 6.0 - Energy and Environment Nexus
          </p>
        </div>
        <div className="registration-content">
          <div className="pricing-section">
            <h3>Free Registration</h3>
            <div className="pricing-grid">
              <div className="pricing-card selected">
                <div className="pricing-header">
                  <h4>Free Registration</h4>
                  <div className="price">
                    <span className="current-price">₦0</span>
                  </div>
                  <p className="pricing-description">Completely free - Limited time offer</p>
                  <p className="deadline">Available until: July 30, 2025</p>
                </div>
                <ul className="features-list">
                  <li>Full 3-day conference access</li>
                  <li>Virtual conference participation</li>
                  <li>Community impact project involvement</li>
                  <li>Grand finale attendance</li>
                  <li>Networking opportunities</li>
                  <li>Digital certificate</li>
                  <li>Lunch included (Day 2 & 3)</li>
                  <li>Giveaways and fun activities</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="registration-form-section">
            <h3>Complete Your Registration</h3>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h4>Personal Information</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Are you registering as a student or a professional? *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h4>Academic/Professional Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="institution">Institution / Company *</label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="level">Level</label>
                    <select
                      name="level"
                      id="level"
                      value={formData.level}
                      onChange={handleInputChange}
                    >
                      <option value="">Select...</option>
                      {levels.map((lvl) => (
                        <option key={lvl} value={lvl}>{lvl}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h4>Conference Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>How did you hear about the conference? *</label>
                    <select
                      name="heardFrom"
                      value={formData.heardFrom}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="CESS Member">CESS Member</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Email Invite">Email Invite</option>
                      <option value="Friend/Colleague">Friend/Colleague</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Which day(s) will you be attending? *</label>
                    <div className="checkbox-group">
                      <label><input type="checkbox" name="days" value="Day 1" checked={formData.days.includes('Day 1')} onChange={handleInputChange} required={formData.days.length === 0} /> Day 1: 28th July 2025 (Virtual)</label>
                      <label><input type="checkbox" name="days" value="Day 2" checked={formData.days.includes('Day 2')} onChange={handleInputChange} /> Day 2: 29th July 2025 (Community Impact Project)</label>
                      <label><input type="checkbox" name="days" value="Day 3" checked={formData.days.includes('Day 3')} onChange={handleInputChange} /> Day 3: 30th July 2025 (Grand Finale)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <h4>Other Information</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="accessibility">Do you have any accessibility needs or other things we should know?</label>
                    <textarea
                      id="accessibility"
                      name="accessibility"
                      value={formData.accessibility}
                      onChange={handleInputChange}
                      placeholder="Let us know..."
                    />
                  </div>
                  <div className="form-group">
                    <label>Do you give us permission to contact you via WhatsApp or email for updates and reminders about the event? *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="contactPermission" value="YES" checked={formData.contactPermission === 'YES'} onChange={handleInputChange} required /> YES</label>
                      <label><input type="radio" name="contactPermission" value="NO" checked={formData.contactPermission === 'NO'} onChange={handleInputChange} required /> NO</label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                Complete Registration
              </button>
            </form>
          </div>
        </div>
        <div className="registration-info">
          <div className="info-card">
            <h4>📧 Contact Us</h4>
            <p>For Sponsorship, Partnership and Enquiries: cessconferencex.0@gmail.com</p>
          </div>
          <div className="info-card">
            <h4>🔄 Cancellation Policy</h4>
            <p>Free registration - no cancellation fees. Simply let us know if you can't attend.</p>
          </div>
          <div className="info-card">
            <h4>💳 Payment Options</h4>
            <p>This conference is completely free! No payment required.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration; 