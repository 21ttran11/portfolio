import React, { useState } from 'react';
import Header from './Header.jsx';
import Links from './Links.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import Footer from './Footer.jsx';
import './index.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: 'https://i.pinimg.com/736x/11/65/98/116598c0e1216ee32bd8c36e6b8cf91f.jpg',
      id: 'project1',
      title: "Zuk's Delivery",
      description: '2D adventure game',
      details: 'Embark on a journey through perilous dungeons. Battle monsters, find treasure, and solve puzzles to uncover ancient secrets.',
    },
    {
      img: 'https://i.pinimg.com/736x/0f/82/01/0f8201b0a2a280185673e1fc93ecd430.jpg',
      id: 'project2',
      title: 'Wave Rave',
      description: 'Rhythm game',
      details: 'Pilot your spaceship across the galaxy. Discover alien worlds, mine resources, and survive the unknown.',
    },
    {
      img: 'https://i.pinimg.com/736x/49/eb/4a/49eb4a6239fefe4e1f5a46c99b1f8086.jpg',
      id: 'project3',
      title: 'Puzzle Master',
      description: 'Test your brain with challenging puzzles.',
      details: 'Challenge yourself with hundreds of mind-bending puzzles. Perfect for anyone who loves a good brain teaser.',
    },
  ];

  return (
    <div>
      <Header />
      <Links />
      <main>
        <section className="projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              img= {project.img}
              title={project.title}
              description={project.description}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </section>
        {selectedProject && (
          <ProjectDetails
            img = {selectedProject.img}
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

