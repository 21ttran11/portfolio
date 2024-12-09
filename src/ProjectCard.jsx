import React from 'react';

const ProjectCard = ({ title, description, onClick }) => (
  <div className="project-card" onClick={onClick}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
