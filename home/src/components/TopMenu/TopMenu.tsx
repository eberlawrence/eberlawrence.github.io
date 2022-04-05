import React, { useEffect, useState } from "react";
import robotIcon from "images/robot1.svg";
import "./styles.scss";


const TopMenu: React.FC = () => {

  const [showMenu, setShowMenu] = useState<string>("menu-div-top-page");

  useEffect(() => {
    const checkScroll = () => {
      window.onscroll = function () {
        if (window.pageYOffset !== 0) {
          setShowMenu("")
        }
        else {
          setShowMenu("menu-div-top-page")
        }
      }
    };
    checkScroll();
  }, []);

  return (
    <div className={`menu-div ${showMenu}`}>
      <div className="menu-div-my-name">
        <img src={robotIcon} alt="RobotIcon" />
        <a href="https://eberlawrence.com/">Eber Lawrence</a>
      </div>
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
    </div>
  );
};

export default TopMenu;