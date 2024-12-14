import React from 'react';

const ProjectDetails = ({ img, title, description, onClose }) => (
  <section className="details">
    <img src={img} alt={`${title} thumbnail`} className="project-card-img"/>
    <button onClick={onClose}>Close</button>
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
);

export default ProjectDetails;
