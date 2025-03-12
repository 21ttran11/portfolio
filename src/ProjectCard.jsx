import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ role, images, title, video, description, technologies, contributions, itchlink, gitlink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="project-widget">
      <div className="video-section">
        <div className="video-description">
          <h2>{title}</h2>
          <div className="links">
            {itchlink && <a href={itchlink} target="_blank" rel="noopener noreferrer">Itch.io</a>}
            {gitlink && <a href={gitlink} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
          <p>{description}</p>
        </div>
        <div className="video">
          <video controls>
            <source src={video} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="project-card">
      <div className="project-card-image">
        <button className="nav-button left" onClick={prevImage}>&#8592;</button>
        <img src={images[currentImageIndex]} alt={`${title} thumbnail`} />
        <p>caption</p>
        <button className="nav-button right" onClick={nextImage}>&#8594;</button>
      </div>
      <div className="project-card-details">
        <div className="details-content">
        <div className="contributions">
            <h3>{role}</h3>
            <p>{contributions}</p>
        </div>          
          <div className="technologies">
            <h3>Technologies</h3>
            <div className="logos">
              <embed src={technologies} width="auto" height="100"
              type="image/svg+xml"
              pluginspage="http://www.adobe.com/svg/viewer/install/" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ProjectCard;
