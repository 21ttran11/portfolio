import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ img, title, description, onClick }) => (
  <div className="project-card" onClick={onClick}>
    <img src={img} alt={`${title} thumbnail`} className="project-card-img"/>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
