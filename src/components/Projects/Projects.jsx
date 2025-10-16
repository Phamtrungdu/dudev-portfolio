// filepath: src/components/Projects/Projects.jsx
import React from 'react';
import './Projects.css';
import { PROJECTS } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} details={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;