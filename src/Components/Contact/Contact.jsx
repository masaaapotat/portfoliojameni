import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    setResult("");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4cacee4-f574-43ec-90e2-65c011a5a318");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        event.target.reset(); // Clear form fields
        alert("Email sent successfully!"); // Show success alert
      } else {
        console.error("Error in form submission:", data.message);
        alert("Failed to submit form: " + data.message); // Show error alert
      }
    } catch (error) {
      console.error("Network error:", error.message);
      alert("Failed to submit form due to network error"); // Show network error alert
    } finally {
      setResult(""); // Clear result message from UI
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In touch</h1>
        <img src={theme_pattern} alt="Pattern" />
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
              <img src={mail_icon} alt="Email" />
              <p>masaa@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Mombasa</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+254 712 345 678</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <label htmlFor="message">Your Message</label>
          <textarea name="message" rows="10" placeholder="Message" required></textarea>
          <button type="submit">Submit now</button>
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
