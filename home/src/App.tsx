import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import my_photo from "./me.png";
import githubIcon from "./githubIcon.svg";
import linkedinIcon from "./linkedinIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import discordIcon from "./discordIcon.svg";
import robotIcon from "./robot1.svg";
import "./App.scss";

function App() {

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
    <>
      <div className="menu-intro-div">
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
                <a href="#contact">
                  <p>Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="intro_div" id="home">
          <div className="flex-item-left">
            <p className="p1 show-hello">Hey there!</p>
            <p className="p2 show-presentation">I'm Eber Lawrence, and</p>
            <p className="p2 show-presentation">I'm a Biomedical Engineer.</p>

          </div>
          <div className="flex-item-right">
            <img src={my_photo} className="show-pic" alt="me" />
          </div>
        </div>
        <div className="social-media">
          <p className="social-media-text">Social medias</p>
          <ul className="social-media-list">
            <li>
              <a href="https://github.com/eberlawrence" target="_blank">
                <div className="icon-borders">
                  <img alt="githubIcon" src={githubIcon} />
                </div>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/eberlawrence" target="_blank">
                <div className="icon-borders">
                  <img alt="linkedinIcon" src={linkedinIcon} />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EberLawrence" target="_blank">
                <div className="icon-borders">
                  <img alt="twitterIcon" src={twitterIcon} />
                </div>
              </a>
            </li>
            <li>
              <a href="#" >
                <div className="icon-borders">
                  <img alt="discordIcon" src={discordIcon} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="App" id="about">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="blink_me">
            Under construction...
          </p>
          <p  >
            Meanwhile, take a look at my GitHub page:
          </p>
          <a href="https://github.com/eberlawrence/">
            <img alt="Qries" src={discordIcon}
              width="150" height="70" />
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
