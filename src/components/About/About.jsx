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
              I am a Web Developer with over 1.5 years of experience in website development, specializing in the WordPress platform. I am passionate about creating modern, SEO-friendly websites that are optimized for performance and provide a smooth user experience.
            </p>
            <p>
              I am proficient in HTML, CSS, JavaScript, and WordPress (Elementor, theme & plugin), with hands-on experience in speed optimization, data structure, and On-page SEO techniques. I am constantly learning new technologies to enhance my skills and build professional, fast, and user-friendly web products.
            </p>
            {/* --- KHỐI THÔNG TIN HỌC VẤN (TÁCH DÒNG) --- */}
            <div className="education-block">
              <div className="education-list">
                <div className="education-item">
                  <span className="edu-value">🎓 Trường Cao đẳng Công nghệ Thủ Đức</span>
                </div>
                <div className="education-item">
                  <span className="edu-label">Chuyên ngành: </span>
                  <span className="edu-value">Công nghệ Thông tin</span>
                </div>
                <div className="education-item">
                  <span className="edu-label">Thời gian</span>
                  <span className="edu-value">2019 — 2023</span>
                </div>
              </div>
            </div>
            <button
              className="super-button"
              onClick={() => window.open("/cv.pdf", "_blank")}
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