import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left side */}
        <div className="contact-info">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="contact-details">
            <div className="contact-box">
              <span className="icon">📍</span>
              <p>Phù mỹ Đông Gia Lai </p>
            </div>

            <div className="contact-box">
              <span className="icon">📞</span>
              <p>0362861365</p>
            </div>

            <div className="contact-box">
              <span className="icon">📧</span>
              <p>duitdev868@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <form className="contact-form">
          <label>Your Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Your Contact Number</label>
          <input type="text" placeholder="+92 3001234567" />

          <label>Your Message Here</label>
          <textarea rows="5" placeholder="Write your message..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
