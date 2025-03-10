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
      img: 'https://img.itch.zone/aW1nLzE1OTI1ODI1LnBuZw==/original/KXaELM.png',
      id: 'project1',
      title: "Zuk's Delivery",
      description: '2D adventure game',
      details: 'This summer, Zuk has picked up a part-time job as a delivery driver in hopes of discovering what more his world has to offer while making bank. But, the job description didn’t mention the twisty roads of…interdimensional travel? Join Zuk, his heelies, and carnivores, as they fight against the vegans!',
      technologies: "Unity2D",
      contributions: "Gameplay",
      itchlink: 'https://pomjellies.itch.io/zuks-delivery',
      gitlink: 'https://github.com/21ttran11/ZuksDelivery'
    },
    {
      img: 'https://img.itch.zone/aW1hZ2UvMzA5NDc0Ny8xODUwMzY5Ni5wbmc=/794x1000/0hX8%2BN.png',
      id: 'project2',
      title: 'Wave Rave',
      description: 'Rhythm game',
      details: 'Dive into the ocean and face enemies in a suspenseful musical battle',
      technologies: "Unity2D",
      contributions: "Gameplay",
      itchlink: 'https://pomjellies.itch.io/wave-rave',
      gitlink: 'https://github.com/21ttran11/RhythmGame'
    },
    {
      id: 'project3',
      title: 'EnvironCo',
      description: 'Educational game about saving the environment',
      details: 'Play through a series of mini-games that teach you how to save energy in order to pass the EnvironCo inspection.',
      technologies: "Unity2D",
      contributions: "Gameplay"
    },
  ];

  return (
    <div>
      <Header />
      <Links />

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
          <section className="projects">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
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
          <section>
            <h2>Projects</h2>
            <p>Details about other projects will go here.</p>
          </section>
        )}

        {activeTab === 'resume' && (
          <section className="tab-content resume">
            <a href="Resume.pdf" download="Resume.pdf">
              <button>Download Resume</button>
            </a>
            <img src="src/Resume.jpg" alt="Resume Display" width="800" height="auto"></img>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
