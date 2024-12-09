import React from 'react';

const ProjectDetails = ({ title, description, onClose }) => (
  <section className="details">
    <button onClick={onClose}>Close</button>
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
);

export default ProjectDetails;
