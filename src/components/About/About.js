import React, { useContext } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            I'm in my final year of Computer Science studies at the University
            of Toronto, and I'm seeking <strong>full-time or internship</strong>{" "}
            opportunities in <strong>game development or programming</strong>.
            <br />
            <br />
            When I'm not coding, I can be found painting on my iPad or
            crocheting amigurumi (small yarn dolls). Currently, I'm also playing{" "}
            <strong>Dwarf Fortress</strong> and <strong>Hades</strong>. Let me
            know if you have any recommendations for games with immersive
            worldbuilding!
          </p>
        </div>
        <div className="about-img">
          <img
            src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
