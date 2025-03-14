import React, { useState } from 'react';
import Header from './Header.jsx';
import ProjectCard from './ProjectCard.jsx';
import Footer from './Footer.jsx';
import './index.css';
import './tabs.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('games');

  const projects = [
    {
      role: "Team Lead & Programmer",
      images: [
        { src: 'https://giffiles.alphacoders.com/372/37270.gif', caption: 'example 1'},
        { src: 'https://img.itch.zone/aW1hZ2UvOTM2NjQvNDM5MDAwLmdpZg==/original/04jE2Q.gif', caption: 'example 2'}
      ],
      id: 'project1',
      title: "Zuk's Delivery [SGDA 2024 Mini-Grant Recipient]",
      video: "./assets/Zuk/ZukVideo.mp4",
      description: 'This summer, Zuk has picked up a part-time job as a delivery driver in hopes of discovering what more his world has to offer while making bank. But, the job description didn’t mention the twisty roads of…interdimensional travel? Join Zuk, his heelies, and carnivores, as they fight against the vegans!',
      description2: '2D single player adventure platformer with heavy story and narrative elements.',
      technologies: [
        './assets/Logos/Unity.svg',
        './assets/Logos/csharp.svg',
        './assets/Logos/YarnSpinner.svg'
      ],
      contributions: "Implemented gameplay mechanics, managed team workflow...",
      itchlink: 'https://pomjellies.itch.io/zuks-delivery',
      gitlink: 'https://github.com/21ttran11/ZuksDelivery'
    },
    {
      role: "Team Lead & Programmer",
      images: [
        { src: 'https://img.itch.zone/aW1hZ2UvOTM2NjQvNDM5MDAwLmdpZg==/original/04jE2Q.gif', caption: 'example 1' },
        { src: 'https://giffiles.alphacoders.com/372/37270.gif', caption: 'example 2'}
      ],
      id: 'project2',
      title: 'Wave Rave 🫧⋆｡˚🌊',
      description: 'Dive deep into the ocean and engage in exciting sea-themed musical battles with charming storylines. Currently offers a lobster versus shark face-off.',
      description2: 'A quirky rhythm game with rhythm-heaven inspired gameplay and humor.',
      technologies: [
        './assets/Logos/Unity.svg',
        './assets/Logos/csharp.svg',
        './assets/Logos/FMOD.svg',
      ],
      contributions: "Created beat syncing system using FMOD and Unity...",
      itchlink: 'https://pomjellies.itch.io/wave-rave',
      gitlink: 'https://github.com/21ttran11/RhythmGame'
    }
  ];

  const otherProjects = [
    {
      role: "Artist & Writer",
      images: [
        { src: 'https://img.itch.zone/aW1hZ2UvOTM2NjQvNDM5MDAwLmdpZg==/original/04jE2Q.gif', caption: 'example 1' },
        { src: 'https://giffiles.alphacoders.com/372/37270.gif', caption: 'example 2'}
      ],
      id: 'project1',
      title: 'Savor',
      description: '',
      description2: 'Developed in 12 days as a submission to the Unlikely Collaborators Game Jam with the theme "Perception Box". A point and click puzzle game with heavy story and narrative elements.',
      technologies: [
        './assets/Logos/Unity.svg',
        './assets/Logos/FMOD.svg',
      ],
      contributions: "Drew stuff",
      itchlink: 'https://pomjellies.itch.io/wave-rave',
      gitlink: 'https://github.com/21ttran11/RhythmGame'     
    }
  ]

  return (
    <div>
      <Header />
      <div className="skills">
        <img src="./assets/UML.svg" alt="UML Diagram" className="skills-img" />
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'games' ? 'active' : ''}`} onClick={() => setActiveTab('games')}>
            games
          </button>
          <button className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
            +projects
          </button>
          <button className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`} onClick={() => setActiveTab('resume')}>
            resume↓
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <main className={`tab-content ${activeTab}`}>
        {activeTab === 'games' && (
          <section className="games">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="projects">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </section>
        )}

        {activeTab === 'resume' && (
          <section className="tab-content resume">
            <a href="Resume.pdf" download="Resume.pdf">
              <button>Download Resume</button>
            </a>
            <img src="./assets/Resume.jpg" alt="Resume Display" width="800" height="auto" />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
