import React from 'react';
import Gallery from './Gallery';

const judges = [
  {
    id: 1,
    name: 'Prof. Michael Green',
    title: 'Professor of Environmental Science',
    organization: 'Eco University',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    shortBio: 'Renowned academic in environmental policy and climate change.',
    bio: 'Prof. Green has published over 100 papers on environmental science and is a frequent advisor to international climate panels.',
    socialMedia: {
      linkedin: '#',
      twitter: '#'
    },
    contact: {
      email: 'mgreen@ecouniversity.edu'
    }
  },
  {
    id: 2,
    name: 'Dr. Aisha Bello',
    title: 'Director of Sustainability',
    organization: 'Green Earth Initiative',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    shortBio: 'Leader in sustainable development and community impact.',
    bio: 'Dr. Bello has led multiple award-winning projects in Africa and Asia, focusing on sustainable urban growth.',
    socialMedia: {
      linkedin: '#'
    },
    contact: {
      email: 'abello@greenearth.org',
      phone: '+234 800 123 4567'
    }
  },
  {
    id: 3,
    name: 'Engr. John Okafor',
    title: 'Energy Systems Engineer',
    organization: 'PowerGrid Solutions',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    shortBio: 'Expert in renewable energy and smart grids.',
    bio: 'Engr. Okafor has designed and implemented smart grid solutions across West Africa.',
    socialMedia: {
      linkedin: '#',
      twitter: '#'
    },
    contact: {
      email: 'jokafor@powergrid.com'
    }
  }
];

const Judges = () => (
  <Gallery
    title="Judges"
    subtitle="Meet our distinguished panel of judges"
    people={judges}
    className="judges-gallery"
  />
);

export default Judges; 