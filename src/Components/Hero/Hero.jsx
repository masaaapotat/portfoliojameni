import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";


const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1><span>Hi, Masaa,</span> I'm a mobile developer, based in Mombasa, Kenya.</h1>
      <p>
        I specialize in creating innovative and user-friendly mobile
        applications. With a strong background in both Android and iOS
        development, I bring a passion for technology and a dedication to
        delivering high-quality solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
