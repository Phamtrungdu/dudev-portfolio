import React from 'react';
import './About.css';
// Thay thế bằng hình ảnh của bạn
import aboutImage from '../../assets/images/img_about.png';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="container about-content-wrapper">
        <h2 className="section-title">About Me</h2>
        <span className="about-subtitle">Transforming ideas into digital experiences</span>
        <div className="about-content">
          <div className="about-details">
            <h3>Hello, I'm Du</h3>
            <p>
             About Me

I'm a WordPress Developer with 1.5+ years of experience
building and customizing websites using WordPress,
Elementor, and modern front-end technologies.

I specialize in developing responsive, high-performance,
and SEO-friendly websites for business and e-commerce.

My experience includes customizing WordPress themes,
optimizing website performance, and improving user
experience across desktop and mobile devices.

I enjoy creating clean, fast, and user-friendly websites
that help businesses grow online.
            </p>
            {/* --- KHỐI THÔNG TIN HỌC VẤN (TÁCH DÒNG) --- */}
            <div className="education-block">
  <div className="education-list">
    <div className="education-item">
      <span className="edu-value">🎓 Thu Duc College of Technology</span>
    </div>
    <div className="education-item">
      <span className="edu-label">Major: </span>
      <span className="edu-value">Information Technology</span>
    </div>
    <div className="education-item">
      <span className="edu-label">Duration: </span>
      <span className="edu-value">2019 — 2022</span>
    </div>
  </div>
</div>
            <button
              className="super-button"
              onClick={() => window.open("/dudev-portfolio/Pham-Trung-Du.pdf", "_blank")}
            >
              <span>View CV</span>
              👁️
            </button>

          </div>
          <div className="about-image">
            <div className="image-border-container">
              <img src={aboutImage} alt="About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;