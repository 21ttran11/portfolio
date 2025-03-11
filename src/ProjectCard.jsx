import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ images, title, description, technologies, contributions, itchlink, gitlink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="project-card">
      <div className="project-card-image">
        <button className="nav-button left" onClick={prevImage}>&#8592;</button>
        <img src={images[currentImageIndex]} alt={`${title} thumbnail`} />
        <button className="nav-button right" onClick={nextImage}>&#8594;</button>
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
};

export default ProjectCard;
