import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: {
      day: "Day 1 - July 28",
      theme: "Virtual Conference",
      sessions: [
        {
          time: "09:00 - 09:30",
          title: "Opening Ceremony",
          speaker: "CESS Executive",
          type: "Opening",
          location: "Virtual Platform"
        },
        {
          time: "09:30 - 10:30",
          title: "Energy and Environment Nexus",
          speaker: "Industry Expert",
          type: "Keynote",
          location: "Virtual Platform"
        },
        {
          time: "10:30 - 11:00",
          title: "Virtual Coffee Break",
          type: "Networking",
          location: "Virtual Lounge"
        },
        {
          time: "11:00 - 12:30",
          title: "Civil Engineering Innovations",
          speaker: "Engineering Professionals",
          type: "Panel",
          location: "Virtual Platform"
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch Break",
          type: "Break",
          location: "Virtual"
        },
        {
          time: "14:00 - 15:30",
          title: "Environmental Engineering Solutions",
          speaker: "Environmental Experts",
          type: "Workshop",
          location: "Virtual Platform"
        },
        {
          time: "15:30 - 16:00",
          title: "Afternoon Break",
          type: "Networking",
          location: "Virtual Lounge"
        },
        {
          time: "16:00 - 17:30",
          title: "Live Q&A Session",
          type: "Interactive",
          location: "Virtual Platform"
        }
      ]
    },
    2: {
      day: "Day 2 - July 29",
      theme: "Community Impact Project",
      sessions: [
        {
          time: "08:00 - 09:00",
          title: "Project Briefing",
          speaker: "CESS Team",
          type: "Briefing",
          location: "UNILAG Campus"
        },
        {
          time: "09:00 - 12:00",
          title: "Student-Led Community Projects",
          type: "Project Work",
          location: "Local Communities"
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch & Project Discussion",
          type: "Networking",
          location: "Project Sites"
        },
        {
          time: "13:00 - 16:00",
          title: "Community Impact Implementation",
          type: "Project Work",
          location: "Local Communities"
        },
        {
          time: "16:00 - 17:00",
          title: "Project Presentations",
          type: "Presentation",
          location: "UNILAG Campus"
        },
        {
          time: "17:00 - 18:00",
          title: "Community Feedback Session",
          type: "Interactive",
          location: "UNILAG Campus"
        }
      ]
    },
    3: {
      day: "Day 3 - July 30",
      theme: "Grand Finale",
      sessions: [
        {
          time: "09:00 - 09:30",
          title: "Day 3 Opening",
          speaker: "CESS Executive",
          type: "Opening",
          location: "UNILAG Campus"
        },
        {
          time: "09:30 - 11:00",
          title: "CC6 Nexus Innovation Challenge",
          type: "Competition",
          location: "Main Hall"
        },
        {
          time: "11:00 - 11:30",
          title: "Coffee Break",
          type: "Networking",
          location: "Exhibition Area"
        },
        {
          time: "11:30 - 13:00",
          title: "Panel Discussions",
          speakers: "Industry Leaders",
          type: "Panel",
          location: "Main Hall"
        },
        {
          time: "13:00 - 14:00",
          title: "Lunch & Networking",
          type: "Networking",
          location: "Dining Hall"
        },
        {
          time: "14:00 - 15:30",
          title: "Awards & Recognition Ceremony",
          type: "Ceremony",
          location: "Main Hall"
        },
        {
          time: "15:30 - 16:00",
          title: "Closing Remarks",
          type: "Closing",
          location: "Main Hall"
        },
        {
          time: "16:00 - 18:00",
          title: "Networking & Giveaways",
          type: "Networking",
          location: "Exhibition Area"
        }
      ]
    }
  };

  const getSessionTypeColor = (type) => {
    const colors = {
      'Keynote': '#4CAF50',
      'Workshop': '#2196F3',
      'Panel': '#FF9800',
      'Presentation': '#9C27B0',
      'Networking': '#607D8B',
      'Opening': '#E91E63',
      'Closing': '#795548',
      'Exhibition': '#00BCD4',
      'Project Work': '#FF5722',
      'Competition': '#9C27B0',
      'Ceremony': '#E91E63',
      'Interactive': '#4CAF50',
      'Briefing': '#2196F3',
      'Break': '#757575'
    };
    return colors[type] || '#757575';
  };

  return (
    <section id="schedule" className="schedule">
      <div className="schedule-container">
        <div className="schedule-header">
          <h2 className="section-title">Conference Schedule</h2>
          <p className="section-subtitle">
            Three transformative days: Virtual Conference, Community Impact, and Grand Finale
          </p>
        </div>
        
        <div className="schedule-tabs">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              className={`schedule-tab ${activeDay === parseInt(day) ? 'active' : ''}`}
              onClick={() => setActiveDay(parseInt(day))}
            >
              {scheduleData[day].day}
            </button>
          ))}
        </div>
        
        <div className="schedule-content">
          <div className="day-theme">
            <h3>{scheduleData[activeDay].theme}</h3>
          </div>
          
          <div className="sessions-list">
            {scheduleData[activeDay].sessions.map((session, index) => (
              <div key={index} className="session-item">
                <div className="session-time">{session.time}</div>
                <div className="session-details">
                  <h4 className="session-title">{session.title}</h4>
                  {session.speaker && (
                    <p className="session-speaker">{session.speaker}</p>
                  )}
                  {session.speakers && (
                    <p className="session-speaker">{session.speakers}</p>
                  )}
                  <p className="session-location">{session.location}</p>
                </div>
                <div 
                  className="session-type"
                  style={{ backgroundColor: getSessionTypeColor(session.type) }}
                >
                  {session.type}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="schedule-legend">
          <h4>Session Types:</h4>
          <div className="legend-items">
            {['Keynote', 'Workshop', 'Panel', 'Presentation', 'Networking', 'Project Work', 'Competition'].map((type) => (
              <div key={type} className="legend-item">
                <span 
                  className="legend-color"
                  style={{ backgroundColor: getSessionTypeColor(type) }}
                ></span>
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 