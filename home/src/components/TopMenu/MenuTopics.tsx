import React from "react";
import "./styles.scss";


const MenuTopics: React.FC = () => {
  return (
    <div className="menu-div-topics">
      <ul>
        <li>
          <a href="#home">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="#about">
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#skills">
            <p>Skills</p>
          </a>
        </li>
        <li>
          <a href="#projects">
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a href="#gallery">
            <p>Gallery</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuTopics;