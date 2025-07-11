import React from 'react';
import Gallery from './Gallery';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Sustainability Officer",
      organization: "GreenTech Solutions",
      topic: "Circular Economy Implementation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      shortBio: "Leading expert in circular economy with 15+ years experience in sustainable business transformation.",
      bio: "Dr. Sarah Chen is a leading expert in circular economy with over 15 years of experience in sustainable business transformation. She has worked with Fortune 500 companies to implement green strategies and is a frequent keynote speaker at global sustainability forums.",
      socialMedia: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Climate Scientist",
      organization: "Global Climate Institute",
      topic: "Climate Action Strategies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      shortBio: "Renowned climate researcher specializing in carbon reduction strategies and policy development.",
      bio: "Marcus Rodriguez is a renowned climate researcher specializing in carbon reduction strategies and policy development. He has published over 50 papers and advises international organizations on climate action.",
      socialMedia: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Renewable Energy Expert",
      organization: "Solar Future Inc.",
      topic: "Clean Energy Transition",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      shortBio: "Pioneer in renewable energy technologies with breakthrough innovations in solar efficiency.",
      bio: "Dr. Emily Watson is a pioneer in renewable energy technologies, with breakthrough innovations in solar efficiency. She leads research teams and consults for governments on clean energy transition.",
      socialMedia: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "James Thompson",
      title: "Urban Planning Director",
      organization: "Smart Cities Initiative",
      topic: "Sustainable Infrastructure",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      shortBio: "Expert in sustainable urban development and smart city infrastructure planning.",
      bio: "James Thompson is an expert in sustainable urban development and smart city infrastructure planning. He has overseen major city projects and is a consultant for international smart city initiatives.",
      socialMedia: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      title: "Environmental Policy Advisor",
      organization: "United Nations",
      topic: "Global Sustainability Policy",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      shortBio: "International policy expert advising governments on environmental regulations and sustainability frameworks.",
      bio: "Dr. Lisa Park is an international policy expert advising governments on environmental regulations and sustainability frameworks. She has contributed to several UN sustainability reports.",
      socialMedia: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Alex Johnson",
      title: "Water Conservation Specialist",
      organization: "AquaTech Systems",
      topic: "Water Resource Management",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      shortBio: "Leading authority on water conservation technologies and sustainable water management systems.",
      bio: "Alex Johnson is a leading authority on water conservation technologies and sustainable water management systems. He has developed award-winning solutions for water-scarce regions.",
      socialMedia: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <Gallery
      title="Featured Speakers"
      subtitle="Learn from the world's leading sustainability experts and innovators"
      people={speakers}
      className="speakers-gallery"
    />
  );
};

export default Speakers; 