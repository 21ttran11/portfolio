import React from 'react';

const ProjectDetails = ({ gitlink, itchlink, img, title, description, technologies, contributions, onClose }) => (
  <section className="details">
    <img src={img} alt={`${title} thumbnail`} className="project-card-img" />
    <button onClick={onClose}>Close</button>
    <h2>{title}</h2>
    <a href={itchlink} target="_blank" rel="noopener noreferrer">Itch.io </a>
    <a href={gitlink} target="_blank" rel="noopener noreferrer"> GitHub</a>
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
  </section>
);

export default ProjectDetails;
