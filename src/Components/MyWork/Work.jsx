import React from "react";
import "./Work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Work = () => {
  return (
    <div className="work">
      <div className="work-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="work-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="my-workshoremore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Work;