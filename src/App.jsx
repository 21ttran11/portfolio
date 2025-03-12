import React, { useState } from 'react';
import Header from './Header.jsx';
import Links from './Links.jsx';
import ProjectCard from './ProjectCard.jsx';
import Footer from './Footer.jsx';
import './index.css';
import './tabs.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('games');

  const projects = [
    {
      images: [
        'src/assets/Zuk/SpeechBubble.gif',
        'src/assets/Zuk/SpeechBubble.gif',
        'src/assets/Zuk/SpeechBubble.gif'
      ],
      id: 'project1',
      title: "Zuk's Delivery [SGDA 2024 Mini-Grant Recipient]",
      description: '2D adventure game',
      details: 'This summer, Zuk has picked up a part-time job as a delivery driver...',
      technologies: "Unity2D",
      contributions: "Gameplay",
      itchlink: 'https://pomjellies.itch.io/zuks-delivery',
      gitlink: 'https://github.com/21ttran11/ZuksDelivery'
    },
    {
      images: [
        'https://img.itch.zone/aW1hZ2UvMzA5NDc0Ny8xODUwMzY5Ni5wbmc=/794x1000/0hX8%2BN.png',
        'https://media.giphy.com/media/example3.gif',
        'https://media.giphy.com/media/example4.gif'
      ],
      id: 'project2',
      title: 'Wave Rave',
      description: 'Rhythm game',
      details: 'Dive into the ocean and face enemies in a suspenseful musical battle',
      technologies: "Unity2D",
      contributions: "Gameplay",
      itchlink: 'https://pomjellies.itch.io/wave-rave',
      gitlink: 'https://github.com/21ttran11/RhythmGame'
    }
  ];

  return (
    <div>
      <Header />
      <div className="skills">
        <embed src="src/assets/UML.svg" width="auto" height="auto"
        type="image/svg+xml"
        pluginspage="http://www.adobe.com/svg/viewer/install/" /> 
      </div>
      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'games' ? 'active' : ''}`} onClick={() => setActiveTab('games')}>
            games
          </button>
          <button className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
            projects
          </button>
          <button className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`} onClick={() => setActiveTab('resume')}>
            resume
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <main className={`tab-content ${activeTab}`}>
        {activeTab === 'games' && (
          <section className="games">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                images={project.images} 
                title={project.title}
                description={project.details}
                technologies={project.technologies}
                contributions={project.contributions}
                itchlink={project.itchlink}
                gitlink={project.gitlink}
              />
            ))}
          </section>
        )}

        {activeTab === 'projects' && (
            <section className="projects">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                images={project.images}
                title={project.title}
                description={project.details}
                technologies={project.technologies}
                contributions={project.contributions}
                itchlink={project.itchlink}
                gitlink={project.gitlink}
              />
            ))}
          </section>
        )}

        {activeTab === 'resume' && (
          <section className="tab-content resume">
            <a href="Resume.pdf" download="Resume.pdf">
              <button>Download Resume</button>
            </a>
            <img src="src/assets/Resume.jpg" alt="Resume Display" width="800" height="auto"></img>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
