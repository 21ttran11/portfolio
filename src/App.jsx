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
      contributions: "Gameplay",
      itchlink: 'https://pomjellies.itch.io/zuks-delivery',
      gitlink: 'https://github.com/21ttran11/ZuksDelivery'
    },
    {
      img: 'https://img.itch.zone/aW1hZ2UvMzA5NDc0Ny8xODUwMzY5Ni5wbmc=/794x1000/0hX8%2BN.png',
      id: 'project2',
      title: 'Wave Rave',
      description: 'Rhythm game',
      details: 'Dive into the ocean and face enemies in a suspensful musical battle',
      technologies: "Unity2D",
      contributions: "Gameplay",
      itchlink: 'https://pomjellies.itch.io/wave-rave',
      gitlink: 'https://github.com/21ttran11/RhythmGame'
    },
    {
      id: 'project3',
      title: 'EnvironCo',
      description: 'Educational game about saving the environment',
      details: 'Play through a series of mini-games that teaches you how to save envergy in order to pass he Environoco inspection.',
      technologies: "Unity2D",
      contributions: "Gameplay"
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // This can be replaced with a backend call later to actually send an email.
    setFormData({ name: '', email: '', message: '' });
  };

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
            itchlink={selectedProject.itchlink}
            gitlink={selectedProject.gitlink}
            onClose={() => setSelectedProject(null)}
          />
        )}
        <section className="contact-me">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </label>
            <label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
