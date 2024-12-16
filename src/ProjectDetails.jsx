import React from 'react';

const ProjectDetails = ({ img, title, description, technologies, contributions, onClose }) => (
  <section className="details">
    <img src={img} alt={`${title} thumbnail`} className="project-card-img" />
    <button onClick={onClose}>Close</button>
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
  </section>
);

export default ProjectDetails;
