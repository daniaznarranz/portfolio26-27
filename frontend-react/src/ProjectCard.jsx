import React, { useRef } from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onSelect }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within the card
    const y = e.clientY - rect.top;  // y coordinate within the card

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    // No transform reset needed as transform was removed
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(project);
    }
  };

  return (
    <div 
      className="project-card glass-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="project-card-image-wrapper">
        <img src={project.image} alt={project.title} className="project-card-image" />
        <span className="project-card-category">{project.category}</span>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="project-card-tag">{tech}</span>
          ))}
        </div>
        <span className="project-card-link">
          Ver Detalles &rarr;
        </span>
      </div>
    </div>
  );
}
