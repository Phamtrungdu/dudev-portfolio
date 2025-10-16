// filepath: src/components/Projects/ProjectCard/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
  const isInactive = details.status !== 'Hoạt động';

  // Tạo đường dẫn ảnh chính xác cho cả môi trường local và khi đã deploy
  // Nó sẽ tự động thêm "/dudev-portfolio/" vào trước đường dẫn ảnh
  const imageUrl = `${import.meta.env.BASE_URL}${details.image.replace(/^\//, '')}`;

  return (
    <div className="project-card">
      <div className="project-image">
        {/* Sử dụng biến imageUrl đã được xử lý */}
        <img src={imageUrl} alt={details.title} />
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