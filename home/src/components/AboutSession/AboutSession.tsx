import React from "react";
import me from "images/me2.jpg";
import "./styles.scss";


const AboutSession: React.FC = () => {
  return (
    <div className="" id="about">
      <header className="about-div">
        <div className="about-container">
          <div className="about-text">
            <div className="header-text">
              <p>Let me introduce myself...</p>
            </div>
            <div className="body-text">
              <p>Well... My name is Eber Lawrence, and I am a biomedical engineer.</p>
              <p>I started my carreer in 2015 as a research assistant at the Biomedical engineering Laboratory (<a href="http://www.biolab.eletrica.ufu.br/" target="_blank" rel="noopener noreferrer">BioLab</a>). During this time, I expanded my skills in different engineering areas, like signal processing, programming languages (e.g. Python, C#, C++), analogic and digital electronics, neuroengineering, biomedical instrumentation and Artificial Intelligence.</p>
              <p>A few years later, after finishing my graduation in 2019, I started my master's in the research fields of Computer Vision and Prosthesis Control at the same Lab. In addition to improving my programming and machine learning skills, it was a crucial time to acquire new skills in areas such as Computer Vision and robotics.</p>
              <p>In addition to my master's, I've decided to explore other areas of programming. That's when I've started to work as a front-end web developer. I've learned valuable tools, such as HTML, CSS, Javascript and ReactJS. Such tools allowed me to develop many web projects, such as this portfolio. Further, I've made available some projects you can find in the project section.</p>
              <p>Currently, I am a PhD student at the Technological University of the Shannon (TUS), researching Industry 4.0 topics, such as autonomous industrial robotics and intelligent manufacturing systems. I am fascinated with Robotics and its broad application possibilities.</p>
              <p>By the way... If you are interested in knowing more about me and my projects, just keep going throughout this page. There are always interesting things to discover! :D</p>
            </div>
          </div>
          <div className="about-extra">
            <div className="img-borders">
              <img src={me} alt="me" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AboutSession;