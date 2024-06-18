import React from "react";
import "./Footer.css";
import footer_logo from "./assets/footer_logo.svg";
import user_icon from "./assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footertop-left">
          <img src={footer_logo} alt="" />
          <p>
            As a mobile developer, I continuously strive to enhance my skills
            and stay ahead of the latest trends to deliver cutting-edge
            solutions.My goal is to make a positive impact through technology. I
            am excited to collaborate with you on your next project.
          </p>
        </div>
        <div className="footer-topright">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
       
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
            copyright &copy; 2023 masaa. All rights reserved
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
