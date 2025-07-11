import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ title, subtitle, people, className = '' }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <section className={`gallery-section ${className}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="gallery-grid">
          {people.map((person, index) => (
            <div key={index} className="gallery-card" onClick={() => openModal(person)}>
              <div className="card-image">
                <img src={person.image} alt={person.name} />
                <div className="card-overlay">
                  <span className="view-details">View Details</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-name">{person.name}</h3>
                <p className="card-title">{person.title}</p>
                {person.shortBio && (
                  <p className="card-bio">{person.shortBio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedPerson && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <div className="modal-image">
                <img src={selectedPerson.image} alt={selectedPerson.name} />
              </div>
              <div className="modal-info">
                <h2 className="modal-name">{selectedPerson.name}</h2>
                <p className="modal-title">{selectedPerson.title}</p>
                {selectedPerson.organization && (
                  <p className="modal-organization">{selectedPerson.organization}</p>
                )}
              </div>
            </div>
            <div className="modal-body">
              {selectedPerson.bio && (
                <div className="modal-bio">
                  <h3>Biography</h3>
                  <p>{selectedPerson.bio}</p>
                </div>
              )}
              {selectedPerson.expertise && (
                <div className="modal-expertise">
                  <h3>Areas of Expertise</h3>
                  <ul>
                    {selectedPerson.expertise.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedPerson.achievements && (
                <div className="modal-achievements">
                  <h3>Key Achievements</h3>
                  <ul>
                    {selectedPerson.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {(selectedPerson.socialMedia || selectedPerson.contact) && (
                <div className="modal-contact">
                  <h3>Connect</h3>
                  <div className="contact-links">
                    {selectedPerson.socialMedia && (
                      <div className="social-links">
                        {selectedPerson.socialMedia.linkedin && (
                          <a href={selectedPerson.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i> LinkedIn
                          </a>
                        )}
                        {selectedPerson.socialMedia.twitter && (
                          <a href={selectedPerson.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i> Twitter
                          </a>
                        )}
                        {selectedPerson.socialMedia.email && (
                          <a href={`mailto:${selectedPerson.socialMedia.email}`}>
                            <i className="fas fa-envelope"></i> Email
                          </a>
                        )}
                      </div>
                    )}
                    {selectedPerson.contact && (
                      <div className="contact-info">
                        {selectedPerson.contact.phone && (
                          <p><i className="fas fa-phone"></i> {selectedPerson.contact.phone}</p>
                        )}
                        {selectedPerson.contact.email && (
                          <p><i className="fas fa-envelope"></i> {selectedPerson.contact.email}</p>
                        )}
                        {selectedPerson.contact.website && (
                          <p><i className="fas fa-globe"></i> <a href={selectedPerson.contact.website} target="_blank" rel="noopener noreferrer">Website</a></p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 