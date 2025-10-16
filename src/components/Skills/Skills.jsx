import React from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {SKILLS.map((category) => (
            <div key={category.title} className="skill-category-card">
              <h3 className="category-title">{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;