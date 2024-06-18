import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get In touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's work together</h1>
          <p>
            Feel free to get in touch with me. Whether you have a project in
            mind, need assistance with your mobile development needs, or just
            want to chat about the latest tech trends, I'm here to help. I look
            forward to collaborating and creating innovative solutions together.
            Let's turn your ideas into reality!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>masaa@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Mombasa</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+254 712 345 678</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label htmlFor=" Name">Your Name</label>
          <input type="text" placeholder="Enter Name" name="name" />
          <label htmlFor="Email"> Your Email</label>
          <input type="email" placeholder="Enter Email" name="email" />
          <label htmlFor=" Message">Your Message</label>
          <textarea name="" rows="10" placeholder="Message"></textarea>
          <button type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
