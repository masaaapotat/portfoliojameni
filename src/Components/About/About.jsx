import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a seasoned mobile developer, I have a deep passion for crafting
              exceptional mobile applications that provide seamless and
              intuitive user experiences.
            </p>
            <p>
              Whether it's a sleek consumer app or a robust enterprise solution,
              I am dedicated to delivering top-notch quality and innovation in
              every project I undertake.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <p>BOOTSTRAP</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <p>NEXTJS</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
