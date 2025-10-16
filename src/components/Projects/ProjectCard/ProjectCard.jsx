// filepath: src/components/Projects/ProjectCard/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
  const isInactive = details.status !== 'Hoạt động';

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={details.image} alt={details.title} />
        <div className={`project-status ${isInactive ? 'inactive' : 'active'}`}>
          <span className="status-dot"></span>
          {details.status}
        </div>
      </div>
      <div className="project-details">
        <h3 className="project-title">{details.title}</h3>
        <p className="project-description">{details.description}</p>
        <div className="project-tags">
          {details.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={details.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-btn ${isInactive ? 'disabled' : ''}`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;