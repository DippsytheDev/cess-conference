import React from 'react';
import Gallery from './Gallery';

const team = [
  {
    id: 1,
    name: 'Chinedu Eze',
    title: 'Conference Chair',
    organization: 'CESS Conference',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    shortBio: 'Leads the organizing committee and event vision.',
    bio: 'Chinedu is passionate about youth empowerment and sustainability. He has chaired the CESS Conference for 3 years.',
    socialMedia: {
      linkedin: '#'
    },
    contact: {
      email: 'chinedu@cessconf.org'
    }
  },
  {
    id: 2,
    name: 'Fatima Musa',
    title: 'Program Coordinator',
    organization: 'CESS Conference',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    shortBio: 'Coordinates sessions and speaker logistics.',
    bio: 'Fatima ensures the smooth running of all conference sessions and manages speaker relations.',
    socialMedia: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Samuel Adeyemi',
    title: 'Media & Publicity Lead',
    organization: 'CESS Conference',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    shortBio: 'Handles media outreach and publicity.',
    bio: 'Samuel is responsible for all media communications and public engagement for the conference.',
    socialMedia: {
      twitter: '#'
    },
    contact: {
      email: 'samuel@cessconf.org'
    }
  }
];

const Team = () => (
  <Gallery
    title="Meet the Team"
    subtitle="The passionate people behind CESS Conference 6.0"
    people={team}
    className="team-gallery"
  />
);

export default Team; 