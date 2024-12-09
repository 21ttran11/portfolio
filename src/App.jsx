import React, { useState } from 'react';
import Header from './Header.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import Footer from './Footer.jsx';
import './index.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'project1',
      title: 'Dungeon Quest',
      description: 'A thrilling adventure through dangerous dungeons.',
      details: 'Embark on a journey through perilous dungeons. Battle monsters, find treasure, and solve puzzles to uncover ancient secrets.',
    },
    {
      id: 'project2',
      title: 'Space Explorer',
      description: 'Explore the universe and discover new planets.',
      details: 'Pilot your spaceship across the galaxy. Discover alien worlds, mine resources, and survive the unknown.',
    },
    {
      id: 'project3',
      title: 'Puzzle Master',
      description: 'Test your brain with challenging puzzles.',
      details: 'Challenge yourself with hundreds of mind-bending puzzles. Perfect for anyone who loves a good brain teaser.',
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <section className="projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </section>
        {selectedProject && (
          <ProjectDetails
            title={selectedProject.title}
            description={selectedProject.details}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

