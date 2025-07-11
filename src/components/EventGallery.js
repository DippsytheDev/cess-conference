import React, { useState } from 'react';
import './EventGallery.css';

const EventGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const eventPhotos = [
    {
      id: 1,
      title: "CESS Conference 5.0 Opening Ceremony",
      description: "The grand opening of our previous conference with keynote speakers and distinguished guests.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      year: "2023",
      category: "Opening Ceremony"
    },
    {
      id: 2,
      title: "Panel Discussion on Renewable Energy",
      description: "Expert panel discussing the future of renewable energy in Africa.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      year: "2023",
      category: "Panel Discussion"
    },
    {
      id: 3,
      title: "Student Innovation Showcase",
      description: "Young innovators presenting their sustainable solutions to industry experts.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      year: "2023",
      category: "Innovation"
    },
    {
      id: 4,
      title: "Networking Session",
      description: "Participants networking and building connections for future collaborations.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      year: "2023",
      category: "Networking"
    },
    {
      id: 5,
      title: "Award Ceremony",
      description: "Celebrating the achievements of outstanding sustainability projects and innovators.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      year: "2023",
      category: "Awards"
    },
    {
      id: 6,
      title: "Workshop Session",
      description: "Hands-on workshops teaching practical sustainability skills and techniques.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      year: "2023",
      category: "Workshop"
    },
    {
      id: 7,
      title: "Community Impact Day",
      description: "Conference participants engaging with local communities on sustainability projects.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      year: "2023",
      category: "Community"
    },
    {
      id: 8,
      title: "Closing Ceremony",
      description: "The inspiring conclusion of CESS Conference 5.0 with commitments to action.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      year: "2023",
      category: "Closing"
    }
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="event-gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Event Gallery</h2>
          <p className="section-subtitle">
            Relive the moments from previous CESS Conference events
          </p>
        </div>
        
        <div className="photo-gallery-grid">
          {eventPhotos.map((photo) => (
            <div key={photo.id} className="photo-card" onClick={() => openModal(photo)}>
              <div className="photo-image">
                <img src={photo.image} alt={photo.title} />
                <div className="photo-overlay">
                  <div className="photo-info">
                    <h3 className="photo-title">{photo.title}</h3>
                    <p className="photo-category">{photo.category}</p>
                    <p className="photo-year">{photo.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={closeModal}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={closeModal}>×</button>
            
            <div className="photo-modal-image">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            </div>
            
            <div className="photo-modal-info">
              <h2 className="photo-modal-title">{selectedPhoto.title}</h2>
              <p className="photo-modal-description">{selectedPhoto.description}</p>
              <div className="photo-modal-meta">
                <span className="photo-modal-category">{selectedPhoto.category}</span>
                <span className="photo-modal-year">{selectedPhoto.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventGallery; 