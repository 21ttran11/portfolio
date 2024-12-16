import React, { useState } from 'react';
import Header from './Header.jsx';
import Links from './Links.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import Footer from './Footer.jsx';
import Skills from './skills.jsx';
import './index.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: 'https://img.itch.zone/aW1nLzE1OTI1ODI1LnBuZw==/original/KXaELM.png',
      id: 'project1',
      title: "Zuk's Delivery",
      description: '2D adventure game',
      details: 'This summer, Zuk has picked up a part-time job as a delivery driver in hopes of discovering what more his world has to offer while making bank. But, the job description didn’t mention the twisty roads of…interdimensional travel? Join Zuk, his heelies, and carnivores, as they fight against the vegans!',
      technologies: "Unity2D",
      contributions: "Gameplay"
    },
    {
      img: 'https://img.itch.zone/aW1hZ2UvMzA5NDc0Ny8xODUwMzY5Ni5wbmc=/794x1000/0hX8%2BN.png',
      id: 'project2',
      title: 'Wave Rave',
      description: 'Rhythm game',
      details: 'Dive into the ocean and face enemies in a suspensful musical battle',
      technologies: "Unity2D",
      contributions: "Gameplay"
    },
    {
      img: 'https://i.pinimg.com/736x/49/eb/4a/49eb4a6239fefe4e1f5a46c99b1f8086.jpg',
      id: 'project3',
      title: 'Enviro.Co',
      description: 'Educational game about saving the environment',
      details: 'Play through a series of mini-games that teaches you how to save envergy in order to pass he enviro.co inspection.',
      technologies: "Unity2D",
      contributions: "Gameplay"
    },
  ];

  return (
    <div>
      <Header />
      <Links />
      <Skills />
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
            technologies={selectedProject.technologies}
            contributions={selectedProject.contributions}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

