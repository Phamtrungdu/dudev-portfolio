import React, { useRef } from "react";
import emailjs from "emailjs-com"; // ✅ Bổ sung dòng import emailjs
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5sjc4i", // ✅ Thay bằng Service ID của bạn
        "template_j9sr7sa", // ✅ Thay bằng Template ID của bạn
        form.current,
        "SbxHGUjhQIkICk1J4" // ✅ Thay bằng Public Key của bạn
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message, please try again!");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-text">
            Have a question, project idea, or just want to say hello?
            Fill out the form or reach me through the contact details below.
            I’ll get back to you as soon as possible!
          </p>

          <div className="contact-details">
            <div className="contact-box">
              <span className="icon">📍</span>
              <p>Phù Mỹ Đông, Gia Lai</p>
            </div>

            <div className="contact-box">
              <span className="icon">📞</span>
              <p>0362 861 365</p>
            </div>

            <div className="contact-box">
              <span className="icon">📧</span>
              <p>duitdev868@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
