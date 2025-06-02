import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitel">What I do</span>
      <span className="skillDesc">
        I'm a Full Stack Developer skilled in building responsive, scalable web
        applications using technologies like React, Node.js, and MongoDB. I
        enjoy solving problems and creating smooth user experiences.
      </span>

      <div className="skillBar">
        <img src="./src/assets/skills/frontend.png" alt="frontend" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Front-End Development</h2>
            <p>I build responsive, accessible interfaces using HTML, CSS, JavaScript, and React to create smooth, user-friendly experiences.</p>
        </div>
      </div>

       <div className="skillBar">
        <img src="./src/assets/skills/backend.png" alt="backend" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Back-End Development</h2>
            <p>I develop scalable, secure server-side applications with Node.js and Express, powering robust APIs and application logic.</p>
        </div>
      </div>

       <div className="skillBar">
        <img src="./src/assets/skills/database.png" alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Database Management</h2>
            <p>I work with MongoDB, and MySQL to design efficient, reliable databases that keep applications fast and organized.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
