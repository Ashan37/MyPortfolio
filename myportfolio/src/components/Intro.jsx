import React from "react";
import "../styles/intro.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-container">
        <div className="intro-left">
          <span className="hello">Hello,</span>
          <h1 className="introText">
            I'm <span className="introName">Ashan</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="introPara">
            Full Stack Developer skilled in building scalable web applications
            with both front-end and back-end technologies. Passionate about
            clean code and continuous learning.
          </p>
          <Link to="/contact">
            <button className="hire-button">Hire Me</button>
          </Link>
        </div>
        <div className="intro-right">
          <img src="./src/assets/mypic.png" alt="Ashan" className="intro-img" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
