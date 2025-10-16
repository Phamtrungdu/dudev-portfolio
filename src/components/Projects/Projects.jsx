// filepath: src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import { PROJECTS } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  // State để theo dõi số lượng dự án hiển thị, ban đầu là 6
  const [visibleCount, setVisibleCount] = useState(6);

  // Hàm xử lý khi nhấn nút "Xem thêm"
  const handleLoadMore = () => {
    // Hiển thị tất cả các dự án
    setVisibleCount(PROJECTS.length);
  };

  return (
    <section id="projects" className="projects-container">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {/* Chỉ hiển thị số lượng dự án trong `visibleCount` */}
          {PROJECTS.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.title} details={project} />
          ))}
        </div>

        {/* Chỉ hiển thị nút "Xem thêm" nếu vẫn còn dự án chưa hiển thị */}
        {visibleCount < PROJECTS.length && (
          <button onClick={handleLoadMore} className="load-more-btn">
            Xem thêm
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;