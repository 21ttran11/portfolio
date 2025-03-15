import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ role, images, title, video, description, description2, technologies, contributions, itchlink, gitlink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="project-widget">
      {/* Video & Description Section */}
      <div className="video-section">
        <div className="video-description">
          <h1>{title}</h1>
          <div className="links">
            {itchlink && <a href={itchlink} target="_blank" rel="noopener noreferrer">Itch.io</a>}
            {gitlink && <a href={gitlink} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div>
          <p>{description}</p>
          <p>{description2}</p>
        </div>
        <div className="video">
          <iframe width="700" height="394"
            src={video}>
          </iframe>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="project-card">
        <div className="project-card-image">
          <div className="image-container">
            <img className = "thumbnail" src={images[currentImageIndex].src} alt={`${title} thumbnail`} />
            <p className="image-caption">{images[currentImageIndex].caption}</p>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Role, Contributions & Technologies */}
        <div className="project-card-details">
          <div className="details-content">
            <div className="contributions">
              <h3>{role}</h3>
              <p>{contributions}</p>
            </div>

            <div className="technologies">
              <h3>Technologies</h3>
              <div className="logos">
                {technologies.map((tech, index) => (
                  <img key={index} src={tech} alt="Technology logo" className="tech-logo"/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
