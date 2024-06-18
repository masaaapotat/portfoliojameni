import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Correct import statement

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Masaa,</span> a mobile developer, based in Mombasa, Kenya.</h1>
      <p>
        I specialize in creating innovative and user-friendly mobile
        applications. With a strong background in both Android and iOS
        development, I bring a passion for technology and a dedication to
        delivering high-quality solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
