import React from "react";
import "../styles/works.css";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in attention to the smallest details and</span>
      <div className="worksImgs">
        <img src="./src/assets/works/portfolioimg1.jpg" alt="work1" className="worksImg"/>
        <img src="./src/assets/works/portfolioimg1.jpg" alt="work1" className="worksImg"/>
        <img src="./src/assets/works/portfolioimg1.jpg" alt="work1" className="worksImg"/>
        <img src="./src/assets/works/portfolioimg1.jpg" alt="work1" className="worksImg"/>
        <img src="./src/assets/works/portfolioimg1.jpg" alt="work1" className="worksImg"/>
        <img src="./src/assets/works/portfolioimg1.jpg" alt="work1" className="worksImg"/>
      </div>
    </section>
  );
};

export default Works;
