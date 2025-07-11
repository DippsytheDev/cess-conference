import React from 'react';
import Gallery from './Gallery';

const finalists = [
  {
    id: 1,
    name: 'Team EcoVision',
    title: 'Student Innovators',
    organization: 'University of Lagos',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    shortBio: 'Developed a solar-powered water purification system.',
    bio: 'Team EcoVision is a group of engineering students passionate about clean water access. Their project uses affordable solar tech to purify water for rural communities.',
    socialMedia: {
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'GreenGen Solutions',
    title: 'Startup Finalist',
    organization: 'GreenGen Solutions',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    shortBio: 'Smart waste management for urban areas.',
    bio: 'GreenGen Solutions is a startup focused on IoT-enabled waste collection and recycling, making cities cleaner and greener.',
    socialMedia: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'BioFuture Initiative',
    title: 'Youth Innovators',
    organization: 'BioFuture Initiative',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    shortBio: 'Biodegradable packaging from local crops.',
    bio: 'BioFuture Initiative is a youth-led team creating eco-friendly packaging from cassava and plantain waste, reducing plastic pollution.',
    socialMedia: {
      linkedin: '#'
    }
  }
];

const Finalists = () => (
  <Gallery
    title="Finalists"
    subtitle="Congratulations to our top teams and innovators!"
    people={finalists}
    className="finalists-gallery"
  />
);

export default Finalists; 