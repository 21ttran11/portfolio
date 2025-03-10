import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ img, title, description, technologies, contributions, itchlink, gitlink }) => (
  <div className="project-card">
    <div className="project-card-image">
      <img src={img} alt={`${title} thumbnail`} />
    </div>
    <div className="project-card-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="details-content">
        <div className="technologies">
          <h3>Technologies</h3>
          <p>{technologies}</p>
        </div>
        <div className="contributions">
          <h3>Contributions</h3>
          <p>{contributions}</p>
        </div>
      </div>
      <div className="links">
        {itchlink && <a href={itchlink} target="_blank" rel="noopener noreferrer">Itch.io</a>}
        {gitlink && <a href={gitlink} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  </div>
);

export default ProjectCard;
